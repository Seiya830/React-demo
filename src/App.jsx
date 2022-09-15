import ReactDom from "react-dom";

const App = () => {
    const onClickButton = () => alert();
    const contentStyle = {
        color: 'blue',
        fontSize: '18px'
    };
    return (
      <>
        <h1 style={{ color: 'red' }}>こんにちは！</h1>
        <p style={contentStyle}>こんばんは</p>
        <button onClick={onClickButton}>ボタン</button>
       </>  
    );
};

export default App;