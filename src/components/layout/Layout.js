import React from "react";
import Navbar from "../layout/Navbar";
import { Container } from "semantic-ui-react";

const FixedMenuLayout = props => (
  <div>
    <Navbar />
    <Container style={{ marginTop: "7em" }}>{props.children}</Container>
  </div>
);

export default FixedMenuLayout;
