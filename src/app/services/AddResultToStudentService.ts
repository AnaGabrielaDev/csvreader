import { AddResultToStudent, AddResultToStudentParams } from '../../domain/features/AddResultToStudent'
import { AddRateToStudentRepository } from '../contracts/AddRateToStudentRepository'
import { GetStudentByIdRepository } from '../contracts/GetStudentByIdRepository'

export class AddResultToStudentService implements AddResultToStudent {
  constructor (
    private readonly getStudentByIdRepository: GetStudentByIdRepository,
    private readonly addRateToStudentRepository: AddRateToStudentRepository
  ) {}

  async execute ({ studentId, rate }: AddResultToStudentParams): Promise<void> {
    const student = await this.getStudentByIdRepository.getById(studentId)
    if (!student) throw new Error("Student provided don't exists")

    await this.addRateToStudentRepository.addRate({
      studentId,
      rate
    })
  }
}
