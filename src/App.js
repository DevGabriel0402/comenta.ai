import React from "react";
import Image from "./assets/people.svg";

import {
  Button,
  Container,
  TextArea,
  List,
} from "./Styles";

function App() {
  const [comentario, setComentario] =
    React.useState("");

  const [
    todosOsComentario,
    setTodosOsComentarios,
  ] = React.useState([]);

  // Efeito para salvar no localStorage sempre que o array de comentários for atualizado
  React.useEffect(() => {
    localStorage.setItem(
      "comentarios",
      JSON.stringify(todosOsComentario)
    );
  }, [todosOsComentario]);

  // Efeito para carregar do localStorage ao montar o componente
  React.useEffect(() => {
    const comentariosSalvos =
      JSON.parse(
        localStorage.getItem("comentarios")
      ) || [];
    setTodosOsComentarios(comentariosSalvos);
  }, []);

  const cliqueiNoBotao = () => {
    const todosOsComentarioAnteriores = [
      ...todosOsComentario,
      comentario,
    ];
    setTodosOsComentarios(
      todosOsComentarioAnteriores
    );
    setComentario(""); // Limpar o textarea após o clique no botão
  };

  const digiteiNoTextArea = (
    eventoDoTextArea
  ) => {
    setComentario(eventoDoTextArea.target.value);
  };

  return (
    <Container>
      <img src={Image} alt="imagem-de-pessoas" />
      <TextArea
        onChange={digiteiNoTextArea}
        value={comentario}
        placeholder="Seu comentario aqui"
      ></TextArea>
      <Button
        isOn={comentario}
        onClick={cliqueiNoBotao}
      >
        Comentar
      </Button>

      <ul>
        {todosOsComentario.map(
          (coment, index) => (
            <List key={index}>{coment}</List>
          )
        )}
      </ul>
    </Container>
  );
}

export default App;
