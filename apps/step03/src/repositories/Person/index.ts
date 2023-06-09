import { gql } from "graphql-request";
import { httpClient } from "src/graphql/httpClient";
import { IPersonDTO } from "src/models/Person";

const Insert = gql`
  mutation Insert($firstName: String, $lastName: String, $age: Int) {
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

const GeAll = gql`
  query GetAll {
    data: person {
      firstName
      lastName
      age
      id
    }
  }
`;

export class PersonRepository {
  static async getAll() {
    const result = await httpClient.request<GraphqlQuery<IPersonDTO>>(GeAll);

    return result;
  }

  static async insert(person: IPersonDTO) {
    const result = await httpClient.request<
      GrahpqlMutation<IPersonDTO>,
      IPersonDTO
    >(Insert, person);

    return result;
  }

  static subscribe() {
    // Executar a subscription
  }
}
