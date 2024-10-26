import db from "@/lib/database/database";
import DataTable from "@/lib/class/DataTable";
import { set, ref } from "@firebase/database";
import objectToJson from "@/lib/function/dataTableToJson";

// ユーザ情報をデータベースに追加する関数
export default async function writeSchedule(data_table: DataTable) {
  const json = JSON.parse(objectToJson(data_table));
  // データベースにユーザ情報を追加
  try {
    await set(ref(db, `users/${data_table.getUserId()}`), {
      internships: json.internships,
    });
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}
