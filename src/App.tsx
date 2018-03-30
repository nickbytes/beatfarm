import * as React from "react";
import Row from "./components/Row";

class App extends React.Component {
  state = {
    rows: [
      {
        id: 1,
        sound: "kick"
      },
      {
        id: 2,
        sound: "snare"
      }
    ]
  };
  render() {
    return (
      <div>
        <h1>beatfarm</h1>
        {this.state.rows.map(rowItem => <Row key={rowItem.id} />)}
      </div>
    );
  }
}

export default App;
