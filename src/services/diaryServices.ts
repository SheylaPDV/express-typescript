// typescript por defecto no es capaz de importar esto. en tsconfig.json añadiremos: "resolveJsonModule": true,
// Si no pones la extension al final, ts busca los archivos en este orden: (.tsx, .ts, .node, .js, .json.)
import { DiaryEntry, NonSensitiveInfoDiaryEntry, NewDiaryEntry } from '../types'
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

export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const newDiary = {
    id: Math.max(...diaries.map(d => d.id)) + 1,
    ...newDiaryEntry
  }
  diaries.push(newDiary)
  return newDiary
}
