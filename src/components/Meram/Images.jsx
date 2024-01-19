import React, { useState, useEffect } from "react";
import "./Images.css";

function Images() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/src/data/images.json")
      .then((res) => res.json())
      .then((res) => setData(res.meram));
  }, []);
  return (
    <>
      <h1>Fotoğraflarla Meram</h1>
      <div className="grid-container">
        {data.map((item) => (
          <div className="flip-box">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <div key={item.id} className="flip-box-item">
                  <img
                    src={item.img}
                    alt={`Image ${item.id}`}
                    style={{ width: "300px", height: "200px" }}
                  />
                </div>
              </div>
              <div className="flip-box-back">
                <h2
                  className="card_title"
                  src={item.id}
                  style={{ color: "white" }}
                >
                  {item.title}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Images;
