import { IPersonDTO } from "src/models/Person";

export class PersonRepository {
  static async query(): Promise<IPersonDTO[]> {
    console.log("Exec query");

    return [];
  }

  static async mutate(person: IPersonDTO) {
    console.log("Exec mutation: ", person);
  }

  static subscribe() {
    console.log("Exec subscription");
  }
}
