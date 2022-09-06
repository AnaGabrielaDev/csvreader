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

    const correctData = dataFromCsv.every((student: any) => student.name && student["birth date"])
    if(!correctData) throw new Error("required fields is not provided");

    dataFromCsv.forEach(async (student: any) => {
      const [day, month, year] = student["birth date"].split("/")
      const formattedDateToInt = new Date(Number(year), Number(month) - 1, Number(day))
      await this.createStudentRepository.create({
        name: student.name,
        birthDate: formattedDateToInt.getTime()
      })
    })
  };
}