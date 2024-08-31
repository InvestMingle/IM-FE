import React from "react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

function Home() {
  return (
    <form className="flex flex-col w-4/5 space-y-6 ml-14">
      <div className="flex flex-col items-center space-y-3 mb-14">
        <h2 className="text-4xl font-bold mt-6">Chat List</h2>
      </div>
      <Link to="/chat">
        <Button
          className="flex items-center justify-start w-full h-24 border-2 rounded-lg shadow-md"
          variant="ghost"
        >
          <div className="flex items-center justify-center w-16 h-16">
            <img className="w-7" src="image/s-logo.png" alt="samsung" />
          </div>
          <div className="grid justify-items-start ml-4">
            <span className="font-bold text-xl">삼성전자</span>
            <span className="text-gray-500 text-sm">최근 채팅 15분 전</span>
          </div>
        </Button>
      </Link>
      <Link to="/chat">
        <Button
          className="flex items-center justify-start w-full h-24 border-2 rounded-lg shadow-md"
          variant="ghost"
        >
          <div className="flex items-center justify-center w-16 h-16">
            <img className="w-12" src="image/sk-logo.png" alt="sk" />
          </div>
          <div className="grid justify-items-start ml-4">
            <span className="font-bold text-xl">SK하이닉스</span>
            <span className="text-gray-500 text-sm">최근 채팅 15분 전</span>
          </div>
        </Button>
      </Link>
      <Link to="/chat">
        <Button
          className="flex items-center justify-start w-full h-24 border-2 rounded-lg shadow-md"
          variant="ghost"
        >
          <div className="flex items-center justify-center w-16 h-16">
            <img className="w-12" src="image/lg-logo.png" alt="lg" />
          </div>
          <div className="grid justify-items-start ml-4">
            <span className="font-bold text-xl">LG에너지솔루션</span>
            <span className="text-gray-500 text-sm">최근 채팅 15분 전</span>
          </div>
        </Button>
      </Link>
      <Link to="/chat">
        <Button
          className="flex items-center justify-start w-full h-24 border-2 rounded-lg shadow-md"
          variant="ghost"
        >
          <div className="flex items-center justify-center w-16 h-16">
            <img className="w-7" src="image/s-logo.png" alt="samsung" />
          </div>
          <div className="grid justify-items-start ml-4">
            <span className="font-bold text-xl">삼성바이오로직스</span>
            <span className="text-gray-500 text-sm">최근 채팅 15분 전</span>
          </div>
        </Button>
      </Link>
      <Link to="/chat">
        <Button
          className="flex items-center justify-start w-full h-24 border-2 rounded-lg shadow-md"
          variant="ghost"
        >
          <div className="flex items-center justify-center w-16 h-16">
            <img className="w-14" src="image/hd-logo.png" alt="hyundai" />
          </div>
          <div className="grid justify-items-start ml-4">
            <span className="font-bold text-xl">현대차</span>
            <span className="text-gray-500 text-sm">최근 채팅 15분 전</span>
          </div>
        </Button>
      </Link>
    </form>
  );
}

export default Home;
