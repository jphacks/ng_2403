import Schedule from "@/lib/class/Schedule";
import db from "@/lib/database/database";
import UserInfo from "@/lib/interface/UserInfo";

async function createSchedule(userInfo: UserInfo, schedule: Schedule) {
    try {
        // 指定されたコレクションにデータを追加
        const docRef = await db.;
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    
}