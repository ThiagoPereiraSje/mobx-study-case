import person from "../src/models/person";
import PersonView from "../src/views/person";

export default function Index() {
  return (
    <>
      <h1>Cadastro</h1>
      <p>
        <PersonView person={person} />
      </p>

      <button>Adicionar</button>
    </>
  );
}
