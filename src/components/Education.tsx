
import { Card } from "./ui/card";

export const Education = () => {
  return (
    <div className="py-20 bg-blue-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Education</h2>
        <div className="space-y-8">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-blue-800">B.Tech in Data Science</h3>
            <p className="text-gray-600">Mallareddy University, Maisammaguda, Telangana</p>
            <p className="text-blue-600 font-medium mt-2">
              SGPA: 8.82 (1st Sem), 9.52 (2nd Sem) | Overall CGPA: 9.0
            </p>
            <p className="text-gray-500 mt-1">Ongoing</p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-blue-800">Intermediate (10+2)</h3>
            <p className="text-gray-600">Sri Chaitanya junior college, Madinaguda, Telangana</p>
            <p className="text-blue-600 font-medium mt-2">Marks: 900 (Board Exams)</p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-blue-800">10th Grade</h3>
            <p className="text-gray-600">Triveni School, Madinaguda, Telangana</p>
            <p className="text-blue-600 font-medium mt-2">GPA: 10/10</p>
          </Card>
        </div>
      </div>
    </div>
  );
};
