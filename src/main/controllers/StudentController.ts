import { Request, Response } from 'express'
import { excludeAllStudentsService } from '../factories/makeExcludeAllStudentsService'
import { getStudentByIdService } from '../factories/makeGetStudentByIdService'
import { listAllStudentsService } from '../factories/makeListAllStudentsService'
import { registerStudentByCsvService } from '../factories/makeRegisterStudentByCsvService'

export class StudentController {
  async create (req: Request, res: Response): Promise<Response> {
    if (!req.file) return res.status(400).send('csv is required')

    try {
      await registerStudentByCsvService.execute({
        csv: {
          fileName: req.file.originalname,
          buffer: req.file.buffer
        }
      })

      return res.send()
    } catch (error: any) {
      return res.status(400).send(error.message)
    }
  }

  async list (req: Request, res: Response): Promise<Response> {
    const students = await listAllStudentsService.execute()

    const response = students.map(student => ({
      ...student
    }))
    return res.json(response)
  }

  async delete (req: Request, res: Response): Promise<Response> {
    await excludeAllStudentsService.execute()

    return res.send()
  }

  async getById (req: Request, res: Response): Promise<Response> {
    const id = req.params.id
    const student = await getStudentByIdService.execute(id)

    return res.json(student)
  }
}
