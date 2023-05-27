import * as mobx from "mobx";

const person = mobx.observable({
  firstName: "",
  lastName: "",
  age: 0,
});

export default person;
