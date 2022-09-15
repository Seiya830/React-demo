import ColorfulMessage from './components/ColorfulMessage';

const App = () => {
    const onClickButton = () => alert();
    
    return (
      <>
        <h1 style={{ color: 'red' }}>こんにちは！</h1>
        <ColorfulMessage color="blue">こんばんは</ColorfulMessage>
        <ColorfulMessage color="pink">おやすみ</ColorfulMessage>
        <button onClick={onClickButton}>ボタン</button>
       </>  
    );
};

export default App;