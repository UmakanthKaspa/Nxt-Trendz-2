import dotenv from "dotenv";
import { IConfig } from "../types/types";

dotenv.config();

const connectDB = async () => {
  try {
    const config: IConfig = {
      PORT: process.env.PORT ? Number(process.env.PORT) : 5001,
      MONGODB_URL: process.env.MONGODB_URL ?? "",
      SECRET_KEY: process.env.SECRET_KEY ?? "",
    };

    const missingVars = [];
    if (!config.MONGODB_URL) missingVars.push("MONGODB_URL");
    if (!config.SECRET_KEY) missingVars.push("SECRET_KEY");
    if (missingVars.length > 0) {
      throw new Error(
        `Missing required environment variables: ${missingVars.join(", ")}`
      );
    }

    console.log("Configuration:", config);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectDB;
