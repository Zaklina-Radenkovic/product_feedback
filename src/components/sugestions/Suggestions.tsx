import React from "react";

const Suggestions = () => {
  return (
    <div className="suggestion">
      <div className="btn-upvote">
        <span>icon</span>
        <button>112</button>
      </div>
      <div className="suggestion-content">
        <h3>Header</h3>
        <p>text</p>
        <button>Status</button>
      </div>
      <div className="suggestion-msg">
        <span>icon</span>
        <span>2</span>
      </div>
    </div>
  );
};

export default Suggestions;
