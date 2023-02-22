import React, { useEffect, useState } from "react";

const url =
  "https://newsapi.org/v2/everything?q=bitcoin&apiKey=0a6abb6f3cad4ecca150245c6094e581";

const App = () => {
  const [news, setnews] = useState([]);
  const fatchingData = async () => {
    const responce = await fetch(url);
    const data = await responce.json();

    setnews(data.articles);
  };
  const removenews = (title) => {
    const singlenews = news.filter((elem) => elem.title !== title);
    setnews(singlenews);
  };

  useEffect(() => {
    fatchingData();
  }, []);

  return (
    <>
      <h1 className="header">Today Top news</h1>
      <div className="container">
        {news.map((Element, index) => {
          return (
            <div className="card" key={index}>
              <img src={Element.urlToImage} />
              <h3>{Element.title}</h3>
              <p>{Element.description}</p>
              <h4>Author:{Element.author}</h4>
              <div className="footer">
                <a href={Element.url} className="morebtn">
                  About more
                </a>
                <button
                  className="removebtn"
                  onClick={() => removenews(Element.title)}
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
