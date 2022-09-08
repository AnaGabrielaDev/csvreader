import express from "express"
import { StudentController } from "./controllers/StudentController";
import { uploader } from "./middlewares/uploadFile";

const studentController = new StudentController();
const app = express();

app.use(express.static('public'));

app.get('/student', uploader.single('file'), studentController.list);
app.post('/student/import', uploader.single('file'), studentController.create);
app.delete('/student', studentController.delete);
app.get('/student/:id', studentController.getById)

app.get('/', (req, res) => res.sendFile("/public/index.html"));

const port = process.env.PORT || 3333;

app.listen(port);