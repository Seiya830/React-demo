import { useState } from 'react';
import ColorfulMessage from './components/ColorfulMessage';

const App = () => {
    const onClickCountUp = () => {
      setNum(num + 1);
    };
    const [num, setNum] = useState(0);
    
    return (
      <>
        <h1 style={{ color: 'red' }}>こんにちは！</h1>
        <ColorfulMessage color="blue">こんばんは</ColorfulMessage>
        <ColorfulMessage color="pink">おやすみ</ColorfulMessage>
        <button onClick={onClickCountUp}>カウントアップ</button>
        <p>{num}</p>
       </>  
    );
};

export default App;