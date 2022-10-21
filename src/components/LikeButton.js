import './LikeButton.css'

const LikeButton = () => {

  const likeClickHandler = (event) => {
    event.target.classList.toggle('active');
  }

  return (
    <div className='large-font text-center top-20'>
      <ion-icon onClick={likeClickHandler} name='heart'>
        <div className='red-bg'></div>
      </ion-icon>
    </div>
  );
};

export default LikeButton;
