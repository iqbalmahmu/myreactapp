// import { render } from '@testing-library/react';

import React, { Component } from "react";

class Para extends Component {
  btn() {
    alert("click me hokkjjkk");
  }
  render() {
    return (
      <>
        <p>This is paragraph.</p>
        <button onClick={this.btn}>click me</button>
      </>
    );
  }
}

export default Para;
// import React, { Component } from "react";

// class Para extends Component {
//   render() {
//     return (
//       <>
//         <h2>This is heading two</h2>
//         <p>This is paragraph heading</p>
//       </>
//     );
//   }
// }

// export default Para;
