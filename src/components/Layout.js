import React from "react";
import Footer from "./Footer";
import styled from "styled-components";
import AppHeader from "./AppHeader";

const Container = styled.div`margin-bottom: 8em;`;

const Layout = ({ children }) => {
  return (
    <div>
      <Container>
        <AppHeader />
        {children}
      </Container>
      <Footer />
    </div>
  );
};

export default Layout;
