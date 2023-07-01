// typescript por defecto no es capaz de importar esto. en tsconfig.json añadiremos: "resolveJsonModule": true,
// Si no pones la extension al final, ts busca los archivos en este orden: (.tsx, .ts, .node, .js, .json.)
import { DiaryEntry, NonSensitiveInfoDiaryEntry, Visibility, Weather } from '../types'
import diaryData from './diaries.json'

// Importamos el tipo personalizado creado en types.d.ts
const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

// Existe lña posibilidad de que no encuentre un id y deba devolver undefined. para evitar este error, añadimos undefined como posible caso
export const findById = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
  const entry = diaries.find(d => d.id === id)
  // Quitamos comentario aqui tambien
  if (entry != null) {
    const { comment, ...restOfDiary } = entry
    return restOfDiary
  }
  return undefined
}

// Nos devuelve todos los datos menos comment.
export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => {
    return {
      id,
      date,
      weather,
      visibility
    }
  })
}

export const addDiary = (date: string, weather: Weather, visibility: Visibility, comment: string): DiaryEntry => {
  const newDiaryEntry = {
    id: Math.max(...diaries.map(d => d.id)) + 1,
    date,
    weather,
    visibility,
    comment
  }
  diaries.push(newDiaryEntry)
  return newDiaryEntry
}
