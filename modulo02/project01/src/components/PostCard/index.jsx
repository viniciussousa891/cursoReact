import './styles.css';

export const PostCard = (props) => (
  <div className='post'>
    <img src={props.cover} alt={props.title}/>
    <div className="post-content">
    <h2 >{props.title}</h2>
    <p>{props.body}</p>
    </div>
  </div>
);
