import { AddRateToStudentRepository, AddRateToStudentRepositoryParams } from '../../../app/contracts/AddRateToStudentRepository'
import { connection } from './connection'

export class PrismaResultsRepository implements AddRateToStudentRepository {
  async addRate ({ studentId, rate }: AddRateToStudentRepositoryParams): Promise<void> {
    await connection.result.create({
      data: {
        studentId,
        rate
      }
    })
  }
}
