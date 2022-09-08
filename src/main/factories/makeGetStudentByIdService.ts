import { GetStudentByIdService } from "../../app/services/GetStudentByIdService";
import { PrismaStudentRepository } from "../../infra/db/prisma/PrismaStudentRepository";

const studentRepository = new PrismaStudentRepository();
const getStudentByIdService = new GetStudentByIdService(studentRepository);

export { getStudentByIdService }