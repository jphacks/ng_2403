import DataTable from "../class/DataTable";

// データテーブルを日付でソートする関数
export default function sortDataTable(data_table: DataTable): DataTable {
  // データテーブルのインターンシップ情報を日付でソート
  const internships = data_table.getInternships();
  const sorted_internships = internships.sort((a, b) => {
    const a_start_date = a.getInternTerm().getStart();
    const data_a_start_date = new Date(a_start_date);
    const b_start_date = b.getInternTerm().getStart();
    const data_b_start_date = new Date(b_start_date);

    if (data_a_start_date > data_b_start_date) {
      return -1;
    } else if (a_start_date < b_start_date) {
      return 1;
    } else {
      return 0;
    }
  });
  return new DataTable(data_table.getUserId(), sorted_internships);
}
