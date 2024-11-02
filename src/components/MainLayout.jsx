// MainLayout.jsx
import Header from "./Header";
import Navbar from "./NavBar";
import NewsSection from "./NewsSection";
import Sidebar from "./Sidebar";

const MainLayout = () => {
  return (
    <div className="max-w-container mx-auto bg-paper-bg">
      <Header />
      <Navbar />
      <div className="flex p-4">
        <div className="w-3/4 grid grid-cols-2 gap-4 pr-4">
          <NewsSection title="Main Article 1" />
          <NewsSection title="Main Article 2" />
          <NewsSection title="Main Article 3" />
          <NewsSection title="Main Article 4" />
          <NewsSection title="Main Article 5" />
          <NewsSection title="Main Article 6" />
          <NewsSection title="Main Article 7" />
          <NewsSection title="Main Article 8" />
          <NewsSection title="Main Article 9" />
          <NewsSection title="Main Article 10" />
        </div>
        <Sidebar />
      </div>
      <footer className="flex justify-between items-center border-t-2 border-border-black p-4 text-sm">
        <span>NEURAL NEWS PUBLISHERS</span>
        <span>&lt; 1 2 3 &gt;</span>
        <span>PRICE 12 ¢</span>
      </footer>
    </div>
  );
};

export default MainLayout;
