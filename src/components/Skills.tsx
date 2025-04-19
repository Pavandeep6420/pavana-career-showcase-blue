
import { Card } from "./ui/card";

export const Skills = () => {
  const skills = [
    { name: "HTML", level: "90%" },
    { name: "CSS", level: "85%" },
    { name: "JavaScript", level: "80%" },
    { name: "Python", level: "85%" },
    { name: "Java", level: "75%" },
    { name: "Django", level: "80%" },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <Card key={skill.name} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between mb-2">
                <span className="font-medium text-blue-800">{skill.name}</span>
                <span className="text-blue-600">{skill.level}</span>
              </div>
              <div className="w-full bg-blue-100 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
                  style={{ width: skill.level }}
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
