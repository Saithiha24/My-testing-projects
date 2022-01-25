import React from "react";
import { useParams } from "react-router";

const NewsDetail = () => {
  const { id } = useParams();

  return (
    <>
      Wait We are developing for this feature and for serching news as you like
      too My title is {id}
    </>
  );
};

export default NewsDetail;
