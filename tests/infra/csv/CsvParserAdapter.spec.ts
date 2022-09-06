import { readFileSync } from "fs";
import { resolve } from "path";
import { CsvParserAdapter } from "../../../src/infra/csv/CsvParserAdapter";

describe("csv-parserAdapter", () => {
  let sut: CsvParserAdapter;
  
  beforeEach(() => {
    sut = new CsvParserAdapter();
  });

  it("should read csv file from buffer", async () => {
    const buffer = readFileSync(resolve(__dirname, '..', '..', 'assets', 'students.csv'))
  
    const data = await sut.readFromBuffer(buffer);

    expect(data).toEqual([
      {name: "vinicius", "birth date": "26/09/2000"},
      {name: "ana", "birth date": "24/11/2003"}
    ])
  })
})