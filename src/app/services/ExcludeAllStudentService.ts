import { ExcludeAllStudents } from "../../domain/features/ExcludeAllStudents";
import { ExcludeAllStudentsRepository } from "../contracts/ExcludeAllStudentsRepository";

export class ExcludeAllStudentsService implements ExcludeAllStudents {
    constructor(
        private readonly excludeAllStudents: ExcludeAllStudentsRepository
    ){} 
    async execute() {
        this.excludeAllStudents.deleteAll();
    }
}