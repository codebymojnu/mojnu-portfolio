export default function HonorsAndAwardsSection() {
  const honorsAndAwards = [
    {
      year: "2018, 19",
      award:
        "Awarded the MMJF Scholarship in 2018 & CZM Scholarship in 2019 for admission to a public university as an underprivileged student.",
    },
    {
      year: "2017",
      award:
        "Featured in The Daily Ittefaq, Jugantor, and Daily Naya Diganta for gaining admission to university as an underprivileged student. (13, 14, 17 December, 2017)",
    },
    {
      year: "2015",
      award:
        "Babylon Kathokata (10th Edition) Published a Story: (Our Shadows Will Become People) 2015, detailing my personal journey and overcoming challenges. Page No. 14",
    },
    {
      year: "2014",
      award:
        "Featured on Jugantor, and Uttor Bangla newspaper for great academic performance despite initial challenges. (21 May, 2014)",
    },
    {
      year: "2014",
      award:
        "Honored for being a poor but brilliant student by DBBL, IBBL, Babylon Group for achieving GPA: 5.00 (All Subjects)",
    },
    {
      year: "2008",
      award:
        "Merit Scholarship of Bangladesh Primary Level Scholarship Examination.",
    },
    // Add more honors and awards entries as needed
  ];

  return (
    <section className="py-8 bg-gray-100">
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
