import { ExcludeAllStudentsService } from "../../app/services/ExcludeAllStudentService";
import { PrismaStudentRepository } from "../../infra/db/prisma/PrismaStudentRepository";

const excludeAllStudentsRepository = new PrismaStudentRepository();
const excludeAllStudentsService = new ExcludeAllStudentsService(excludeAllStudentsRepository);

export { excludeAllStudentsService }