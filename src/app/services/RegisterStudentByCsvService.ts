import { RegisterStudentByCsv, RegisterStudentByCsvParams } from "../../domain/features/RegisterStudentByCsv";
import { CreateStudentRepository } from "../contracts/CreateStudentRepository";
import { CsvReader } from "../contracts/CsvReader";

export class RegisterStudentByCsvService implements RegisterStudentByCsv {
  constructor(
    private readonly csvReader: CsvReader,
    private readonly createStudentRepository: CreateStudentRepository
  ){}
  async execute({csv}: RegisterStudentByCsvParams) {
    const dataFromCsv = await this.csvReader.readFromBuffer(csv.buffer);

    const correctData = dataFromCsv.every((student: any) => student.name)
    if(!correctData) throw new Error("required fields is not provided");

    dataFromCsv.forEach(async (student: any) => {
      await this.createStudentRepository.create({
        name: student.name,
        cityName: student.cityName,
        schoolName: student.schoolName,
        className: student.className,
        grade: student.grade,
      })
    })
  };
}