import React from "react";
import { useEffect, useState } from "react";
import "./Footer.scss";
// import axios from "axios";

const Footer = () => {
  const [counter, setCounter] = useState('');

  async function increaseVisbilityCounter() {
    const response = await fetch('https://portfolio-counter.vercel.app/api/counter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({})
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    setCounter(data.count);
}

useEffect(() => {
  increaseVisbilityCounter();
}, [])


return (
  <div className="footer text-center">
    <p>
      &#x3c;&#47;&#x3e; with ❤️ by
      <a href="https://github.com/haiderbukhari" target="_blank">
        {" "}
        Haider Bukhari
      </a>
      😎
    </p>
    <p className="pink-text-gradient">No. of Visitors | {counter}</p>

  </div>
);
  };

export default Footer;