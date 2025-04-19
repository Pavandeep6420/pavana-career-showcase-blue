
import { Hero } from "@/components/Hero";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Hobbies } from "@/components/Hobbies";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Education />
      <Skills />
      <Projects />
      <Hobbies />
    </div>
  );
};

export default Index;
