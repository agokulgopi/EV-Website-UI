import React, { useEffect, useState } from 'react';
import Background from "./Components/BackGround/Background";
import Navbar from "./Components/NavBar/Navbar";
import Super from "./Components/Super/Super";

const App = () => {
  const Data = [
    { text1: "Dive into", text2: "what you love" },
    { text1: "Indulge", text2: "your passion" },
    { text1: "Give in to", text2: "your passions" },
  ];
  
  const [count, setCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => (count === 2 ? 0 : count + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Background playStatus={playStatus} count={count} />
      <Navbar />
      <Super 
        Data={Data[count]} 
        setPlayStatus={setPlayStatus} 
        playStatus={playStatus} 
        count={count} 
        setCount={setCount} 
      />
    </div>
  );
};

export default App;
