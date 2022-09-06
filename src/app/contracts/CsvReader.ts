export interface CsvReader {
  readFromBuffer: (buffer: Buffer) => Promise<any>
}