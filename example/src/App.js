import React from "react";
import Card from "./Card";

const App = () => {
  return (
    <div className="container mx-auto">
      <Card
        title="Example Card"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus."
        image="https://source.unsplash.com/random/400x200"
      />
    </div>
  );
};

export default App;
