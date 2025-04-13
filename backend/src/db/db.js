import mongoose from "mongoose";
export default function connectToDb() {
  mongoose
    .connect(
      "mongodb+srv://devzohaib:5l42TXM7u62oiFv2@bitride.8kqtx.mongodb.net/"
    )
    .then(() => {
      console.log("Connected to db");
    })
    .catch((err) => {
      console.log(err);
    });
}
