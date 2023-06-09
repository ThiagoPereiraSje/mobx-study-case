/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ClientError as ClientErrorBase,
  GraphQLWebSocketClient,
} from "graphql-request";
import WebSocketImpl from "ws";

export type ClientError = ClientErrorBase;
export type WebSocketClient = GraphQLWebSocketClient;

const GRAPHQL_TRANSPORT_WS_PROTOCOL = "graphql-transport-ws";
const endpoint = "ws://localhost:8080/v1/graphql";

const socket = new WebSocketImpl(endpoint, GRAPHQL_TRANSPORT_WS_PROTOCOL);
let wsClient: GraphQLWebSocketClient;

export function getWsClient() {
  return new Promise<GraphQLWebSocketClient>((resolve) => {
    if (wsClient) {
      resolve(wsClient);
    } else {
      wsClient = new GraphQLWebSocketClient(socket as any, {
        onAcknowledged: () => Promise.resolve(resolve(wsClient)),
      });
    }
  });
}
