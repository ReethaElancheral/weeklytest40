import React from "react";
import { posts, user } from "../data/dummyData";
import PostCard from "../components/Postcard";
import ProfileSummary from "../components/ProfileSummary";

const Dashboard = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <ProfileSummary user={user} />
      </div>
      <div className="main-content">
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
