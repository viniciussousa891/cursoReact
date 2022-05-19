import './App.css';
import { Component } from "react";
import { PostCard } from './components/PostCard';
import { loadPosts } from './components/utils/load-posts'
import { Posts } from "./components/Posts/index";
class App extends Component{  
  // class fields
  state = {
    posts: []
  };

  // Esse metodo executa uma acao sempre que o component for montado na tela
  async componentDidMount() {
    await this.loadPost();
  }
  
  loadPost = async () => {
    const postsAndPhotos = await loadPosts();
    this.setState({ posts: postsAndPhotos});
  }

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

      <section className='container'>
        <Posts posts={posts}/>
      </section>

    )
  }
}

export default App;
