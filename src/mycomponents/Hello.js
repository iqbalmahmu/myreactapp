// import React from "react";

function Hello(props) {
  function btnC() {
    alert("click me");
  }
  return (
    <>
      <h1>
        My name is {props.myName} and my age is {props.myAge} years old.
      </h1>
      <button onClick={btnC}>click me</button>
    </>
  );
}

export default Hello;

// function Hello(props) {
//   return (
//     <>
//       <h1>
//         Hello, my name is {props.myName} and i am {props.myAge} years old.
//       </h1>
//     </>
//   );
// }

// export default Hello;
