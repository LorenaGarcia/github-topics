import React from "react";
import { Container, Menu } from "semantic-ui-react";

const FixedMenuLayout = () => (
  <Menu fixed="top" inverted>
    <Container>
      <Menu.Item as="a" header>
        Github Topics
      </Menu.Item>
    </Container>
  </Menu>
);

export default FixedMenuLayout;
