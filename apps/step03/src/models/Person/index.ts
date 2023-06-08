import { Instance, SnapshotOut, types } from "mobx-state-tree";

export const Person = types
  .model("Person", {
    id: types.optional(types.union(types.number, types.undefined), undefined),
    firstName: types.optional(types.string, ""),
    lastName: types.optional(types.string, ""),
    age: types.optional(types.number, 0),
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
export type IPersonDTO = SnapshotOut<typeof Person>;
