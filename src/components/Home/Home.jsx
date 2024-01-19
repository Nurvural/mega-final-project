import React, { useState, useEffect } from "react";
import "./Home.css";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/src/data/images.json")
      .then((res) => res.json())
      .then((res) => setData(res.home));
  }, []);
  return (
    <>
      <h1>Gerçekleştirdiğimiz Projeler</h1>
      <div className="home-containerr">
        {data.map((item) => (
          <div className="responsive">
            <div key={item.id} className="gallery">
              <img src={item.img} alt={`Image ${item.id}`} />

              <div className="desc" src={item.id}>
                {item.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
