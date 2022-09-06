import { Student } from "../../domain/models/Student";

export interface ListStudentsRepository {
  list: () => Promise<Student[]>
}