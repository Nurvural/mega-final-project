import React, { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "./Contact.css";

function Contact() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/src/data/images.json")
      .then((res) => res.json())
      .then((res) => setData(res.contact));
  }, []);

  return (
    <div>
      <h1>İletişim</h1>
      <ListGroup className="list">
        {data.map((item) => (
          <ListGroup.Item key={item.id}>
            <p>Adres: {item.address}</p>
            <hr />
            <p>Telefon: {item.phone}</p>
            <hr />
            <p>E-posta: {item.email}</p>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default Contact;
