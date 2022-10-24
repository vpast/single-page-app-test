const DeleteButton = (props) => {
  const deleteHandler = () => {
    props.onDelete();
  };

  return (
    <div className='large-font'>
      <ion-icon onClick={deleteHandler} name='close-outline'></ion-icon>
    </div>
  );
};

export default DeleteButton;
