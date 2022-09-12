import { Student } from '@prisma/client'
import { CreateStudentRepository, CreateStudentRepositoryParams } from '../../../app/contracts/CreateStudentRepository'
import { ExcludeAllStudentsRepository } from '../../../app/contracts/ExcludeAllStudentsRepository'
import { ListStudentsRepository } from '../../../app/contracts/ListStudentsRepository'
import { connection } from './connection'

export class PrismaStudentRepository implements CreateStudentRepository, ListStudentsRepository, ExcludeAllStudentsRepository {
  async create ({
    name,
    cityName,
    schoolName,
    className,
    grade
  }: CreateStudentRepositoryParams): Promise<void> {
    await connection.student.create({
      data: {
        name,
        cityName,
        schoolName,
        className,
        grade
      }
    })
  }

  async list (): Promise<Student[]> {
    const students = await connection.student.findMany({
      include: {
        Result: true
      }
    })

    return students
  }

  async deleteAll (): Promise<void> {
    await connection.result.deleteMany()
    await connection.student.deleteMany()
  }

  async getById (id: string): Promise<Student> {
    const student = await connection.student.findUniqueOrThrow({
      where: {
        id
      }
    })

    return student
  }
}
