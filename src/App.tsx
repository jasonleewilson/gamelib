// import ListGroup from "./components/ListGroup";
import "./App.css";

function App() {
  // let items = ["New York", "Austin", "Tokyo", "London"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  return (
    <>
      <div className='h-screen w-lvw bg-gray-300'>
        <div className='container mx-auto bg-red-500 p-4 text-white'>
          <h1>GameLib</h1>
        </div>
        <div className='container mx-auto p-4'>
          <h2>work in progress...</h2>
          <a href='https://gamelib-d40.pages.dev'>
            Take a peek at my main branch
          </a>
          <br />
          <a href='https://dev.gamelib-d40.pages.dev'>
            Take a peek at my staging branch
          </a>
          <br />
          <a href='https://staging.gamelib-d40.pages.dev'>
            Take a peek at my dev branch
          </a>
        </div>

        <div className='container mx-auto bg-red-500 p-4 text-white'>
          <h3>
            Github GameLib{" "}
            <a href='https://github.com/jasonleewilson/gamelib' target='_blank'>
              Code
            </a>
          </h3>
        </div>
      </div>
    </>
  );
}

export default App;
