import db from "@/lib/database/database";
import DataTable from "@/lib/class/DataTable";
import { get, ref } from "@firebase/database";
import jsonToDataTable from "../jsonToDataTable";

//　ユーザのインターンシップ情報を一つだけデータベースから取得する関数
export default async function readInternship(
  user_id: string,
  title: string
): Promise<DataTable | null> {
  // データベースからユーザ情報を取得
  try {
    const snapshot = await get(ref(db, `users/${user_id}`));
    if (snapshot.exists()) {
      const data = snapshot.val();
      const internships = data.internships;
      const internship = internships.find(
        (internship: string) => JSON.parse(internship).title === title
      );
      return jsonToDataTable(internship);
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error getting document: ", error);
    return null;
  }
}
