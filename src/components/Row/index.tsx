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
  currentCount: number;
}

interface StepItem {
  id: number;
  active: boolean;
}

const Row = ({ steps, currentCount }: StepsProps) => (
  <RowStyle>
    {steps.map((stepItem: StepItem) => (
      <Step key={stepItem.id} stepId={stepItem.id} active={stepItem.active} current={currentCount} />
    ))}
  </RowStyle>
);

export default Row;
