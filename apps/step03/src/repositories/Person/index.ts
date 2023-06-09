import { gql } from "graphql-request";
import { httpClient } from "src/graphql/httpClient";
import {
  ClientError,
  getWsClient,
  WebSocketClient,
} from "src/graphql/wsClient";
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

const Subscribe = gql`
  subscription Subscribe {
    data: person(limit: 1, order_by: { id: desc }) {
      firstName
      lastName
      age
      id
    }
  }
`;

export class PersonRepository {
  static wsClient: WebSocketClient;

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

  static async subscribe(
    next: (data: GraphqlQuery<IPersonDTO>) => void,
    error: (error: ClientError) => void,
    complete?: () => void
  ) {
    this.wsClient = await getWsClient();

    this.wsClient.subscribe<GraphqlQuery<IPersonDTO>>(Subscribe, {
      next,
      error,
      complete,
    });
  }

  static unSubscribe() {
    this.wsClient.close();
  }
}
