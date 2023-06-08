import { IPersonDTO } from "src/models/Person";

export class PersonRepository {
  static async query(): Promise<IPersonDTO[]> {
    // Executar a query

    return [];
  }

  static async mutate(person: IPersonDTO) {
    // Executar a mutation;
  }

  static subscribe() {
    // Executar a subscription
  }
}
