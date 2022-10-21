import './Card.css';
import LikeButton from './LikeButton';

const Card = (props) => {
  return (
    <div className='card-wrapper'>
      <div className='card-img'>
        <img src={props.data.url} alt='Kitty' />
      </div>
      <div className='card-info'>
        <p>Some kitty!</p>
        <LikeButton />
      </div>
    </div>
  );
};

export default Card;
