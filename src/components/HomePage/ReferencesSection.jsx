export default function ReferencesSection() {
  const references = [
    {
      name: "Dr. Md Abdur Rahim",
      position: "Associate Professor Chairman",
      department: "Department of Computer Science and Engineering",
      institution: "Pabna University of Science and Technology",
      location: "Pabna, Bangladesh",
      email: "rahim@pust.ac.bd",
    },
    {
      name: "Subir Saha",
      position: "Assistant Professor",
      department: "Department of Computer Science and Engineering",
      institution: "Pabna University of Science and Technology",
      location: "Pabna, Bangladesh",
      email: "ss.buet@gmail.com",
    },
  ];

  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b border-gray-300">
            References
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
            {references.map((reference, index) => (
              <div key={index}>
                <p className="font-bold">{reference.name}</p>
                <p>{reference.position}</p>
                <p>{reference.department}</p>
                <p>{reference.institution}</p>
                <p>{reference.location}</p>
                <p>Email: {reference.email}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
