import { useSelector } from 'react-redux';
import Card from './Card';

const CardList = () => {
  const likedCards = useSelector((state) => state.liked)
  const showChecked = useSelector((state) => state.data.checked)
  let picData = useSelector((state) => state.data.data)
  
  if (showChecked === true) {
    picData = picData.filter((element) => likedCards.includes(element.id))
  }

  return (
    <>
      {picData.map((data) => {
        return <Card data={data} key={data.id} />;
      })}
    </>
  );
};

export default CardList;
