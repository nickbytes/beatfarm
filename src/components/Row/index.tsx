import * as React from "react";
import Step from "../Step";
import styled from "styled-components";

const RowStyle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 0 20px;
`;

class Row extends React.Component {
  state = {
    steps: [
      {
        id: 1,
        active: false
      },
      {
        id: 2,
        active: false
      },
      {
        id: 3,
        active: false
      },
      {
        id: 4,
        active: false
      },
      {
        id: 5,
        active: false
      },
      {
        id: 6,
        active: false
      },
      {
        id: 7,
        active: false
      },
      {
        id: 8,
        active: false
      },
      {
        id: 9,
        active: false
      },
      {
        id: 10,
        active: false
      },
      {
        id: 11,
        active: false
      },
      {
        id: 12,
        active: false
      },
      {
        id: 13,
        active: false
      },
      {
        id: 14,
        active: false
      },
      {
        id: 15,
        active: false
      },
      {
        id: 16,
        active: false
      }
    ]
  };
  render() {
    return (
      <RowStyle>
        {this.state.steps.map(thing => <Step key={thing.id} />)}
      </RowStyle>
    );
  }
}

export default Row;
