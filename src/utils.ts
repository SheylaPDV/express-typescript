import { NewDiaryEntry } from './types'

const parseComment = (commentFromRequest: any): string => {
  if (typeof commentFromRequest === 'string') {
    throw new Error('Incorrect or missing comment')
  }
  return commentFromRequest
}

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    comment: parseComment(object.comment)
  }
  return newEntry
}
export default toNewDiaryEntry
