import { Person } from "./person";

import * as mobx from "mobx";

export type PersonList = {
  store: Person[];
};

const personList = mobx.observable<PersonList>({
  store: [],
});

export default personList;
