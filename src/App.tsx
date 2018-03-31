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
        sound: "kick",
        steps: [
          {
            id: 1,
            active: false,
            hit: false
          },
          {
            id: 2,
            active: false,
            hit: false
          },
          {
            id: 3,
            active: false,
            hit: false
          },
          {
            id: 4,
            active: false,
            hit: false
          },
          {
            id: 5,
            active: false,
            hit: false
          },
          {
            id: 6,
            active: false,
            hit: false
          },
          {
            id: 7,
            active: false,
            hit: false
          },
          {
            id: 8,
            active: false,
            hit: false
          },
          {
            id: 9,
            active: false,
            hit: false
          },
          {
            id: 10,
            active: false,
            hit: false
          },
          {
            id: 11,
            active: false,
            hit: false
          },
          {
            id: 12,
            active: false,
            hit: false
          },
          {
            id: 13,
            active: false,
            hit: false
          },
          {
            id: 14,
            active: false,
            hit: false
          },
          {
            id: 15,
            active: true,
            hit: false
          },
          {
            id: 16,
            active: false,
            hit: false
          }
        ]
      },
      {
        id: 2,
        sound: "snare",
        steps: [
          {
            id: 1,
            active: false,
            hit: false
          },
          {
            id: 2,
            active: false,
            hit: false
          },
          {
            id: 3,
            active: false,
            hit: false
          },
          {
            id: 4,
            active: false,
            hit: false
          },
          {
            id: 5,
            active: false,
            hit: false
          },
          {
            id: 6,
            active: false,
            hit: false
          },
          {
            id: 7,
            active: false,
            hit: false
          },
          {
            id: 8,
            active: false,
            hit: false
          },
          {
            id: 9,
            active: false,
            hit: false
          },
          {
            id: 10,
            active: false,
            hit: false
          },
          {
            id: 11,
            active: true,
            hit: false
          },
          {
            id: 12,
            active: true,
            hit: false
          },
          {
            id: 13,
            active: false,
            hit: false
          },
          {
            id: 14,
            active: false,
            hit: false
          },
          {
            id: 15,
            active: true,
            hit: false
          },
          {
            id: 16,
            active: false,
            hit: false
          }
        ]
      }
    ]
  };
  render() {
    return (
      <AppContainer>
        <Title>beatfarm</Title>
        {this.state.rows.map(rowItem => (
          <Row key={rowItem.id} steps={rowItem.steps} />
        ))}
      </AppContainer>
    );
  }
}

export default App;
