import React from "react";

const ProfileSummary = ({ user }) => {
  return (
    <div className="profile-summary">
      <img src={user.avatar} alt={`${user.name}'s avatar`} />
      <h3>{user.name}</h3>
      <p>{user.bio}</p>
    </div>
  );
};

export default ProfileSummary;
