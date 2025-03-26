import React from "react";
import Header from "../components/Header";
import Content from "../components/Content";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-blue-400">
      {/* 헤더 */}
      <Header/> 
      <Content />
    </div>
  );
};

export default Home;
