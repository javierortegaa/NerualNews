// MainLayout.jsx
import React, { useState } from "react";
import Header from "./Header";
import Navbar from "./NavBar";
import NewsSection from "./NewsSection";

const MainLayout = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 4;
  const totalArticles = 10;
  const totalPages = Math.ceil(totalArticles / articlesPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderArticles = () => {
    const startIndex = (currentPage - 1) * articlesPerPage;
    const endIndex = startIndex + articlesPerPage;
    const articles = [];

    for (let i = startIndex; i < endIndex; i++) {
      articles.push(<NewsSection key={i} title={`Main Article ${i + 1}`} />);
    }

    return articles;
  };

  return (
    <div className="max-w-container mx-auto bg-paper-bg">
      <Header />
      <Navbar />
      <div className="flex flex-col md:flex-row p-4">
        {/* Main content area */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 md:pr-4">
          {renderArticles()}
        </div>
      </div>

      {/* Footer */}
      <footer className="flex flex-col sm:flex-row justify-between items-center border-t-2 border-border-black p-4 text-sm space-y-2 sm:space-y-0">
        <span>ABOUT</span>
        <span className="order-last sm:order-none">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`mx-1 ${currentPage === index + 1 ? "font-bold" : ""}`}
            >
              {index + 1}
            </button>
          ))}
        </span>
        <span>PRICE 12 ¢</span>
      </footer>
    </div>
  );
};
export default MainLayout;
