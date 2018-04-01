import * as React from "react";
import Step from "../Step";
import styled from "styled-components";

const RowStyle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 0 20px;
`;

const NameContainer = styled.div`
  width: 70px;
  overflow: hidden;
`;

const RowName = styled.span`
  font-style: italic;
  font-size: 15px;
  line-height: 17px;
`;

interface StepsProps {
  steps: StepItem[];
  currentCount: number;
  sound: string;
}

interface StepItem {
  id: number;
  active: boolean;
}

const Row = ({ steps, currentCount, sound }: StepsProps) => (
  <RowStyle>
    <NameContainer>
      <RowName>{sound}</RowName>
    </NameContainer>

    {steps.map((stepItem: StepItem) => (
      <Step key={stepItem.id} stepId={stepItem.id} active={stepItem.active} current={currentCount} />
    ))}
  </RowStyle>
);

export default Row;
