import DataTable from "../class/DataTable";

// DataTableをJSONデータに変換する関数
export default function dataTableToJson(data_table: DataTable) {
  const json = JSON.stringify(data_table);
  return json;
}
