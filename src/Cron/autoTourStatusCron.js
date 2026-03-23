import cron from "node-cron";
import TourModel from "../models/tourModel.js";

export const autoTourStatusCron = () => {
  
  // 🔥 Runs every day at 12:00 AM
  cron.schedule("0 0 * * *", async () => {
    try {
      console.log("⏰ Running Tour Status Cron...");

      const today = new Date();

      // ✅ Update completed tours
      const result = await TourModel.updateMany(
        {
          endDate: { $lt: today },
          status: { $ne: "completed" }, // avoid re-update
        },
        {
          $set: { status: "completed" },
        }
      );

      console.log(`✅ Tours updated: ${result.modifiedCount}`);

    } catch (error) {
      console.error("❌ Cron Error:", error);
    }
  });

};