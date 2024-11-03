import React, { useState, useEffect } from "react";
import Header from "./Header";
import Navbar from "./NavBar";
import NewsSection from "./NewsSection";
import { getArticles } from "../services/firebase_fs";

const MainLayout = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [articles, setArticles] = useState([]);
  const [tag, setTag] = useState("");
  const [selectedTag, setSelectedTag] = useState(null);
  const articlesPerPage = 4;
  const [hasMoreArticles, setHasMoreArticles] = useState(true);

  const handlePageChange = (page) => {
    if (page > 0) {
      setCurrentPage(page);
      getArticles(page, tag, articlesPerPage).then((newArticles) => {
        setArticles(newArticles);
        if (newArticles.length < articlesPerPage) {
          setHasMoreArticles(false);
        } else {
          setHasMoreArticles(true);
        }
      });
    }
  };

  const handleTagChange = (passed_tag) => {
    setTag(passed_tag);
    setSelectedTag(passed_tag);
    setCurrentPage(1);
    setHasMoreArticles(true);
    getArticles(1, passed_tag, articlesPerPage).then((newArticles) => {
      setArticles(newArticles);
    });
  };

  useEffect(() => {
    getArticles(currentPage, tag, articlesPerPage).then((newArticles) => {
      setArticles(newArticles);
      if (newArticles.length < articlesPerPage) {
        setHasMoreArticles(false);
      }
    });
  }, [tag]);

  return (
    <div className="max-w-5xl mx-auto bg-paper-bg">
      <Header />
      <Navbar handleChange={handleTagChange} />

      <div className="flex flex-wrap p-4">
        {/* Left Column */}
        <div className="w-full md:w-1/2 p-4 space-y-4 border-r border-black">
          {articles
            .slice(0, Math.ceil(articles.length / 2))
            .map((article, index) => (
              <div key={index} className="pb-4 border-b border-black">
                <NewsSection
                  title={article.headline}
                  body={article.summary}
                  date={article.date}
                  tags={article.tags}
                  source={article.source}
                  og_url={article.url}
                  selectedTag={selectedTag}
                  handleTagChange={handleTagChange}
                />
              </div>
            ))}
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/2 p-4 space-y-4">
          {articles
            .slice(Math.ceil(articles.length / 2))
            .map((article, index) => (
              <div
                key={index + Math.ceil(articles.length / 2)}
                className="pb-4 border-b border-black"
              >
                <NewsSection
                  title={article.headline}
                  body={article.summary}
                  date={article.date}
                  tags={article.tags}
                  source={article.source}
                  og_url={article.url}
                  selectedTag={selectedTag}
                  handleTagChange={handleTagChange}
                />
              </div>
            ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="flex flex-col sm:flex-row justify-between items-center border-t-2 border-black p-4 text-sm space-y-2 sm:space-y-0">
        <span>DEVPOST</span>
        <div className="flex space-x-2">
          {/* Previous Button */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-2 py-1 disabled:opacity-50"
          >
            &larr; PREVIOUS
          </button>

          {/* Next Button */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={!hasMoreArticles}
            className="px-2 py-1 disabled:opacity-50"
          >
            NEXT &rarr;
          </button>
        </div>
        <span>PRICE 12 ¢</span>
      </footer>
    </div>
  );
};

export default MainLayout;
