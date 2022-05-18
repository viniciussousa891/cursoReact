import './App.css';
import { Component } from "react";

class App extends Component{  
  // class fields
  state = {
    counter: 0,
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

  timeoutUpdate = null;

  // Esse metodo executa uma acao sempre que o component for montado na tela
  componentDidMount() {
    console.log('mount');
    this.handleTimeOut();
  }
  
  // efetua uma acao sempre que estado de um componente for modificado
  componentDidUpdate() {
    console.log('update');
    /* this.handleTimeOut(); */
  }

  // Efetua uma acao logo que o componente for desmontado da pagina
  // muito util para retirar lixo de componentes que não existem mais na pagina
  componentWillUnmount() {
    clearTimeout(this.timeoutUpdate);
  }


  handleTimeOut = () => {
    const { posts, counter }= this.state;
    posts[0].title = 'Novo título';

    this.timeoutUpdate = setTimeout(() => {
      this.setState({posts, counter: counter + 1})
    }, 5000);
  }


  
  render(){

    // pegar a variavel nome de dentro do state
    const { posts, counter }= this.state;

    /* 
    Toda vez que eu for itera por um array e for imprimir na tela,
    o react exige que eu identifique de forma unica cada item que será 
    gerado (para futuras renderizacoes especificas do react). Uma forma
    eh atribuir para a tag criar uma key com uma informacao unica dela
    (por exemplo, o id)
    */

    return (
      <div className="App">
        <h1>Contador: {counter}</h1>
        {posts.map(post => <h1 key={post.id}>{post.title}</h1>)}
      </div>
    )
  }
}

export default App;
