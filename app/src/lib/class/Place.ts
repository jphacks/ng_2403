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
}
