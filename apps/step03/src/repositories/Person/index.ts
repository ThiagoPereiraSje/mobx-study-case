import { gql } from "graphql-request";
import { httpClient } from "src/graphql/httpClient";
import { IPersonDTO } from "src/models/Person";

const InsertPerson = gql`
  mutation InsertPerson($firstName: String, $lastName: String, $age: Int) {
    data: insert_person(
      objects: { firstName: $firstName, lastName: $lastName, age: $age }
    ) {
      affected_rows
      returning {
        firstName
        lastName
        age
        id
      }
    }
  }
`;

export class PersonRepository {
  static async query(): Promise<IPersonDTO[]> {
    // Executar a query

    return [];
  }

  static async insert(person: IPersonDTO) {
    const result = await httpClient.request<
      GrahpqlMutation<IPersonDTO>,
      IPersonDTO
    >(InsertPerson, person);

    return result;
  }

  static subscribe() {
    // Executar a subscription
  }
}
