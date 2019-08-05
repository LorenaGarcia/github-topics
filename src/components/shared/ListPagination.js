import React, { useContext } from "react";
import { Pagination } from "semantic-ui-react";
import AppContext from "../../context/app/AppContext";

const ListPagination = () => {
  const appContext = useContext(AppContext);

  const { topics, currentPage, perPage, changePage } = appContext;

  const totalPages = Math.ceil(topics.length / perPage);

  const handlePaginationChange = (e, { activePage }) => changePage(activePage);

  if (topics.length === 0) return <div />;

  return (
    <Pagination
      floated="right"
      activePage={currentPage}
      onPageChange={handlePaginationChange}
      totalPages={totalPages}
    />
  );
};

export default ListPagination;
