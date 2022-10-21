import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';

const App = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch(`https://api.thecatapi.com/v1/images/search`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
        return;
      });
  }, []);

  console.log(data);

  return (
    <div className='app-wrapper'>
      <div className='app-header'>
        <Card data={data}/>
      </div>
    </div>
  );
};

export default App;
