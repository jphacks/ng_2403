import db from "@/lib/database/database";
import DataTable from "@/lib/class/DataTable";
import { set, ref } from "@firebase/database";
import dataTableToJson from "@/lib/function/dataTableToJson";

// ユーザ情報をデータベースに追加する関数
export default async function writeDataTable(
  data_table: DataTable
): Promise<void> {
  const json = JSON.parse(dataTableToJson(data_table));
  // データベースにユーザ情報を追加
  try {
    await set(ref(db, `users/${data_table.getUserId()}`), {
      internships: json.internships,
    });
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}
