import React, { useState } from "react";
import CommentBox from "./CommentBox";

const PostCard = ({ post }) => {
  const [likes, setLikes] = useState(post.likes);
  const [comments, setComments] = useState(post.comments);
  const [newComment, setNewComment] = useState("");

  const handleLike = () => setLikes(likes + 1);

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <div className="post-card">
      <div className="post-header">
        <img src={post.avatar} alt="avatar" />
        <strong>{post.author}</strong>
      </div>
      <p>{post.content}</p>
      {post.image && <img src={post.image} alt="post" />}
      <div className="post-actions">
        <span className="like-button" onClick={handleLike}>❤️ {likes} Likes</span>
        <span>{comments.length} Comments</span>
      </div>
      <CommentBox
        comments={comments}
        newComment={newComment}
        onChange={e => setNewComment(e.target.value)}
        onAdd={handleAddComment}
      />
    </div>
  );
};

export default PostCard;
