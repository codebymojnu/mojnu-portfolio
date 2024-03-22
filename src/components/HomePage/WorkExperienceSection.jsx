export default function WorkExperienceSection() {
  const workExperience = [
    {
      year: "/workYear1.PNG",
      position: "Office Staff",
      institution: "EDGE Project, Department of CSE, PUST",
      description:
        "Enhancing Digital Government and Economy (EDGE) is a project of the Bangladesh Computer Council (BCC) under the ICT Division. EDGE Project works on creating the enabling environment for digital government and the digital economy. I provided crucial administrative support to the Coordinator, encompassing tasks such as file management, data entry, scheduling, and office supply procurement. ",
      responsibilities: [
        "Student Data Management",
        "Attendance Management",
        "Student and Teacher Interaction and Support",
        "Provide administrative support to Coordinator",
        "Order office supplies",
      ],
    },
    {
      year: "/workYear2.PNG",
      position: "Science Tutor",
      institution: "Rabeya Academy, Private Home Tutor",
      description:
        "I have been working as a science teacher at Rabea Academy Private School in Mirpur 12 for 7 months. I have been teaching science, physics, chemistry, and mathematics to secondary and lower secondary students in Pabna city and my own area for a long time.",
      responsibilities: [
        "Teach science, physics, chemistry, and mathematics",
        "Create engaging lesson plans",
        "Provide individualized support",
        "Communicate with students, parents,",
      ],
    },
    // Add more work experience entries as needed
  ];

  return (
    <section className="py-4">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b border-gray-300">
            Work Experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 lg:gap-x-4">
            {workExperience.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg  lg:mb-0 lg:shadow-sm lg:p-6"
              >
                <img src={item.year} alt="work year" />
                <p className="text-lg font-semibold mt-2">{item.position}</p>
                <p className="text-gray-600">{item.institution}</p>
                <p className="text-gray-700 mt-2">{item.description}</p>
                <h4 className="text-md font-bold mt-2">
                  Key Responsibilities:
                </h4>
                <ul className="mt-1">
                  {item.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="text-gray-700">
                      - {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
