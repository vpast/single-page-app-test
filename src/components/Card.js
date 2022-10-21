import './Card.css';

const Card = () => {
  return (
    <div className='card-wrapper'>
      <img src='http://placekitten.com/300/400' alt='Kitty' />
      <p>Some kitty!</p>
      <button>Like</button>
    </div>
  );
};

export default Card;
