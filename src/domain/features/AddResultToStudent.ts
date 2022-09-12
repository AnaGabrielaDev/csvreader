export interface AddResultToStudentParams {
  studentId: string
  rate: number
}

export interface AddResultToStudent {
  execute: (params: AddResultToStudentParams) => Promise<void>
}
