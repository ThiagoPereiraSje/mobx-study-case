import * as mobx from "mobx";

export type Person = {
  firstName: string;
  lastName: string;
  age: number;
};

const person = mobx.observable<Person>({
  firstName: "",
  lastName: "",
  age: 0,
});

export default person;
