
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,hsla(221,45%,73%,1)_0%,hsla(220,78%,29%,1)_100%)] opacity-10"></div>
      <div className="max-w-4xl mx-auto text-center z-10 px-4">
        <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-600">
          Pavandeep Reddy
        </h1>
        <p className="text-xl text-blue-950 mb-8 max-w-2xl mx-auto">
          Aspiring Data Science professional dedicated to delivering excellence and growth through real-world experience
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button variant="outline" className="hover:scale-105 transition" asChild>
            <a href="https://github.com/Pavandeep6420" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
          <Button variant="outline" className="hover:scale-105 transition" asChild>
            <a href="https://www.linkedin.com/in/pavandeep-reddy-9631432b8/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </a>
          </Button>
          <Button variant="outline" className="hover:scale-105 transition" asChild>
            <a href="mailto:pavandeepreddy123@gmail.com">
              <Mail className="mr-2 h-4 w-4" />
              Email
            </a>
          </Button>
          <Button variant="outline" className="hover:scale-105 transition" asChild>
            <a href="tel:6309694746">
              <Phone className="mr-2 h-4 w-4" />
              Call
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};
