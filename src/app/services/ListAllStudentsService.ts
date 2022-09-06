import { ListStudentsRepository } from "../contracts/ListStudentsRepository";

export class ListAllStudentsService {
  constructor(
    private readonly listStudentsRepository: ListStudentsRepository
  ){}
  execute() {
    return this.listStudentsRepository.list();
  }
} 