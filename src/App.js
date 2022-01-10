import React, { useEffect, useState } from 'react';
import './App.css';
import { getList, getBillboardInfo } from './Tmdb';
import Row from './Row/Row';
import Header from './Header/Header';
import Billboard from './Billboard/Billboard';

const App = () => {

  const [list, setList] = useState([]);
  const [showHeader, setShowHeader] = useState();
  const [billboard, setBillboard] = useState();

  useEffect(() => {
    const loadList = async () => {

      // load listof movies/series
      let list = await getList();
      setList(list);

      // random pick a billboard
      let randomNumber = Math.floor(Math.random() * (list[0].items.results.length -1))
      let randomPick = list[0].items.results[randomNumber]
      let billboardInfo = await getBillboardInfo(randomPick.id)
      setBillboard(billboardInfo);
    }

    loadList();

  }, []);

  useEffect(() => {
    
    const scrollListener = () => {
      if(window.scrollY > 10) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])

  if(billboard) {
    return (
      <div className="App">
        <Header showHeader={showHeader}/>
        <Billboard billboard={billboard}/>
        <section className='mainRows'>
          {list.map((item, key) => (
            <Row key={key} title={item.title} items={item.items} />
          ))}
        </section>
        
      </div>
    );
  } else {
    return (
      <div className="App">
        <div className='loading'>
          <img src="https://pa1.narvii.com/7724/02d6be6c9b9ca850006adc3fa77d9e4088c9c959r1-2000-1000_hq.gif" alt="Cargando..." />
        </div>
      </div>
    );
  } 
}

export default App;
