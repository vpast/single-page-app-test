import './Card.css';
import DeleteButton from './DeleteButton';
import LikeButton from './LikeButton';
import { useDispatch } from 'react-redux';
import { likedActions } from '../store';
const Card = (props) => {
  const dispatch = useDispatch();

  const likeHandler = () => {
    dispatch(likedActions.like(props.data.id));
  };

  const notLikeHandler = () => {
    dispatch(likedActions.notLike(props.data.id));
  };

  const deleteHandler = () => {
    document.getElementById(props.data.id).remove();
  };

  return (
    <div className='card-wrapper' id={props.data.id}>
      <div className='card-img'>
        <img src={props.data.url} alt='Kitty' />
      </div>
      <div className='card-info'>
        <p>Some cat!</p>
        <div className='card-button-wrapper'>
          <LikeButton onLike={likeHandler} onNotLike={notLikeHandler} />
          <DeleteButton onDelete={deleteHandler} />
        </div>
      </div>
    </div>
  );
};

export default Card;
