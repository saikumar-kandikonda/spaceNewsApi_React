import React from 'react';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [newsList, setNewsList] = useState([]);
  useEffect(() => {
    fetch("https://api.spaceflightnewsapi.net/v3/articles")
      .then((res) => res.json())
      .then((data) => { console.log(data); setNewsList(data); })
      .catch(err => console.log(err))
  }, []);
  return <div className="App">
    <h1>Space News API</h1>
    <div className="newsContainer">
      {
        newsList.map((item, key) => {
          return <div key={key} className="article" onClick={()=>{window.location.href=item.url}}>
            <h2 key={key}>{item.title}</h2>
            <img src={item.imageUrl} />
            <p>{item.summary}</p>
            <h5>{item.publishedAt}</h5>

          </div>

        })
      }
    </div>
  </div>

}

export default App;
