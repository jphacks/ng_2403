import DataTable from "../class/DataTable";
import Internship from "../class/Internship";
import InternTerm from "../class/InternTerm";
import Schedule from "../class/Schedule";

// JSONデータをDataTableに変換する関数
export default function jsonToDataTable(json: any): DataTable {
  const parsed_data = JSON.parse(json);

  // DataTableクラスのインスタンスを生成
  const data_table = new DataTable(
    parsed_data.user_id,
    parsed_data.internships.map((internship: any) => {
      const parsed_internship = JSON.parse(internship);
      const parsed_intern_term = JSON.parse(parsed_internship.intern_term);
      // Internshipクラスのインスタンスを生成
      return new Internship(
        parsed_internship.title,
        // InternTermクラスのインスタンスを生成
        new InternTerm(parsed_intern_term.start, parsed_intern_term.end),
        internship.schedules.map((schedule: any) => {
          const parsed_schedule = JSON.parse(schedule);
          // Scheduleクラスのインスタンスを生成
          return new Schedule(parsed_schedule.date, parsed_schedule.places);
        }),
        parsed_internship.laggages
      );
    })
  );

  return data_table;
}
