import Internship from "@/lib/class/Internship";
import DataTable from "@/lib/class/DataTable";

// タイトルからインターンシップ情報を取得する関数
const getInfomation = (
  title: string,
  data_table: DataTable
): Internship | null => {
  const internships = data_table.getInternships();
  const internship = internships.find((internship) => {
    return internship.getTitle() === title;
  });
  if (internship === undefined) {
    return null;
  }
  return internship;
};

export default getInfomation;
