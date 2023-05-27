import person from "../src/models/person";
import personList from "../src/models/personList";
import PersonView from "../src/views/person";
import PersonListView from "../src/views/personList";

export default function Index() {
  return (
    <>
      <h1>Cadastro</h1>
      <div>
        <PersonView person={person} />
      </div>

      <button onClick={() => personList.store.push({ ...person })}>
        Adicionar
      </button>

      <div>
        <PersonListView personList={personList} />
      </div>
    </>
  );
}
