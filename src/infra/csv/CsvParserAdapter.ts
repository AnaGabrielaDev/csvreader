import path from "path"
import crypto from "crypto";
import csvParser from "csv-parser";
import { createReadStream, writeFileSync, promises } from "fs"
import { CsvReader } from "../../app/contracts/CsvReader"

export class CsvParserAdapter implements CsvReader {
  async readFromBuffer (buffer: Buffer): Promise<any> {
    return new Promise((resolve) => {
      const file = `${crypto.randomUUID()} - students.csv`;
      const tmpDir = path.resolve(__dirname, '..', 'tmp', file)
  
      const csvData: any = [];
      writeFileSync(tmpDir, buffer, 'utf-8');
      const stream = createReadStream(tmpDir)
      const parseFile = csvParser()
      stream.pipe(parseFile);
  
      parseFile
        .on('data', (row: string[]) => {
          csvData.push(row)
        })
        .on('end', async () => {
          await promises.unlink(tmpDir)
          resolve(csvData)
        });
    })
  }
}