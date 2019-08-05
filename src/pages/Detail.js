import React, { Fragment, useEffect, useContext } from "react";
import Loading from "../components/layout/Loading";
import { Link, Redirect } from "react-router-dom";
import AppContext from "../context/app/AppContext";

import { Container, Header, Button } from "semantic-ui-react";

const Detail = ({ match }) => {
  const appContext = useContext(AppContext);

  const { getTopic, loading, topic } = appContext;

  useEffect(() => {
    const name = match.params.name ? match.params.name : "";

    getTopic(name);
  });

  if (!topic) return <Redirect to="/" />;

  const {
    created_by,
    description,
    display_name,
    created_at,
    updated_at,
    released,
    score
  } = topic;

  if (loading) return <Loading />;

  return (
    <Fragment>
      <Link to="/">
        <Button
          floated="right"
          content="Back"
          icon="angle left"
          labelPosition="left"
          color="blue"
        />
      </Link>
      <Container fluid>
        <Header as="h2">{display_name}</Header>
        <p>
          <strong>Created By:</strong> {created_by}
        </p>
        <p>
          <strong>Description: </strong>
          {description}
        </p>
        <p>
          <strong>Created:</strong> {created_at}
        </p>
        <p>
          <strong>Update:</strong> {updated_at}
        </p>
        <p>
          <strong>Released:</strong> {released}
        </p>
        <p>
          <strong>Score:</strong> {score}
        </p>
      </Container>
    </Fragment>
  );
};

export default Detail;
