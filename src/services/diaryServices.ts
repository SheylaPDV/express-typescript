// typescript por defecto no es capaz de importar esto. en tsconfig.json añadiremos: "resolveJsonModule": true,
// Si no pones la extension al final, ts busca los archivos en este orden: (.tsx, .ts, .node, .js, .json.)
import { DiaryEntry } from '../types'
import diaryData from './diaries.json'

// Importamos el tipo personalizado creado en types.d.ts
const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

export const addEntry = (): undefined => undefined
