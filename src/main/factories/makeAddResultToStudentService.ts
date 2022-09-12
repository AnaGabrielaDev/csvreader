import { AddResultToStudentService } from '../../app/services/AddResultToStudentService'
import { PrismaResultsRepository } from '../../infra/db/prisma/PrismaResultsRepository'
import { PrismaStudentRepository } from '../../infra/db/prisma/PrismaStudentRepository'

const studentRepository = new PrismaStudentRepository()
const resultRepository = new PrismaResultsRepository()
const addResultToStudentService = new AddResultToStudentService(studentRepository, resultRepository)

export { addResultToStudentService }
