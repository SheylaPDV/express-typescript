// Aqui creamos los tipos
export type Weather = "sunny" | "rainy" | "cloudy" | "windy" | "stormy";
export type Visibility = "great" | "good" | "ok" | "poor";

// Aqui se define el "contrato"
export interface DiaryEntry {
  id: number;
  date: string;
  weather: Weather;
  visibility: Visibility;
  comment: string;
}

// Esto lo que hace es heredar todos los tipos de DiaryEntry + el nuevo tipo creado. se puede hacer con type pero la sintaxis es menos legible
// interface SpecialDiaryEntry extends DiaryEntry {
//     flightNumber: number
// }
