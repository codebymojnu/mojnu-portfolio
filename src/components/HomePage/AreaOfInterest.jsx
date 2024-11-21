export default function AreaOfInterestSection() {
  const interests = [
    "Web and Mobile Application Development",
    "Content Creation",
    "Artificial Intelligence",
    "Blogging",
  ];

  return (
    <section className="">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b border-gray-300">
            Area of Interest
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:flex lg:flex-wrap">
            {interests.map((interest, index) => (
              <div key={index} className="rounded-md">
                <p className="text-gray-800 mr-2">{interest + ","}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
