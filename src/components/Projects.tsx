
import { Card } from "./ui/card";

export const Projects = () => {
  const projects = [
    {
      title: "QuizX",
      description: "QuizX Learning marked the beginning of a platform designed to empower minds and elevate excellence in the EdTech space. Features include two-step verification and user-friendly UI.",
      tech: ["Django", "Python"],
    },
    {
      title: "Travel and Tourism website",
      description: "Detailed information about various travel destinations, including attractions, activities, local culture, and travel tips.",
      tech: ["Django", "Python"],
    },
    {
      title: "HealthE-Connect",
      description: "HealthE-Connect appears to be a website focused on telehealth and online doctor consultations. Developed using Django.",
      tech: ["Django", "Python"],
    },
    {
      title: "Face Recognition System",
      description: "Designed a facial recognition-based authentication system for online exams. Utilized advanced Python libraries integrated with Django.",
      tech: ["Python", "Django", "OpenCV"],
    },
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-blue-800 mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
