import { IPerson, Person } from ".";

describe("Person Model", () => {
  test("Set data", () => {
    const person: IPerson = Person.create();

    expect(person.firstName).toBe("");
    expect(person.lastName).toBe("");
    expect(person.age).toBe(0);

    person.setFirstName("Thiago");
    person.setLastName("Pereira");
    person.setAge(30);

    expect(person.firstName).toBe("Thiago");
    expect(person.lastName).toBe("Pereira");
    expect(person.age).toBe(30);
  });
});
