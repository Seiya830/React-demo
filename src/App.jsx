import ReactDom from "react-dom";

const App = () => {
    const onClickButton = () => alert();
    return (
      <>
        <h1>こんにちは！</h1>
        <p>こんばんは</p>
        <button onClick={onClickButton}>ボタン</button>
       </>  
    );
};

export default App;