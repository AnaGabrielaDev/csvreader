export interface AddRateToStudentRepositoryParams {
  studentId: string
  rate: number
}

export interface AddRateToStudentRepository {
  addRate: (params: AddRateToStudentRepositoryParams) => Promise<void>
}
