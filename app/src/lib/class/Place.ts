import { Attribute } from "@/lib/enum/Attribute";
import { TransportationToHere } from "@/lib/enum/TransportationToHere";

export default class Place {
  // メンバ変数の定義
  private name: string;
  private arrival_time: string;
  private departure_time: string;
  private transportation_to_here: TransportationToHere;
  private attribute: Attribute;

  // コンストラクタ
  constructor();
  constructor(
    name: string,
    arrival_time: string,
    departure_time: string,
    transportation_to_here: TransportationToHere,
    attribute: Attribute
  );
  constructor(
    name?: string,
    arrival_time?: string,
    departure_time?: string,
    transportation_to_here?: TransportationToHere,
    attribute?: Attribute
  ) {
    this.name = name || "";
    this.arrival_time = arrival_time || "";
    this.departure_time = departure_time || "";
    this.transportation_to_here =
      transportation_to_here || TransportationToHere.WALK;
    this.attribute = attribute || Attribute.OTHER;
  }

  // ゲッター
  public getName(): string {
    return this.name;
  }
  public getArrivalTime(): string {
    return this.arrival_time;
  }
  public getDepartureTime(): string {
    return this.departure_time;
  }
  public getTransportationToHere(): TransportationToHere {
    return this.transportation_to_here;
  }
  public getAttribute(): Attribute {
    return this.attribute;
  }

  // セッター
  public setName(name: string): void {
    this.name = name;
  }
  public setArrivalTime(arrival_time: string): void {
    this.arrival_time = arrival_time;
  }
  public setDepartureTime(departure_time: string): void {
    this.departure_time = departure_time;
  }
  public setTransportationToHere(
    transportation_to_here: TransportationToHere
  ): void {
    this.transportation_to_here = transportation_to_here;
  }
  public setAttribute(attribute: Attribute): void {
    this.attribute = attribute;
  }
}
