export default function SkillsSection() {
  const frontendSkills = [
    "JavaScript",
    "React",
    "Redux",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "Tailwind CSS",
    "Material-UI (MUI)",
  ];

  const backendSkills = ["Node.js", "Express.js"];

  const databaseSkills = ["MongoDB", "MySQL"];

  return (
    <section className="">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b border-gray-300">
            Skills
          </h2>
          <div className="grid grid-cols-3 gap-4 content-stetch">
            <div className="mb-4">
              <p>
                <span className="font-bold">Frontend: </span>
                {frontendSkills.join(", ")}
              </p>
            </div>

            <div className="mb-4">
              <p>
                <span className="font-bold">Backend: </span>
                {backendSkills.join(", ")}
              </p>
            </div>
            <div className="mb-4">
              <p>
                <span className="font-bold">Databese: </span>
                {databaseSkills.join(", ")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
