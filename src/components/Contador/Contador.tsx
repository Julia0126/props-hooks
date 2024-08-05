import { useState } from 'react';
import './Contador.css'

/*  Hooks são funcionais especiais que o React disponibiliza para nós 
    termos melhor controle de algumas ações que ocorrem em nosso projeto.

    useState: cria uma variavel de Estado, conectada ao Componente, sempre 
    que ela mudar o seu valor, o Componente renderiza novamente mostrando
    aquele novo valor.
*/

function Contador() {

  // Variavel
  // let valor: number = 0; = O react n conseguiu atualizar a variavel em tempo real

  //Variavel de Estado
  const [valor, setValor] = useState(0);
  // get / set
  // get = pegava os dados de uma variável
  // set = atualizava os dados de uma variável

  // Função
  function somarMaisUm() {
    setValor(valor + 1);
  }

  console.log(valor);

  return (
    <div className="container">
        <p>O valor é: { valor }</p>
        <button onClick={somarMaisUm}>Adicionar +1</button>
    </div>
  )
}

export default Contador