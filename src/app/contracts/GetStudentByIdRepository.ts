import { Student } from '../../domain/models/Student'

export interface GetStudentByIdRepository {
  getById: (id: string) => Promise<Student | null>
}
