export default function SkillsSection() {
  const skills = [
    "Organic Chemistry",
    "Physical Chemistry",
    "Analytical Chemistry",
    "Inorganic Chemistry",
    "Biochemistry",
    "Laboratory Techniques",
    // Add more skills as needed
  ];

  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b border-gray-300">
            Skills
          </h2>
          <div className="container mx-auto w-100">
            <ul className="list-disc list-inside">
              {skills.map((skill, index) => (
                <li key={index} className="mb-2">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
