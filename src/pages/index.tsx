// Sections
import { HeaderSection, SkillsSection, FooterSection } from "@theartcode/sections";

// Styles 
import styles from './global.module.scss'

export const Home = () => {
  return (
    <div>
      <main>
        <SkillsSection />
        <FooterSection />
      </main>
    </div>
  );
}

export default Home