import db from "@/lib/database/database";
import DataTable from "@/lib/class/DataTable";
import { get, ref } from "@firebase/database";
import Internship from "@/lib/class/Internship";
import InternTerm from "@/lib/class/InternTerm";
import Schedule from "@/lib/class/Schedule";
import Place from "@/lib/class/Place";

//　ユーザのインターンシップ情報全てをデータベースから取得する関数
export default async function readManyInternships(
  user_id: string
): Promise<Internship[] | null> {
  // データベースからユーザ情報を取得
  // try {
  const snapshot = await get(ref(db, `users/${user_id}`));
  if (snapshot.exists()) {
    const internshipList = [];
    const data = snapshot.val();
    for (let i = 0; i < data.internships.length; i++) {
      const start = JSON.parse(data.internships[i].intern_term).start;
      const end = JSON.parse(data.internships[i].intern_term).end;
      const intern_term = new InternTerm(start, end);
      const places = [];
      // console.log(data.internships[i].schedule);
      const schedules = JSON.parse(data.internships[i].schedule)[0];
      console.log(schedules);
      for (let j = 0; j < schedules.places.length; j++) {
        const place = new Place(
          schedules.places[j].name,
          schedules.places[j].arrival_time,
          schedules.places[j].departure_time,
          "",
          ""
        );
        places.push(place);
      }
      const schedule = new Schedule(
        schedules.date,
        places
      );
      const internship = new Internship(
        data.internships[i].title,
        intern_term,
        [schedule],
        null
      );
      internshipList.push(internship);
    }
    return internshipList;
    // return jsonToDataTable(data.internships);
  } else {
    return null;
  }
  // } catch (error) {
  //   console.error("Error getting document: ", error);
  //   return null;
  // }
}
