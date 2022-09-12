import { Request, Response } from 'express'
import { addResultToStudentService } from '../factories/makeAddResultToStudentService'

export class ResultController {
  async addRate (req: Request, res: Response): Promise<Response> {
    const { studentId, rate } = req.body

    if (rate > 6) return res.status(400).send('invalid rate')

    await addResultToStudentService.execute({
      studentId,
      rate: Number(rate)
    })

    return res.end()
  }
}
