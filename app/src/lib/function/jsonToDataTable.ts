import DataTable from "../class/DataTable";

// JSONデータをDataTableに変換する関数
export default function jsonToDataTable(json: any): DataTable {
  const parsed_data = JSON.parse(json);

  // DataTableクラスのインスタンスを生成
  const data_table = new DataTable(
    parsed_data.user_id,
    parsed_data.internships
  );
  return data_table;
}
