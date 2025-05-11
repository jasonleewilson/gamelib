import ListGroup from "./components/ListGroup";
import "./App.css";

function App() {
  let items = ["New York", "Austin", "Tokyo", "London"];
  return (
    <>
      <div className='h-screen w-lvw bg-gray-300'>
        <div className='container mx-auto bg-red-300 p-4'>
          <ListGroup items={items} heading='Cities' />
        </div>
      </div>
    </>
  );
}

export default App;
