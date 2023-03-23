import React from "react";
import ProgressBar from "./ProgressBar";

const App = () => {
  const progress = 50;

  return (
    <div className="container mx-auto">
      <ProgressBar progress={progress} />
    </div>
  );
};

export default App;
