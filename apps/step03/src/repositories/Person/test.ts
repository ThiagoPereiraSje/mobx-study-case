import { PersonRepository } from ".";

import { IPerson, Person } from "src/models/Person";

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
});
