import React from "react";

const CommentBox = ({ comments, newComment, onChange, onAdd }) => {
  return (
    <div className="comment-box">
      {comments.map((c, i) => (
        <div key={i}>💬 {c}</div>
      ))}
      <input
        type="text"
        placeholder="Write a comment..."
        value={newComment}
        onChange={onChange}
      />
      <button onClick={onAdd}>Add</button>
    </div>
  );
};

export default CommentBox;
