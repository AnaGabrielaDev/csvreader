import { AddResultToStudentService } from '../../../src/app/services/AddResultToStudentService'
import { mock, MockProxy } from 'jest-mock-extended'
import { GetStudentByIdRepository } from '../contracts/GetStudentByIdRepository'
import { AddResultToStudentParams } from '../../domain/features/AddResultToStudent'
import { AddRateToStudentRepository } from '../contracts/AddRateToStudentRepository'

describe('AddResultToStudentService', () => {
  let getStudentByIdRepository: MockProxy<GetStudentByIdRepository>
  let addRateToStudentRepository: MockProxy<AddRateToStudentRepository>
  let sut: AddResultToStudentService

  beforeEach(() => {
    getStudentByIdRepository = mock()
    getStudentByIdRepository.getById.mockResolvedValue({
      id: 'anyId',
      name: 'anyName',
      schoolName: 'anySchool',
      className: 'anyClass',
      grade: 'anyGrade',
      cityName: 'anyCity'
    })

    addRateToStudentRepository = mock()

    sut = new AddResultToStudentService(getStudentByIdRepository, addRateToStudentRepository)
  })

  it('should call GetStudentByIdRepository with correct params', async () => {
    const data: AddResultToStudentParams = {
      studentId: 'anyId',
      rate: 5
    }

    await sut.execute(data)

    expect(getStudentByIdRepository.getById).toHaveBeenCalledWith('anyId')
  })

  it('should throw if studentId provided is invalid', async () => {
    getStudentByIdRepository.getById.mockResolvedValueOnce(null)
    const data: AddResultToStudentParams = {
      studentId: 'wrongId',
      rate: 5
    }

    const promise = sut.execute(data)

    await expect(promise).rejects.toThrow("Student provided don't exists")
  })

  it('should call AddRateToStudentRepository with correct params', async () => {
    const data: AddResultToStudentParams = {
      studentId: 'anyId',
      rate: 5
    }

    await sut.execute(data)

    expect(addRateToStudentRepository.addRate).toHaveBeenCalledTimes(1)
    expect(addRateToStudentRepository.addRate).toHaveBeenCalledWith({
      studentId: 'anyId',
      rate: 5
    })
  })

  it('should throw if addRateToStudentRepository throws', async () => {
    addRateToStudentRepository.addRate.mockImplementationOnce(() => {
      throw new Error('')
    })

    const data: AddResultToStudentParams = {
      studentId: 'anyId',
      rate: 5
    }

    const promise = sut.execute(data)

    await expect(promise).rejects.toThrow()
  })
})
