import { PersonRepository } from ".";

import { IPerson, Person } from "src/models/Person";

beforeAll(() => {
  PersonRepository.subscribe(
    (data) => console.log("data: ", data),
    (error) => console.log("error: ", error),
    () => console.log("complete subscription")
  );
});

afterAll(() => {
  PersonRepository.unSubscribe();
});

describe("Person Repository", () => {
  test("Insert", async () => {
    const person: IPerson = Person.create({
      firstName: "Thiago",
      lastName: "Pereira",
      age: 30,
    });

    const result = await PersonRepository.insert(person);

    expect(result.data?.affected_rows).toBe(1);
  });

  test("GetAll", async () => {
    const result = await PersonRepository.getAll();

    expect(result.data).not.toBe(undefined);
  });
});
