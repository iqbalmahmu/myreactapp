// import Hello from "./mycomponents/Hello";

// import Para from "./mycomponents/Para";

// function App() {
//   return (
//     <>
//       <Hello myAge="25" myName="Foysal"></Hello>
//       <Hello myAge="26" myName="Rad"></Hello>
//       <Hello myAge="27" myName="Iqbal"></Hello>
//       <Hello myAge="29" myName="Iqbalmahmud"></Hello>
//       <Para></Para>
//     </>
//   );
// }
// export default App;

// const element = setInterval(() => {
//   <h1>hello world {new Date().toLocaleTimeString()} </h1>;
// }, 1000);

function App() {
  return (
    <>
      <h1 className="title">
        <span>hello world {new Date().toLocaleTimeString()} </span>
      </h1>
    </>
  );
}

// function App() {
//   return <>{element}</>;
// }

export default App;
