import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree";

export const Person = types
  .model("Person", {
    id: types.number,
    firstName: types.string,
    lastName: types.string,
    age: types.number,
  })
  .actions((self) => ({
    setFirstName(value: string) {
      self.firstName = value;
    },
    setLastName(value: string) {
      self.lastName = value;
    },
    setAge(value: number) {
      self.age = value;
    },
  }));

export type IPerson = Instance<typeof Person>;
export type IPersonIn = SnapshotIn<typeof Person>;
export type IPersonDTO = SnapshotOut<typeof Person>;
