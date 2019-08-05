import React, { Fragment } from "react";
import Search from "../components/topics/Search";
import Topics from "../components/topics/Topics";
import ListPagination from "../components/shared/ListPagination";

import { Grid } from "semantic-ui-react";

const Home = () => (
  <Fragment>
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <Search />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <Topics />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <ListPagination />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Fragment>
);

export default Home;
