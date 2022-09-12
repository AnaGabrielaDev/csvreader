import express from 'express'
import path from 'path'
import { ResultController } from './controllers/ResultController'
import { StudentController } from './controllers/StudentController'
import { uploader } from './middlewares/uploadFile'

const studentController = new StudentController()
const resultController = new ResultController()
const app = express()

app.use(express.json())
app.use(express.static('public'))

app.get('/student', uploader.single('file'), studentController.list)
app.post('/student/import', uploader.single('file'), studentController.create)
app.delete('/student', studentController.delete)
app.get('/student/:id', studentController.getById)

app.post('/result', resultController.addRate)

app.get('/', (req, res) => res.sendFile('/public/index.html'))
app.get('/result/createResult/:studentId', (req, res) => {
  const filePath = path.resolve(__dirname, '..', '..', 'public', 'registerResult', 'registerResult.html')
  return res.sendFile(filePath)
})

const port = process.env.PORT ?? 3333

app.listen(port)
