import express from "express"
import { StudentController } from "./controllers/StudentController";
import { uploader } from "./middlewares/uploadFile";

const studentController = new StudentController();
const app = express();

app.get('/student', uploader.single('file'), studentController.list);
app.post('/student/import', uploader.single('file'), studentController.create);

app.listen(3333);