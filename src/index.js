import "dotenv/config";
import connectDB from "./db/dbConnect.js";
import app from "./app.js";

const port = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectDB();
    app.on("error", (err) => {
      console.log("Server Error : ", err);
    });
    app.listen(port, () => console.log(`Server is running on port ${port}`));
  } catch (error) {
    console.error("DB CONNECTION FAILED:", error.message)
    process.exit(1)
  }
};

startServer()
