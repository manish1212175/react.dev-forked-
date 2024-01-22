function MyButton() {
  return <button>I'm a new button</button>;
}

export default function MyNewApp() {
  return (
    <div>
      <h1>Welcome to my new app</h1>
      <MyButton />
    </div>
  );
}
