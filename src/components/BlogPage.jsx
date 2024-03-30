import React, { useState } from "react";

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState("Web Development");

  // Define blog data for each category
  const blogData = {
    "Web Development": [
      {
        title: "Introduction to React",
        link: "https://dev.to/example/introduction-to-react-123",
      },
      {
        title: "Building a Website with HTML and CSS",
        link: "https://dev.to/example/building-website-html-css-456",
      },
      // Add more blogs for Web Development category
    ],
    "App Development": [
      {
        title: "Getting Started with React Native",
        link: "https://medium.com/example/getting-started-with-react-native-789",
      },
      {
        title: "Creating Your First Android App",
        link: "https://medium.com/example/creating-first-android-app-321",
      },
      // Add more blogs for App Development category
    ],
    Love: [
      {
        title: "10 Ways to Show Love Every Day",
        link: "https://www.facebook.com/example/10-ways-to-show-love",
      },
      {
        title: "How to Keep Your Relationship Strong",
        link: "https://www.facebook.com/example/relationship-strong",
      },
      // Add more blogs for Love category
    ],
    Physics: [
      {
        title: "Understanding Quantum Mechanics",
        link: "https://www.example.com/understanding-quantum-mechanics",
      },
      {
        title: "The Theory of Relativity Explained",
        link: "https://www.example.com/theory-of-relativity",
      },
      // Add more blogs for Physics category
    ],
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="container mx-auto w-full md:max-w-4xl">
      <h2 className="text-2xl font-bold mb-4">Blog Categories</h2>
      <div className="flex space-x-4 mb-8">
        {Object.keys(blogData).map((category) => (
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
        <h3 className="text-xl font-bold mb-4">{activeCategory} Blogs</h3>
        <ul>
          {blogData[activeCategory].map((blog, index) => (
            <li key={index} className="mb-2">
              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {blog.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogPage;
