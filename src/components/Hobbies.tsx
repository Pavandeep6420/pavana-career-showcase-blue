
import { Card } from "./ui/card";
import { Heart } from "lucide-react";

export const Hobbies = () => {
  const hobbies = [
    "Learning programming",
    "Playing badminton",
    "Exploring new ideas",
    "Enhancing skills",
    "Practical projects",
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Hobbies & Interests</h2>
        <Card className="p-8 hover:shadow-lg transition-shadow">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {hobbies.map((hobby) => (
              <div
                key={hobby}
                className="flex items-center space-x-2 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <Heart className="h-5 w-5 text-blue-600" />
                <span className="text-blue-800">{hobby}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};
