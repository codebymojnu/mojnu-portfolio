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
    <div className="">
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
