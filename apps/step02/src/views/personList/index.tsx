import { PersonList } from "../../models/personList";

import * as mobxReact from "mobx-react";

type Props = {
  personList: PersonList;
};

export default mobxReact.observer(({ personList }: Props) => {
  return (
    <>
      <h1>Lista de pessoas</h1>

      {personList.store.map((p, key) => (
        <div key={key}>
          <div>Nome: {p.firstName}</div>
          <div>Sobrenome: {p.lastName}</div>
          <div>Idade: {p.age}</div>
        </div>
      ))}
    </>
  );
});
