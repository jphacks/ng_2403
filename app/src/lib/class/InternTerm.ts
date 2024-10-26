export default class InternTerm {
  // メンバ変数の定義
  start: string;
  end: string;

  // コンストラクタ
  constructor(start: string, end: string) {
    this.start = start;
    this.end = end;
  }

  // ゲッター
  public getStart(): string {
    return this.start;
  }
  public getEnd(): string {
    return this.end;
  }

  // セッター
  public setStart(start: string): void {
    this.start = start;
  }
  public setEnd(end: string): void {
    this.end = end;
  }
}
