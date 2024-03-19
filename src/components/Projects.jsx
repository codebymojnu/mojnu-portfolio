const Projects = () => {
  const projects = [
    {
      name: "E-commerce Website",
      description: "An online store for purchasing electronics and gadgets.",
      technologies: ["React", "Redux", "Node.js", "Express", "MongoDB"],
      startDate: "January 2022",
      endDate: "June 2022",
      liveSiteLink: "https://example.com",
      frontendCodeLink: "https://github.com/your_username/frontend",
      backendCodeLink: "https://github.com/your_username/backend",
    },
    // Add more projects as needed
  ];
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-bold mb-2">{project.name}</h2>
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
