export interface CreateStudentRepositoryParams {
  name: string
  cityName: string
  schoolName: string
  className: string
  grade: string
}

export interface CreateStudentRepository {
  create: (params: CreateStudentRepositoryParams) => Promise<void>
}