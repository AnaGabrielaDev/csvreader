import { CreateStudentRepository, CreateStudentRepositoryParams } from "../../../app/contracts/CreateStudentRepository";
import { ExcludeAllStudentsRepository } from "../../../app/contracts/ExcludeAllStudentsRepository";
import { ListStudentsRepository } from "../../../app/contracts/ListStudentsRepository";
import { connection } from "./connection";

export class PrismaStudentRepository implements CreateStudentRepository, ListStudentsRepository, ExcludeAllStudentsRepository {
  async create({
    name, 
    cityName, 
    schoolName,
    className,
    grade}: CreateStudentRepositoryParams) {
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

  async list() {
    const students = await connection.student.findMany();

    return students.map((student) => ({...student}))
  }

  async deleteAll() {
    await connection.student.deleteMany()
  }
}