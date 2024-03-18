import AreaOfInterestSection from "./AreaOfInterest";
import EducationSection from "./EducationSection";
import FirstSection from "./FirstSection";
import HonorsAndAwardsSection from "./HonorsAndAwardSection";
import PersonalInformationSection from "./PersonalInformation";
import ReferencesSection from "./ReferencesSection";
import SkillsSection from "./SkillsSection";
import WorkExperienceSection from "./WorkExperienceSection";

export default function Home() {
  return (
    <div className="container mx-auto p-4 w-full md:max-w-4xl  m-2  md:p-8 border border-gray-300 rounded-lg shadow-md">
      <FirstSection />
      <AreaOfInterestSection />
      <EducationSection />
      <WorkExperienceSection />
      <SkillsSection />
      <HonorsAndAwardsSection />
      <PersonalInformationSection />
      <ReferencesSection />

      {/* Add other sections here */}
    </div>
  );
}
