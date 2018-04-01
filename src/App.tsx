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
    currentCount: 1,
    rows: [
      {
        id: 1,
        sound: "kick",
        steps: [
          {
            id: 1,
            active: false,
          },
          {
            id: 2,
            active: false,
          },
          {
            id: 3,
            active: false,
          },
          {
            id: 4,
            active: false,
          },
          {
            id: 5,
            active: false,
          },
          {
            id: 6,
            active: false,
          },
          {
            id: 7,
            active: false,
          },
          {
            id: 8,
            active: false,
          },
          {
            id: 9,
            active: false,
          },
          {
            id: 10,
            active: false,
          },
          {
            id: 11,
            active: false,
          },
          {
            id: 12,
            active: false,
          },
          {
            id: 13,
            active: false,
          },
          {
            id: 14,
            active: false,
          },
          {
            id: 15,
            active: true,
          },
          {
            id: 16,
            active: false,
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
          },
          {
            id: 2,
            active: false,
          },
          {
            id: 3,
            active: false,
          },
          {
            id: 4,
            active: false,
          },
          {
            id: 5,
            active: false,
          },
          {
            id: 6,
            active: false,
          },
          {
            id: 7,
            active: false,
          },
          {
            id: 8,
            active: false,
          },
          {
            id: 9,
            active: false,
          },
          {
            id: 10,
            active: false,
          },
          {
            id: 11,
            active: true,
          },
          {
            id: 12,
            active: true,
          },
          {
            id: 13,
            active: false,
          },
          {
            id: 14,
            active: false,
          },
          {
            id: 15,
            active: true,
          },
          {
            id: 16,
            active: false,
          }
        ]
      }
    ]
  };

  timer = () => {
    if (this.state.currentCount === 16) {
      this.setState({
        currentCount: 1
      });
    } else {
      this.setState({
        currentCount: this.state.currentCount + 1
      });
    }

  }

  componentDidMount() {
    window.setInterval(this.timer, 500);
  }

  render() {
    return (
      <AppContainer>
        <Title>beatfarm – {this.state.currentCount}</Title>
        {this.state.rows.map(rowItem => (
          <Row key={rowItem.id} sound={rowItem.sound} steps={rowItem.steps} currentCount={this.state.currentCount} />
        ))}
      </AppContainer>
    );
  }
}

export default App;
