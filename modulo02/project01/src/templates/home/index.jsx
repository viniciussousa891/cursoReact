import { useEffect, useState, useCallback } from "react";
import { loadPosts } from '../../components/utils/load-posts'
import { Posts } from "../../components/Posts/index";
import './styles.css';
import { Button } from '../../components/Button';
import { Input } from "../../components/input";

export const Home = () => {


/*   state = {
    posts: [],
    allPosts: [],
    page: 0,
    postPerPage: 3,
    searchValue: '',
  }; */

  /* 
  
  estrutura do useState()
  const [ **componente, **funcao que altera o estado do componente ] = useState(**estado inicial do componente);
  
  ex:
  const [ posts, setPosts ] = useState([]);
  # posts é o meu componente
  # setPosts é a funcao que vai alterar o estado do meu componente
  # [] dentro do useState é o estado inicial do meu componente

  */

  const [ posts, setPosts ] = useState([]);
  const [ allPosts, setAllPosts ] = useState([]);
  const [ page, setPage ] = useState(0);
  const [ postPerPage ] = useState(3);
  const [ searchValue, setSearchValue ] = useState('');

  const noMorePosts = page + postPerPage >= allPosts.length;

  const filteredPosts = !!searchValue ? 
  allPosts.filter(post => {
    return post.title.toLowerCase().includes(searchValue.toLowerCase());
  }) : posts;


  // loadPost antigo
  const handleLoadPost = useCallback(async (page, postPerPage) => {
    const postsAndPhotos = await loadPosts();

    setPosts(postsAndPhotos.slice(page, postPerPage));
    setAllPosts(postsAndPhotos);
  }, []);

  useEffect(() => {
    handleLoadPost(0, postPerPage);
  }, [handleLoadPost, postPerPage]);

  const loadMorePost = () => {
    
    const nextPage = page + postPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postPerPage)

    posts.push(...nextPosts);

    setPosts(posts);
    setPage(nextPage);
  }

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  }

  return (
    <section className='container'>
    <div className="search-container">
      {!!searchValue && ( // Avaliacao por curto-circuito
          <h1>Search value: {searchValue}</h1>
        )
      }
      <Input searchValue={searchValue} handleChange={handleChange}/>
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
        onClick={loadMorePost}/>
      )}
      
    </section>

  )
}
