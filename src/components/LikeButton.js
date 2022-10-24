import './LikeButton.css';

const LikeButton = (props) => {
  const likeClickHandler = (event) => {
    if (event.target.classList.contains('active')) {
      event.target.classList.remove('active');
      props.onNotLike();
    } else {
      event.target.classList.add('active');
      props.onLike();
    }
  };

  return (
    <div className='large-font text-center like'>
      <ion-icon onClick={likeClickHandler} name='heart'>
        <div className='red-bg'></div>
      </ion-icon>
    </div>
  );
};

export default LikeButton;
