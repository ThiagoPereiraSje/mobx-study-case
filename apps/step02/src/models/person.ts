import { observable } from "mobx";

export type Person = {
  firstName: string;
  lastName: string;
  age: number;
};

const person = observable<Person>({
  firstName: "",
  lastName: "",
  age: 0,
});

export default person;
