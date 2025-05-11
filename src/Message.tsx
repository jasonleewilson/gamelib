function Message() {
  const name = "Wilson";
  if (name) return <h1 className='text-6xl'>Hello {name}</h1>;
  return <h1 className='text-6xl'>Hello World</h1>;
}

export default Message;
