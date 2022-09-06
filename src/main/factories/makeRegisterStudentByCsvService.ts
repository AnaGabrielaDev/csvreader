import { RegisterStudentByCsvService } from "../../app/services/RegisterStudentByCsvService";
import { CsvParserAdapter } from "../../infra/csv/CsvParserAdapter";
import { PrismaStudentRepository } from "../../infra/db/prisma/PrismaStudentRepository";

const csvParserAdapter = new CsvParserAdapter()
const studentRepository = new PrismaStudentRepository()
const registerStudentByCsvService = new RegisterStudentByCsvService(csvParserAdapter, studentRepository);

export { registerStudentByCsvService }