export default function EducationSection() {
  const education = [
    {
      year: "2023",
      degree: "B.Sc. Engineering in Computer Science and Engineering",
      institution:
        "Pabna University of Science and Technology, Pabna 6600, Bangladesh",
    },
    {
      year: "2016",
      degree: "Higher Secondary Certificate (HSC) in Science",
      institution: "Nageswari Govt. College, Nageswari, Kurigram, Bangladesh.",
    },
    // Add more education entries as needed
  ];

  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 pb-1 border-b border-gray-300">
            Education
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
            {education.map((item, index) => (
              <div key={index} className="flex">
                <p className="mr-4">{item.year}</p>
                <div>
                  <p className="font-bold">{item.degree}</p>
                  <p>{item.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
