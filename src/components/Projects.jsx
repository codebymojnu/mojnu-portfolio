const Projects = () => {
  const projects = [
    {
      name: "Non Profit Organization Website for SPAF",
      description:
        "Created for Safe and Poverty Alleviation Foundation (SPAF), this website showcases SPAF's mission and initiatives. It features detailed program info, news updates, donation and volunteer forms, and an admin dashboard. Built with HTML, Tailwind CSS, JavaScript, React, Node.js and MongoDB, the site boasts modern design, mobile-friendliness, and easy navigation. ",
      technologies: ["React", "Redux", "Node.js", "Express", "MongoDB"],
      startDate: "February 2024",
      endDate: "March 2024",
      liveSiteLink: "https://spaf.vercel.app",
      frontendCodeLink: "https://github.com/codebymojnu/spaf",
      backendCodeLink: "https://github.com/codebymojnu/spaf-backend",
    },
    {
      name: "React Bangla Documentation",
      description:
        "Embarking on an endeavor to demystify React in Bengali, we present a meticulously crafted documentation inspired by the official React documentation. We invite you to explore our live site and actively contribute. Together, we've not only disseminated knowledge but also dissected React's core concepts for a better understanding.",
      technologies: ["TypeScript", "Nextra Docs", "mdx"],
      liveSiteLink: "https://react-bangla.vercel.app/",
      frontendCodeLink: "https://github.com/codebymojnu/react-bangla-tutorial",
      startDate: "March 2024",
      endDate: "Ongoing",
    },
    // Add more projects as needed
  ];
  return (
    <div className="   container mx-auto w-full md:max-w-4xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-bold mb-2 pb-1 border-b border-gray-300">
              {index + 1}. {project.name}
            </h2>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Technologies used:</span>{" "}
              {project.technologies.join(", ")}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Start Date:</span>{" "}
              {project.startDate}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">End Date:</span> {project.endDate}
            </p>
            <div className="flex justify-center">
              <a
                href={project.liveSiteLink}
                className="text-blue-500 hover:underline mr-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Site
              </a>
              <a
                href={project.frontendCodeLink}
                className="text-blue-500 hover:underline mr-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Frontend Code
              </a>
              <a
                href={project.backendCodeLink}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Backend Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
