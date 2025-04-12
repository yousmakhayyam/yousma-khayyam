import React, { useState, useCallback } from "react";
import { Button } from "./ui/button";

const ContactUs: React.FC = React.memo(() => {
  const API_URL = import.meta.env.VITE_BACKEND_API;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phoneNumber: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<string | null>(null);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
      }));
    },
    []
  );

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
        setFile(e.target.files[0]);
      }
    },
    []
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoading(true);
      setResponse(null);

      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("message", formData.message);
      formDataToSend.append("phoneNumber", formData.phoneNumber);

      if (file) {
        formDataToSend.append("file", file);
      }
      console.log(API_URL);
      try {
        const response = await fetch(`${API_URL}/contact/upload`, {
          method: "POST",
          body: formDataToSend,
        });

        const data = await response.json();

        if (response.ok) {
          setResponse(`Message sent successfully! File ID: ${data.fileId}`);
          setFormData({ name: "", email: "", message: "", phoneNumber: "" });
          setFile(null);
        } else {
          setResponse(`Error: ${data.error}`);
        }
      } catch (error) {
        setResponse("Failed to send message. Please try again.");
      }

      setLoading(false);
    },
    [formData, file]
  );

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let’s work together to make it happen!
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-card p-8 rounded-lg border shadow-lg space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-muted-foreground">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full mt-1 p-3 border rounded-lg bg-background"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full mt-1 p-3 border rounded-lg bg-background"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-muted-foreground">
              Phone Number
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="w-full mt-1 p-3 border rounded-lg bg-background"
              placeholder="Enter your phone number"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-muted-foreground">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full mt-1 p-3 border rounded-lg bg-background"
              rows={4}
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-muted-foreground">
              Attach a File (Optional)
            </label>
            <input
              type="file"
              onChange={handleFileChange}
              className="w-full mt-1 p-3 border rounded-lg bg-background"
            />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </Button>
          {response && (
            <p
              className={`text-center text-sm mt-4 ${
                response.startsWith("Error") ? "text-red-500" : "text-green-500"
              }`}
            >
              {response}
            </p>
          )}
        </form>
      </div>
    </section>
  );
});

ContactUs.displayName = "ContactUs";

export default ContactUs;
