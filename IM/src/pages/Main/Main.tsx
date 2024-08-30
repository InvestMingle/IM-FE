import React from "react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

function Main() {
  return (
    <div className="flex flex-col items-center space-y-10">
      <h2 className="text-4xl font-bold mt-6 mb-28">Get Started</h2>
      <div className="flex flex-col items-center space-y-7 w-full">
        <Link to="/login" className="w-4/5">
          <Button className="w-full h-20 text-3xl font-medium rounded-full border-2 border-black">
            Sign in
          </Button>
        </Link>
        <Link to="/register" className="w-4/5">
          <Button className="w-full h-20 text-3xl font-medium rounded-full border-2 border-black">
            Sign up
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Main;
