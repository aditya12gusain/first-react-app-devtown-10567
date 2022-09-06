import React from "react";
import BaseHoc from "../hoc/BaseHoc";

class ClassComponent extends React.Component {
  render() {
    return (
      <div>
        <p>This is Class Component</p>
      </div>
    );
  }
}

export default BaseHoc(ClassComponent);
