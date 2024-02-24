import { Inter } from "next/font/google";

// Components
import { HeaderCompact, HelloWord, Intro } from "@theartcode/components";

// Sections
import { HeaderSection } from "@theartcode/sections";

// Styles 
import styles from './global.module.scss'

const inter = Inter({ subsets: ["latin"] });

export const Home = () => {
  return (
    <main
      className={`flex flex-col ${inter.className} ${styles['home-page']}`}
    >
      <HeaderSection />
      <HelloWord />
    </main>
  );
}

export default Home