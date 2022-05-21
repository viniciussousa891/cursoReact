import { Component } from "react";
import { loadPosts } from '../../components/utils/load-posts'
import { Posts } from "../../components/Posts/index";
import './styles.css';
import { Button } from '../../components/Button';
import Input from "../../components/input";

export class Home extends Component{  
  // class fields
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postPerPage: 3,
    searchValue: '',
  };

  // Esse metodo executa uma acao sempre que o component for montado na tela
  async componentDidMount() {
    await this.loadPost();
  }
  
  loadPost = async () => {
    const { page,  postPerPage} = this.state;
    const postsAndPhotos = await loadPosts();

    this.setState({ 
      posts: postsAndPhotos.slice(page, postPerPage),
      allPosts: postsAndPhotos,
    });
  }

  loadMorePost = () => {

    console.log('Carregar posts');
    const {
      page,
      postPerPage,
      allPosts,
      posts,
    } = this.state
    
    const nextPage = page + postPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postPerPage)

    posts.push(...nextPosts);

    this.setState({posts, page: nextPage});
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({searchValue: value})
    
  }

  render(){

    // pegar a variavel nome de dentro do state
    const { posts, page, postPerPage, allPosts, searchValue }= this.state;
    const noMorePosts = page + postPerPage >= allPosts.length;

    // verifica se searchValue possui algum valor
    // caso tenha, filtra os post que possuem o titulo o valor de searchValue
    const filteredPosts = !!searchValue ? 
    allPosts.filter(post => {
      return post.title.toLowerCase().includes(searchValue.toLowerCase());
    }) : posts;

    /* 
    Toda vez que eu for itera por um array e for imprimir na tela,
    o react exige que eu identifique de forma unica cada item que será 
    gerado (para futuras renderizacoes especificas do react). Uma forma
    eh atribuir para a tag criar uma key com uma informacao unica dela
    (por exemplo, o id)
    */
    return (
      <section className='container'>
      <div className="search-container">
        {!!searchValue && ( // Avaliacao por curto-circuito
            <h1>Search value: {searchValue}</h1>
          )
        }
        <Input searchValue={searchValue} handleChange={this.handleChange}/>
      </div>
      

        {filteredPosts.length > 0 && (
          <Posts posts={filteredPosts}/>
        )}

        {filteredPosts.length === 0 && (
          <p>Não existem posts :(</p>
        )}

        {!searchValue && ( /* Fazer o botão sumir sempre que uma busca for iniciada */
          <Button
          disabled={noMorePosts}
          text='Load more posts' 
          onClick={this.loadMorePost}/>
        )}
        
      </section>

    )
  }
}
