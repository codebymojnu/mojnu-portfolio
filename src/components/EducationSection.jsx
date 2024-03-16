export default function EducationSection() {
  const education = [
    {
      year: "2024",
      degree: "B.Sc. in Chemistry",
      institution:
        "Pabna University of Science and Technology, Pabna 6600, Bangladesh",
    },
    {
      year: "2018",
      degree: "Higher Secondary Certificate (HSC) in Science",
      institution: "Ishwardi Govt.College, Pabna",
    },
    // Add more education entries as needed
  ];

  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b border-gray-300">
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
