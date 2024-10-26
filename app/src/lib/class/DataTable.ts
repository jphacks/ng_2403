import Internship from "@/lib/class/Internship";

export default class DataTable {
  // メンバ変数名の定義
  private user_id: string;
  private internships: Internship[];

  // コンストラクタ
  constructor();
  constructor(user_id: string, internships: Internship[]);
  constructor(user_id?: string, internships?: Internship[]) {
    this.user_id = user_id || "";
    this.internships = internships || [];
  }

  // ゲッター
  public getUserId(): string {
    return this.user_id;
  }
  public getInternships(): Internship[] {
    return this.internships;
  }

  // セッター
  public setUserId(user_id: string): void {
    this.user_id = user_id;
  }
  public setInternships(internships: Internship[]): void {
    this.internships = internships;
  }
}
