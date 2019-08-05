import React, { useContext } from "react";
import TopicItem from "./TopicItem";
import Loading from "../layout/Loading";
import AppContext from "../../context/app/AppContext";
import { Item } from "semantic-ui-react";

const Topics = () => {
  const appContext = useContext(AppContext);

  const { loading, currentPage, perPage, topics } = appContext;

  const indexMax = currentPage * perPage;
  const indexMin = indexMax - perPage;
  const currentTopics = topics.slice(indexMin, indexMax);

  if (loading) return <Loading />;

  return (
    <Item.Group divided>
      {currentTopics.map(topic => (
        <TopicItem key={topic.name} topic={topic} />
      ))}
    </Item.Group>
  );
};

export default Topics;
