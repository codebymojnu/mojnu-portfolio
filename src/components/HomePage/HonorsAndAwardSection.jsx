export default function HonorsAndAwardsSection() {
  const honorsAndAwards = [
    {
      year: "2018, 19",
      award:
        "Awarded the MMJF Scholarship in 2018 & CZM Scholarship in 2019 for admission to a public university as an underprivileged student.",
      link: "",
    },
    {
      year: "2017",
      award:
        "Featured in The Daily Ittefaq, Jugantor, and Daily Naya Diganta for gaining admission to university as an underprivileged student. (13, 14, 17 December, 2017)",
      link: "https://www.ittefaq.com.bd/450373/মজনু-কী-পাবেন-স্বপ্নপূরণ-করতে",
    },
    {
      year: "2015",
      award:
        "Babylon Kathokata (10th Edition) Published a Story: (হামার ছাওয়াটা মানুষ হইবে) 2015, detailing my personal journey and overcoming challenges. Page No. 14",
      link: "https://babylonkathokata.com/2015/12/15/ব্যাবিলন-কথকতা-১০ম-সংখ্য/",
    },
    {
      year: "2014",
      award:
        "Featured on Jugantor, and Uttor Bangla newspaper for great academic performance despite initial challenges. (21 May, 2014)",
      link: "https://www.uttorbangla.com/33149",
    },
    {
      year: "2014",
      award:
        "Honored for being a poor but brilliant student by DBBL, IBBL, Babylon Group for achieving GPA: 5.00 (All Subjects)",
      link: "",
    },
    {
      year: "2008",
      award:
        "Merit Scholarship of Bangladesh Primary Level Scholarship Examination.",
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
