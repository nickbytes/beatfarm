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
  };
  render() {
    return (
      <RowStyle>
        {this.state.steps.map(stepItem => (
          <Step key={stepItem.id} active={stepItem.active} hit={stepItem.hit} />
        ))}
      </RowStyle>
    );
  }
}

export default Row;
