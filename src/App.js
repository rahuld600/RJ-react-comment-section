import "./App.css";
import { CommentSection } from "./lib";
import React, { useState } from "react";
function App() {
  const [comments, setComments] = useState([]);

  return (
    <CommentSection
      comments={comments}
      setComments={setComments}
      userName="RD"
    />
  );
}

export default App;
