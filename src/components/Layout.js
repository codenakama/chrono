import React from "react";
import Footer from "./Footer";
import styled from "styled-components";
import AppHeader from "./AppHeader";
import { Container } from "semantic-ui-react";

const StyledContainer = styled(Container)`
  margin-top: 7em;
  margin-bottom: 8em;
`;
const Layout = ({ children }) => {
  return (
    <div>
      <StyledContainer>
        <AppHeader />
        <StyledContainer text>{children}</StyledContainer>
      </StyledContainer>
      <Footer />
    </div>
  );
};

export default Layout;
