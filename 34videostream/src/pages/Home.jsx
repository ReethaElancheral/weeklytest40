import React, { useState } from "react";
import { videos } from "../data/videos";
import VideoCard from "../components/Videocard";

const Home = () => {
  const [search, setSearch] = useState("");

  const filteredVideos = videos.filter((v) =>
    v.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="home">
      <input
        className="search-input"
        type="text"
        placeholder="Search videos..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="video-grid">
        {filteredVideos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </main>
  );
};

export default Home;
