import { useDispatch } from "react-redux";
import { getDataActions } from '../store';
import '../App.css'

const CardFilter = () => {
  const dispatch = useDispatch()
  const onChangeHandler = () => {
    dispatch(getDataActions.checked())
  }

  return (
    <div className="checkBox" onChange={onChangeHandler}>
      <input type='checkbox'></input>
      <span>Liked</span>
    </div>
  );
};

export default CardFilter;
