import React, { useEffect, useState } from "react";
import { useParams, useLoaderData } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";
import NewsCard from "../NewsCard/NewsCard";

const Category = () => {
  const { id } = useParams();
  console.log(id);
  const categoryNews = useLoaderData();
  const [title, setTitle] = useState("");
  if (id == 0) useTitle("home");
  else useTitle("Category");
  return (
    <div>
      {id && <h3>This Category News: {categoryNews.length}</h3>}
      {categoryNews.map((news) => (
        <NewsCard key={news._id} news={news}></NewsCard>
      ))}
    </div>
  );
};

export default Category;
