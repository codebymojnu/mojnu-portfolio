export default function WorkExperienceSection() {
  const workExperience = [
    {
      year: "2024 - Present",
      position: "Office Assistant",
      institution: "PUST EDGE Project, Department of CSE",
      description:
        "As a participant in the project-based course organized by the Department of Computer Science and Engineering, I am actively involved in various aspects of student data management and course administration. My primary responsibilities include overseeing student data, managing attendance records, and providing technical support to course participants.",
      responsibilities: [
        "Student Data Management",
        "Attendance Management",
        "Student Interaction and Support",
        "Teacher Interaction and Support",
      ],
    },
    {
      year: "2017 - 2023",
      position: "Chemistry Tutor",
      institution: "XYZ Academy",
      description:
        "As a participant in the project-based course organized by the Department of Computer Science and Engineering, I am actively involved in various aspects of student data management and course administration. My primary responsibilities include overseeing student data, managing attendance records, and providing technical support to course participants.",
      responsibilities: [
        "Conducting chemistry tutoring sessions",
        "Preparing study materials and lesson plans",
        "Assessing student progress and providing feedback",
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {workExperience.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <p className="text-gray-700 font-bold">{item.year}</p>
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
