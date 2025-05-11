import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import "./App.css";

function App() {
  const items = ["New York", "Austin", "Tokyo", "London"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <>
      <div className='h-screen w-lvw bg-gray-300'>
        <div className='container mx-auto bg-red-300 p-4'>
          <ListGroup
            items={items}
            heading='Cities'
            onSelectItem={handleSelectItem}
          />
        </div>
        <Button
          children={"hello"}
          color={"purple-200"}
          onClick={() => console.log("Clicked")}
        ></Button>
        {/* <div className='bg-white p-4'></div> */}
        {/* <div className='bg-purple-200 p-4'></div> */}
      </div>
    </>
  );
}

export default App;
