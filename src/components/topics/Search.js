import React, { useState, useContext } from "react";
import AppContext from "../../context/app/AppContext";
import { Button } from "semantic-ui-react";
import { Input } from "semantic-ui-react";

import { Grid } from "semantic-ui-react";

const Search = () => {
  const appContext = useContext(AppContext);

  const [text, setText] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    appContext.searchTopics(text);
    setText("");
  };

  const onChange = e => setText(e.target.value);

  return (
    <div>
      <Grid columns={1}>
        <Grid.Column computer={9} mobile={6} tablet={3}>
          <Input
            fluid
            icon="search"
            type="text"
            name="text"
            placeholder="Search Topics..."
            value={text}
            onChange={onChange}
          />
        </Grid.Column>
        <Grid.Column width={4}>
          <Button color="teal" fluid onClick={onSubmit}>
            Search
          </Button>
        </Grid.Column>
        <Grid.Column computer={3} mobile={6} tablet={9}>
          {appContext.topics.length > 0 && (
            <Button
              fluid
              className="btn btn-light btn-block"
              onClick={appContext.clearTopics}
            >
              Clear
            </Button>
          )}
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Search;
