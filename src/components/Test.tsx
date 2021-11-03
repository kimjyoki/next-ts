import React from "react";
import styled from "styled-components";

const Testdiv = styled.div`
  background: yellow;
  & div {
    color: red;
    & span {
      color: blue;
    }
  }
`;

const Test = () => {
  return (
    <Testdiv>
      <div>
        <p>하이</p>
      </div>
    </Testdiv>
  );
};

export default Test;
