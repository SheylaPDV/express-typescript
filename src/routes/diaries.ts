import express from 'express'
import * as diaryServices from '../services/diaryServices'
const router = express.Router()

// Ruta para traer datos
router.get('/', (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})

// Ruta para traer datos por id
router.get('/:id', (req, res) => {
  // Los params siempre vienen como string, si necesitas number hay que transofrmarlo(con operador unario + o con Number)
  const diary = diaryServices.findById(+req.params.id)

  return (diary != null) ? res.send(diary) : res.sendStatus(404)
  // res.send(diary?.weather)
})

// Ruta para crear datos
router.post('/', (req, res) => {
  // Introduce los datos en el body
  const { date, weather, visibility, comment } = req.body
  // Se llama al metodo addEntry para crear nuevos datos
  const newDiaryEntry = diaryServices.addDiary(date, weather, visibility, comment)
  // Se transforma a json
  res.json(newDiaryEntry)
})

export default router
