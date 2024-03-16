export default function WorkExperienceSection() {
  const workExperience = [
    {
      year: "2022- Present",
      position: "Research Assistant",
      institution: "ABC University, Department of Chemistry",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
    },
    {
      year: "2020-2022",
      position: "Chemistry Tutor",
      institution: "XYZ Academy",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
    },
    // Add more work experience entries as needed
  ];

  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b border-gray-300">
            Work Experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
            {workExperience.map((item, index) => (
              <div key={index} className="flex">
                <p className="mr-4">{item.year}</p>
                <div>
                  <p className="font-bold">{item.position}</p>
                  <p>{item.institution}</p>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
