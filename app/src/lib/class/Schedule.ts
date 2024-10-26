import Place from "./Place";

export default class Schedule {
  // メンバ変数の定義
  private date: string;
  private places: Place[];

  // コンストラクタ
  constructor();
  constructor(date: string, places: Place[]);
  constructor(date?: string, places?: Place[]) {
    this.date = date || "";
    this.places = places || [];
  }

  // ゲッター
  public getDate(): string {
    return this.date;
  }
  public getPlaces(): Place[] {
    return this.places;
  }

  // セッター
  public setDate(date: string): void {
    this.date = date;
  }
  public setPlaces(places: Place[]): void {
    this.places = places;
  }
}
