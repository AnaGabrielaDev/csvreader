export interface CreateStudentRepositoryParams {
  name: string
  birthDate: number
}

export interface CreateStudentRepository {
  create: (params: CreateStudentRepositoryParams) => Promise<void>
}