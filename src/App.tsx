import reactLogo from "./assets/react.svg";
import "./App.css";

import Message from "./Message";

function App() {
  return (
    <>
      <div>
        <a href='https://gamelib.pages.dev' rel='noopener' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>gamelib</h1>
      <Message />
    </>
  );
}

export default App;
