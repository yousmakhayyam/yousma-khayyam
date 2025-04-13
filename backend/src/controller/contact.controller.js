import { google } from "googleapis";
import fs from "fs";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import contactCreate from "../services/createContact.services.js";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "zohaibkhalid.pk@gmail.com",
    pass: "kyvt tvce dzua mxal",
  },
});

const oauth2Client = new google.auth.OAuth2(
  "418963934614-hq7ffu66ofp3r8oga4emjveqsaq62qht.apps.googleusercontent.com",
  "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",
  "ya29.a0AXeO80Rvk8IOt0_GffyOzzCMP-qhiA5wzjzi7UMqD4h1UcCwKeBQ9IfYo2NTRG1eE8EqOUD7Fd_X55VRqxSDBJZqC4u0qZohXOR7xbBmJJiFU3T_4sA5z6rz8CG5H-PeVeGdHrGfXNf7vJaHu2zrovho0WIsa202XwLAykN3aCgYKAW8SARMSFQHGX2MivOU-b7hEZtbDl-1fOP-jJg0175"
);
oauth2Client.setCredentials({
  refresh_token:
    "1//04WPvCRfQ3dVNCgYIARAAGAQSNwF-L9IrKXwej0eNem4Ob5VEYyE9jDBDblP1wx8oEHiKSs5CpNIhYg4eRQMJGhV-kkCWW0gXlBw",
});

const drive = google.drive({ version: "v3", auth: oauth2Client });

const CreateContact = async (req, res) => {
  try {
    const { name, email, phoneNumber, message } = req.body;
    const file = req.file;

    let viewLink = "No file uploaded";
    let downloadLink = "No file uploaded";
    let fileName = "No file uploaded";
    let driveResponse = null;

    if (file) {
      const maxSize = 15 * 1024 * 1024;
      if (file.size > maxSize) {
        return res
          .status(400)
          .json({ error: "File size exceeds the 15MB limit" });
      }

      const fileMetadata = {
        name: file.originalname,
        parents: [process.env.FOLDER_ID],
      };

      const media = {
        mimeType: file.mimetype,
        body: fs.createReadStream(file.path),
      };

      driveResponse = await drive.files.create({
        resource: fileMetadata,
        media: media,
        fields: "id, name, webViewLink, webContentLink",
      });

      fileName = driveResponse.data.name;
      viewLink = driveResponse.data.webViewLink;
      downloadLink = driveResponse.data.webContentLink;

      fs.unlink(file.path, (err) => {
        if (err) console.error("Error deleting file:", err);
      });
    }

    const mailOptions = {
      from: 'zohaibkhalid.pk@gmail.com',
      to: 'yousmakhayyam@gmail.com',
      subject: "A new Client from Portfolio",
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #1e1e1e; color: #ffffff; padding: 20px; border-radius: 8px;">
          <h2 style="color: #00bcd4;">New Contact Submission</h2>
          <div style="border-top: 2px solid #00bcd4; margin-bottom: 20px;"></div>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone Number:</strong> ${phoneNumber || "Not provided"}</p>
          <p><strong>Message:</strong> ${message || "No message provided"}</p>
          <p><strong>File Name:</strong> ${fileName}</p>
          <p><strong>View Link:</strong> <a href="${viewLink}" style="color: #00bcd4;">${viewLink}</a></p>
          <p><strong>Download Link:</strong> <a href="${downloadLink}" style="color: #00bcd4;">${downloadLink}</a></p>
          <div style="border-top: 2px solid #00bcd4; margin-top: 20px;"></div>
          <footer style="margin-top: 20px; text-align: center;">
            <p style="font-size: 14px;">&copy; ${new Date().getFullYear()} Bitbuilders.tech. All rights reserved.</p>
            <a href="https://bitbuilders.tech" style="color: #00bcd4; text-decoration: none;">Visit our website</a>
          </footer>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    await contactCreate(
      name,
      email,
      phoneNumber,
      viewLink,
      downloadLink,
      message
    );

    return res.status(201).json({
      message: "Contact details submitted successfully",
      fileId: driveResponse ? driveResponse.data.id : null,
      fileName,
      viewLink,
      downloadLink,
    });
  } catch (error) {
    console.error("Error handling contact request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default CreateContact;
