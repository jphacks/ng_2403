import db from "@/lib/database/database";
import DataTable from "@/lib/class/DataTable";
import { get, ref } from "@firebase/database";
import jsonToDataTable from "../jsonToDataTable";

//　ユーザのインターンシップ情報全てをデータベースから取得する関数
export default async function readManyInternships(
  user_id: string
): Promise<DataTable | null> {
  // データベースからユーザ情報を取得
  try {
    const snapshot = await get(ref(db, `users/${user_id}`));
    if (snapshot.exists()) {
      const data = snapshot.val();
      return jsonToDataTable(data.internships);
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error getting document: ", error);
    return null;
  }
}
