import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api.thecatapi.com/v1/images/search?limit=8`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);

  console.log(data);

  return (
    <div className='app-wrapper'>
      <div className='app-header'>
        {data.map((data) => {
          return <Card data={data} key={data.id} />;
        })}
      </div>
    </div>
  );
};

export default App;
