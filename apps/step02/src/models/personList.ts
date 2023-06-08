import { Person } from "./person";

import { observable } from "mobx";

export type PersonList = {
  store: Person[];
};

const personList = observable<PersonList>({
  store: [],
});

export default personList;
