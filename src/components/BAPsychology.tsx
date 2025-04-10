import { Users, Award, Brain, Target, Heart, Book, Sparkles, Globe, HandHeart, Lightbulb } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const programGoals = [
  {
    icon: Brain,
    title: "Human Behavior",
    description: "Understanding behavioral principles"
  },
  {
    icon: Heart,
    title: "Personal Growth",
    description: "Self-development and maturity"
  },
  {
    icon: HandHeart,
    title: "Christian Integration",
    description: "Faith and psychology"
  },
  {
    icon: Globe,
    title: "Cultural Integration",
    description: "African traditional perspectives"
  }
];

const learningOutcomes = [
  {
    title: "Psychological Analysis",
    description: "Tools for behavior evaluation"
  },
  {
    title: "Professional Development",
    description: "Graduate-level preparation"
  },
  {
    title: "Spiritual Integration",
    description: "Christian psychology practice"
  },
  {
    title: "Cultural Competence",
    description: "African context integration"
  },
  {
    title: "Research Skills",
    description: "Data collection and analysis"
  },
  {
    title: "Clinical Practice",
    description: "Counseling techniques"
  }
];

const BAPsychology = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[300px] sm:h-[400px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1920&q=80"
            alt="Psychology Program"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg">
              Bachelor of Arts in Psychology and Counselling
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white mb-6 sm:mb-8 drop-shadow-lg">
              Transform lives through understanding human behavior and promoting growth
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <button 
                onClick={() => {
                  navigate('/apply');
                  window.scrollTo(0, 0);
                }}
                className="w-full sm:w-auto bg-white text-[#00BFFF] px-6 sm:px-8 py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-gray-100 transition-colors touch-manipulation"
              >
                Apply Now
              </button>
              <button className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-white/10 transition-colors touch-manipulation">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Program Goals Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 sm:-mt-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {programGoals.map((goal, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="bg-[#00BFFF]/10 p-2 sm:p-3 rounded-lg">
                  <goal.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#00BFFF]" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900">{goal.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600">{goal.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            {/* About Section */}
            <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Program Overview</h2>
              <div className="prose prose-sm sm:prose lg:prose-lg max-w-none text-gray-600">
                <p>Our BA in Psychology and Counselling program equips students with a deep understanding of human behavior, mental processes, and therapeutic techniques. Through a Christian perspective, students learn to address psychological challenges and promote mental well-being.</p>
              </div>
            </div>

            {/* Learning Outcomes */}
            <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Learning Outcomes</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {learningOutcomes.map((outcome, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1 flex-shrink-0">
                        <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-[#00BFFF]" />
                      </div>
                      <div>
                        <h3 className="text-sm sm:text-base font-semibold text-gray-900">{outcome.title}</h3>
                        <p className="text-xs sm:text-sm text-gray-600">{outcome.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4 sm:space-y-6">
            {/* Entry Requirements */}
            <div className="bg-white rounded-xl shadow-md p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Entry Requirements</h3>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1 flex-shrink-0">
                    <Award className="w-4 h-4 sm:w-5 sm:h-5 text-[#00BFFF]" />
                  </div>
                  <div>
                    <p className="text-sm sm:text-base text-gray-600">Overall minimum grade of C+ in KCSE</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1 flex-shrink-0">
                    <Award className="w-4 h-4 sm:w-5 sm:h-5 text-[#00BFFF]" />
                  </div>
                  <div>
                    <p className="text-sm sm:text-base text-gray-600">At least 4 credits in IGCSE with 2 credit passes at 'A' level/GCE</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1 flex-shrink-0">
                    <Book className="w-4 h-4 sm:w-5 sm:h-5 text-[#00BFFF]" />
                  </div>
                  <div>
                    <p className="text-sm sm:text-base text-gray-600">Grade C+ (plus) in English</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Values */}
            <div className="bg-white rounded-xl shadow-md p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Our Values</h3>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1 flex-shrink-0">
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#00BFFF]" />
                  </div>
                  <p className="text-sm sm:text-base text-gray-600">Excellence in education</p>
                </li>
                <li className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1 flex-shrink-0">
                    <Target className="w-4 h-4 sm:w-5 sm:h-5 text-[#00BFFF]" />
                  </div>
                  <p className="text-sm sm:text-base text-gray-600">Transformation through learning</p>
                </li>
                <li className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1 flex-shrink-0">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#00BFFF]" />
                  </div>
                  <p className="text-sm sm:text-base text-gray-600">Servant Leadership development</p>
                </li>
              </ul>
            </div>

            {/* Call to Action */}
            <div className="bg-[#00BFFF] rounded-xl shadow-md p-4 sm:p-6 text-white">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Ready to Get Started?</h3>
              <p className="text-sm sm:text-base mb-4 sm:mb-6">Begin your journey in psychology at Daystar University.</p>
              <button 
                onClick={() => {
                  navigate('/apply');
                  window.scrollTo(0, 0);
                }}
                className="w-full bg-white text-[#00BFFF] px-4 sm:px-6 py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-gray-100 transition-colors touch-manipulation"
              >
                Start Application
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BAPsychology;
