import * as React from "react";
import styled from "styled-components";

type StyleProps = {
  active: boolean;
  hit: boolean;
};

const StepSpan = styled.span`
  width: 16px;
  height: 16px;
  margin: 0 10px;
  background-color: ${(props: StyleProps) =>
    props.active ? "rgba(62, 111, 173, 0.75)" : "rgba(62, 111, 173, 0.25)"};
`;

type Props = {
  active: boolean;
  hit: boolean;
};

const Step = ({ active, hit }: Props) => <StepSpan active={active} hit={hit} />;

export default Step;
