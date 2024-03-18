export default function PersonalInformationSection() {
  const personalInformation = [
    { label: "Father’s name", value: "Md. Mostafizur Rahman" },
    { label: "Mother’s name", value: "Mst. Ayvee Akter" },
    { label: "Place of Birth", value: "Baghail, Paksey, Ishwardi, Pabna" },
    { label: "Nationality", value: "Bangladeshi (By Birth)" },
    { label: "Sex", value: "Female" },
    { label: "Religion", value: "Islam" },
    { label: "Marital status", value: "Unmarried" },
    { label: "Blood group", value: "A+ (Positive)" },
    {
      label: "Address",
      value: "Baghail, Paksey, Ishwardi, Pabna.",
    },
    { label: "Email", value: "135833mithila@gmail.com" },
    { label: "Phone", value: "1719791921" }, // Add your phone number here
  ];

  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b border-gray-300">
            Personal Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
            {personalInformation.map((info, index) => (
              <div key={index} className="flex">
                <p className="font-bold mr-2">{info.label}:</p>
                <p>{info.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
