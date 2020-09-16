import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { articleData } from "../data/articles";

export default function Article() {
  const [article, setArticle] = useState({});
  const { id } = useParams();
  useEffect(() => {
    setArticle(articleData.find((e) => e.id == id));
  }, []);
  //todo style
  return (
    <>
      <h1>{article.title}</h1>
      <span>{article.author}</span>
      <pre>{article.content}</pre>
    </>
  );
}
