import React, { useState } from "react";

const VideoPage = () => {
  const [activeCategory, setActiveCategory] = useState("Web Development");

  // Define video data for each category
  const videoData = {
    "Web Development": [
      {
        title: "Introduction to React",
        link: "https://www.youtube.com/watch?v=7wzRz4RvPcw",
      },
      {
        title: "Building a Website with HTML and CSS",
        link: "https://www.youtube.com/watch?v=pU9Q6oiQNd0",
      },
      // Add more videos for Web Development category
    ],
    "App Development": [
      {
        title: "Getting Started with React Native",
        link: "https://www.youtube.com/watch?v=0-S5a0eXPoc",
      },
      {
        title: "Creating Your First Android App",
        link: "https://www.youtube.com/watch?v=fis26HvvDII",
      },
      // Add more videos for App Development category
    ],
    Jokes: [
      {
        title: "Stand-up Comedy Compilation #1",
        link: "https://www.youtube.com/watch?v=JNDKm5t38JE",
      },
      {
        title: "Funny Animal Videos Compilation",
        link: "https://www.youtube.com/watch?v=CLGJ-LVCQrM",
      },
      // Add more videos for Jokes category
    ],
    "Career Advice": [
      {
        title: "10 Tips for Job Interviews",
        link: "https://www.youtube.com/watch?v=XTIEN5LMNWA",
      },
      {
        title: "Finding Your Passion",
        link: "https://www.youtube.com/watch?v=hU2rCq3JfBM",
      },
      // Add more videos for Career Advice category
    ],
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="container mx-auto w-full md:max-w-4xl">
      <h2 className="text-2xl font-bold mb-4">Video Categories</h2>
      <div className="flex space-x-4 mb-8">
        {Object.keys(videoData).map((category) => (
          <button
            key={category}
            className={`py-2 px-4 rounded-md ${
              activeCategory === category
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4">{activeCategory} Videos</h3>
        <ul>
          {videoData[activeCategory].map((video, index) => (
            <li key={index} className="mb-2">
              <a
                href={video.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {video.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default VideoPage;
