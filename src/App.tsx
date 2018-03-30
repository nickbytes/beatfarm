import * as React from "react";
import styled from "styled-components";
import Row from "./components/Row";

const AppContainer = styled.div`
  margin: 0;
  padding: 50px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

// You're all probably wondering why I don't order my css...
// That's a good question.
const Title = styled.h1`
  position: absolute;
  top: 20px;
  left: 20px;
  font-weight: normal;
  margin: 0;
  font-size: 17px;
  line-height: 22px;
`;

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
      <AppContainer>
        <Title>beatfarm</Title>
        {this.state.rows.map(rowItem => <Row key={rowItem.id} />)}
      </AppContainer>
    );
  }
}

export default App;
