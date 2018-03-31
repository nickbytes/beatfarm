import * as React from "react";
import Step from "../Step";
import styled from "styled-components";

const RowStyle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 0 20px;
`;

interface StepsProps {
  steps: StepItem[];
}

interface StepItem {
  id: number;
  hit: boolean;
  active: boolean;
}

const Row = ({ steps }: StepsProps) => (
  <RowStyle>
    {steps.map((stepItem: StepItem) => (
      <Step key={stepItem.id} active={stepItem.active} hit={stepItem.hit} />
    ))}
  </RowStyle>
);

export default Row;
