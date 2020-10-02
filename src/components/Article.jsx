import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import articleData from "../data/articles";
import ReactHtmlParser from "react-html-parser";

export default function Article() {
  const [article, setArticle] = useState({});
  const { id } = useParams();
  useEffect(() => {
    setArticle(articleData.find((e) => e.id == id));
  }, [id]);

  return (
    <div className="page-wrapper">
      <h1>{article.title}</h1>
      <span className="author">{article.author}</span>
      <pre>{ReactHtmlParser(article.content)}</pre>
    </div>
  );
}
