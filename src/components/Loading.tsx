import React from "react";
import { FiLoader } from "react-icons/fi";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex space-x-2 items-center">
        <FiLoader className="animate-spin h-8 w-8 text-sky-500" />
        <h1 className="text-lg font-semibold text-sky-400">Loading...</h1>
      </div>
    </div>
  );
};

export default Loading;