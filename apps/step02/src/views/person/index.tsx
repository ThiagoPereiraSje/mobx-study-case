import { Person } from "../../models/person";

import { observer } from "mobx-react";

type Props = {
  person: Person;
};

export default observer(({ person }: Props) => {
  return (
    <div>
      <div>
        <label htmlFor="firstName">Nome:</label>
        <input
          type="text"
          id="firstName"
          value={person.firstName}
          onChange={(e) => (person.firstName = e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="lastName">Sobrenome:</label>
        <input
          type="text"
          id="lastName"
          value={person.lastName}
          onChange={(e) => (person.lastName = e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="age">Idade:</label>
        <input
          type="text"
          id="age"
          value={person.age}
          onChange={(e) => (person.age = Number(e.target.value))}
        />
      </div>

      {JSON.stringify(person)}
    </div>
  );
});
