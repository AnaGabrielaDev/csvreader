import { Csv } from "../models/Csv"

export interface RegisterStudentByCsvParams {
  csv: Csv
}

export interface RegisterStudentByCsv {
  execute: (params: RegisterStudentByCsvParams) => Promise<void>
}
