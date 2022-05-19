import { PostCard } from '../PostCard/index';
import './styles.css'

export const Posts = (props) => {
  const posts = props.posts;
  
  return (
    <div className="posts">
    {posts.map(post => 
      <PostCard 
      key={post.id}
      title={post.title}
      body={post.body}
      cover={post.cover}
      id={post.id} />
    )}
  </div>
)
}