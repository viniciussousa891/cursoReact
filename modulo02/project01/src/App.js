import './App.css';
import { Component } from "react";

class App extends Component{  
  // class fields
  state = {
    posts: [
      {
        id: 1,
        title: 'O titulo 1',
        body: 'O corpo 1'
      },
      {
        id: 2,
        title: 'O titulo 2',
        body: 'O corpo 2'
      },
      {
        id: 3,
        title: 'O titulo 3',
        body: 'O corpo 3'
      }
    ]
  };
  
  render(){

    // pegar a variavel nome de dentro do state
    const { posts }= this.state;

    /* 
    Toda vez que eu for itera por um array e for imprimir na tela,
    o react exige que eu identifique de forma unica cada item que será 
    gerado (para futuras renderizacoes especificas do react). Uma forma
    eh atribuir para a tag criar uma key com uma informacao unica dela
    (por exemplo, o id)
    */

    return (
      <div className="App">
        {posts.map(post => <h1 key={post.id}>{post.title}</h1>)}
      </div>
    )
  }
}

export default App;
