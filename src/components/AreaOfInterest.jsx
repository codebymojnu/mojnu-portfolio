export default function AreaOfInterestSection() {
  const interests = [
    "Web and Mobile Application Development",
    "Content Creation",
    "Artificial Intelligence",
    "Sharing Knowledge",
  ];

  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 pb-1 border-b border-gray-300">
            Area of Interest
          </h2>
          <div className="flex flex-wrap gap-4">
            {interests.map((interest, index) => (
              <div key={index} className="bg-blue-200 rounded-md p-1">
                <p className="text-gray-800">{interest}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
