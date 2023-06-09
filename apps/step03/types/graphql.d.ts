type GrahpqlMutation<T> = {
  data: { affected_rows: number; returning: T[] } | undefined;
};

type GraphqlQuery<T> = {
  data: T[] | undefined;
};
