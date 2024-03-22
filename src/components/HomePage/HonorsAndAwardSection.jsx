export default function HonorsAndAwardsSection() {
  const honorsAndAwards = [
    {
      year: "2015",
      award:
        "My life journey was published in the 10th edition of Babylon Kathokata under the title 'হামার ছাওয়াটা মানুষ হইবে' (Page No. 14).",
      link: "https://babylonkathokata.com/2015/12/15/ব্যাবিলন-কথকতা-১০ম-সংখ্য/",
    },

    {
      year: "2008",
      award:
        "Merit Scholarship (General) of Bangladesh Primary Level Scholarship Examination.",
      link: "",
    },
    // Add more honors and awards entries as needed
  ];

  return (
    <section className="">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b border-gray-300">
            Honors and Awards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
            {honorsAndAwards.map((item, index) => (
              <div key={index} className="flex">
                <p className="mr-4">{item.year}</p>
                <div>
                  <p>{item.award}</p>
                  {item.link && (
                    <a
                      href={item.link}
                      className="text-blue-500 hover:underline"
                    >
                      View Link
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
