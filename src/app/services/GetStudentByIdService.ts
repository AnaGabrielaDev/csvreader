import { Student } from "../../domain/models/Student";
import { GetStudentByIdRepository } from "../contracts/GetStudentByIdRepository";

export class GetStudentByIdService {
    constructor(
        private readonly getStudentByIdRepository: GetStudentByIdRepository
    ){}
    async execute(id: string): Promise<Student> {
        const student = await this.getStudentByIdRepository.getById(id)
        
        return student;
    }
}