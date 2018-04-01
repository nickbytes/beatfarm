import * as React from "react";
import styled, { css } from "styled-components";

type StyleProps = {
  active: boolean;
  current: number;
  stepId: number;
};

const complexMixin = css`
  background-color: ${(props: StyleProps) =>
    props.current === props.stepId ? "rgba(53, 212, 199, 1.000)" : "rgba(62, 111, 173, 0.55)"};
  border: ${(props: StyleProps) =>
    props.current === props.stepId ? "2px solid red" : "border: 1px solid rgba(62, 111, 173, 1)"};
`;

const inactiveHit = css`
    border: ${(props: StyleProps) =>
    props.current === props.stepId ? "2px solid red" : "border: 1px solid rgba(62, 111, 173, 1)"};
`;

const StepSpan = styled.span`
width: 16px;
height: 16px;
margin: 0 10px;
border: 1px solid rgba(62, 111, 173, 1);
${
  (props: StyleProps) =>
    props.active ? complexMixin : inactiveHit
  };


`;

type Props = {
  active: boolean;
  current: number;
  stepId: number;
};

const Step = ({ active, current, stepId }: Props) =>
  <StepSpan active={active} current={current} stepId={stepId} />;

export default Step;
