export default function AreaOfInterestSection() {
  const interests = [
    "Web and Mobile Application Development",
    "Content Creation",
    "Artificial Intelligence",
    "Blogging",
    "Knowledge Sharing",
  ];

  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b border-gray-300">
            Area of Interest
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:flex lg:flex-wrap gap-2">
            {interests.map((interest, index) => (
              <div key={index} className="bg-blue-200 rounded-md p-2">
                <p className="text-gray-800">{interest}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
