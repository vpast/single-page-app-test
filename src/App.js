import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import CardList from './components/CardList';
import CardFilter from './components/CardsFilter';
import { getDataActions } from './store';

const App = () => {
  const dispatch = useDispatch();
  const picData = useSelector((state) => state.data.data);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `https://api.thecatapi.com/v1/images/search?limit=9`
      );
      const jsonData = await response.json();
      return jsonData;
    };

    getData().then((jsonData) => {
      dispatch(getDataActions.get(jsonData));
    });

  }, [dispatch]);

  return (
    <div className='app-wrapper'>
      <CardFilter />
      <div className='app-header'>
        {!picData ? <></> : <CardList />}
      </div>
    </div>
  );
};

export default App;
