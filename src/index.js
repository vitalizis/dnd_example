import React from "react";
import { render } from "react-dom";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

import Content from "./Content";

@DragDropContext(HTML5Backend)
class App extends React.Component {
  render() {
    return <Content />;
  }
}

render(<App />, document.getElementById("root"));
