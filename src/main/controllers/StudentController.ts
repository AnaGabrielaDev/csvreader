import { Request, Response } from "express";
import { excludeAllStudentsService } from "../factories/makeExcludeAllStudentsService";
import { listAllStudentsService } from "../factories/makeListAllStudentsService";
import { registerStudentByCsvService } from "../factories/makeRegisterStudentByCsvService";

export class StudentController {
  async create(req: Request, res: Response) {
    if(!req.file) return res.status(400).send("csv is required")

    try {
      await registerStudentByCsvService.execute({
        csv: {
          fileName: req.file.originalname,
          buffer: req.file.buffer
        }
      })

      return res.send();
    }catch(error: any) {
      res.status(400).send(error.message)
    }
  }

  async list(req: Request, res: Response) {
    const students = await listAllStudentsService.execute();

    const response = students.map(student => ({
      ...student,
      birthDate: new Date(Number(student.birthDate))
    }))
    return res.json(response);
  }

  async delete(req: Request, res: Response) {
    await excludeAllStudentsService.execute();

    res.send();
  }
}