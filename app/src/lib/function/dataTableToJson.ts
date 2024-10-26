import DataTable from "../class/DataTable";
import Internship from "../class/Internship";
import Schedule from "../class/Schedule";

// JSONデータに変換する関数
export default function dataTableToJson(data_table: DataTable) {
  // DataTableクラスのインスタンスをJSONデータに変換
  const json = JSON.stringify({
    user_id: data_table.getUserId(),
    internships: data_table.getInternships().map((internship: Internship) => {
      // InternshipクラスのインスタンスをJSONデータに変換
      return {
        title: internship.getTitle(),
        // InternTermクラスのインスタンスをJSONデータに変換
        intern_term: JSON.stringify(internship.getInternTerm()),
        // ScheduleクラスのインスタンスをJSONデータに変換
        schedule: JSON.stringify(
          internship.getSchedules().map((schedule: Schedule) => {
            return {
              // ScheduleクラスのインスタンスをJSONデータに変換
              date: schedule.getDate(),
              places: schedule.getPlaces(),
            };
          })
        ),
      };
    }),
  });
  return json;
}
