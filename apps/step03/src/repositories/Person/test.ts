import { IPerson, Person } from "../../models/Person";

import { PersonRepository } from ".";

describe("Person Repository", () => {
  test("Mutate person", async () => {
    const person: IPerson = Person.create();

    await PersonRepository.mutate(person);

    const result = await PersonRepository.query();

    expect(result.length).toBe(1);
  });
});
