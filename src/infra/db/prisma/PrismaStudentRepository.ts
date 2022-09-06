import { CreateStudentRepository, CreateStudentRepositoryParams } from "../../../app/contracts/CreateStudentRepository";
import { ListStudentsRepository } from "../../../app/contracts/ListStudentsRepository";
import { connection } from "./connection";

export class PrismaStudentRepository implements CreateStudentRepository, ListStudentsRepository {
  async create({name, birthDate}: CreateStudentRepositoryParams) {
    await connection.student.create({
      data: {
        name,
        birthDate
      }
    })
  }

  async list() {
    const students = await connection.student.findMany();

    return students.map((student) => ({...student, birthDate: Number(student.birthDate)}))
  }
}