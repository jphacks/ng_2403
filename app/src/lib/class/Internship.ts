import InternTerm from "./InternTerm";
import Schedule from "@/lib/class/Schedule";

export default class Internship {
  // メンバ変数名の定義
  private title: string;
  private intern_term: InternTerm;
  private schedules: Schedule[];
  private laggages: string[] | null;

  // コンストラクタ
  constructor();
  constructor(
    title: string,
    intern_term: InternTerm,
    schedules: Schedule[],
    laggages: string[] | null
  );
  constructor(
    title?: string,
    intern_term?: InternTerm,
    schedules?: Schedule[],
    laggages?: string[] | null
  ) {
    this.title = title || "";
    this.intern_term = intern_term || new InternTerm("", "");
    this.schedules = schedules || [];
    this.laggages = laggages || null;
  }

  // ゲッター
  public getTitle(): string {
    return this.title;
  }
  public getInternTerm(): InternTerm {
    return this.intern_term;
  }
  public getSchedules(): Schedule[] {
    return this.schedules;
  }
  public getLaggages(): string[] | null {
    return this.laggages;
  }

  // セッター
  public setTitle(title: string): void {
    this.title = title;
  }
  public setInternTerm(intern_term: InternTerm): void {
    this.intern_term = intern_term;
  }
  public setSchedules(schedules: Schedule[]): void {
    this.schedules = schedules;
  }
  public setLaggages(laggages: string[] | null): void {
    this.laggages = laggages;
  }
}
