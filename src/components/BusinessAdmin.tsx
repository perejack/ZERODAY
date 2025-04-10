import { Users, Target, GraduationCap, Building2, Globe2, BarChart, Award, Briefcase, BookOpen, HandHeart, Brain, BarChart2, UserCheck, FileSpreadsheet } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ProgramGoal {
  icon: any;
  title: string;
  description: string;
}

const programGoals: ProgramGoal[] = [
  {
    icon: HandHeart,
    title: "Christian Service",
    description: "Business as a means of serving God and society"
  },
  {
    icon: Brain,
    title: "Business Fundamentals",
    description: "Master core business administration concepts"
  },
  {
    icon: BarChart2,
    title: "Professional Skills",
    description: "Develop practical business management abilities"
  },
  {
    icon: UserCheck,
    title: "Ethical Leadership",
    description: "Practice integrity in business and ministry"
  },
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    description: "Preparation for advanced business studies"
  }
];

const careerOpportunities = [
  {
    icon: Briefcase,
    title: "Business Manager",
    description: "Lead organizational operations"
  },
  {
    icon: FileSpreadsheet,
    title: "Business Analyst",
    description: "Optimize business processes"
  },
  {
    icon: Users,
    title: "HR Manager",
    description: "Direct human resources"
  },
  {
    icon: BarChart,
    title: "Management Consultant",
    description: "Advise on business strategy"
  }
];

const keyFeatures = [
  {
    icon: Globe2,
    title: "Holistic Education",
    description: "Theology and business fusion"
  },
  {
    icon: BookOpen,
    title: "African Heritage",
    description: "Cultural business context"
  },
  {
    icon: Target,
    title: "Christian Values",
    description: "Faith-based business approach"
  },
  {
    icon: Building2,
    title: "Professional Growth",
    description: "Career-ready management skills"
  }
];

const BusinessAdmin = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[300px] sm:h-[400px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80"
            alt="Business Administration and Management"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg">
              Bachelor of Arts in Business Administration & Management
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white mb-6 sm:mb-8 drop-shadow-lg">
              Develop into a Christian business leader with integrity and excellence
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

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 sm:-mt-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {keyFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1">
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#00BFFF]" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            {/* About Section */}
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Program Overview</h2>
              <div className="prose max-w-none text-gray-600">
                <p>
                  Our Business Administration and Management program is designed to develop mature professionals who maintain the right relationship with God and those around them. We nurture individuals who understand their potential and can utilize their talents to serve humanity while maintaining high performance standards.
                </p>
                <p className="mt-4">
                  Through a unique blend of business education and theological studies, students develop a worldview based on Christian principles and values. The program incorporates communication and natural science courses, enabling students to understand African cultural heritage while developing essential attributes such as diligence, dependability, integrity, and faithfulness.
                </p>
                <p className="mt-4">
                  Graduates emerge as well-rounded executives in management and other professional fields, equipped with both technical expertise and strong ethical foundations. The program prepares students for leadership roles in various sectors, including church organizations, government, and private business.
                </p>
              </div>
            </div>

            {/* Program Goals */}
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Program Goals</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {programGoals.map((goal, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow">
                    <goal.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#00BFFF] mb-3 sm:mb-4" />
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">{goal.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600">{goal.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Entry Requirements */}
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Entry Requirements</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Award className="w-5 h-5 text-[#00BFFF] mt-1" />
                  <p className="text-gray-600">Overall minimum grade of C+ in KCSE or equivalent</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Award className="w-5 h-5 text-[#00BFFF] mt-1" />
                  <p className="text-gray-600">At least a Grade C (plain) in Mathematics</p>
                </div>
              </div>
            </div>

            {/* Career Opportunities */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Career Opportunities</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {careerOpportunities.map((career, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow">
                    <career.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#00BFFF] mb-3 sm:mb-4" />
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">{career.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600">{career.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4 sm:space-y-6">
            {/* Why Choose Us */}
            <div className="bg-white rounded-xl shadow-md p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Why Choose Our Program</h3>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1 flex-shrink-0">
                    <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-[#00BFFF]" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-medium text-gray-900">Comprehensive Education</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Business and spiritual growth</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1 flex-shrink-0">
                    <Globe2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#00BFFF]" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-medium text-gray-900">Cultural Integration</h4>
                    <p className="text-xs sm:text-sm text-gray-600">African business context</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1 flex-shrink-0">
                    <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-[#00BFFF]" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-medium text-gray-900">Career Growth</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Advanced degree preparation</p>
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
                    <Award className="w-4 h-4 sm:w-5 sm:h-5 text-[#00BFFF]" />
                  </div>
                  <p className="text-sm sm:text-base text-gray-600">Excellence in education</p>
                </li>
                <li className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1 flex-shrink-0">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#00BFFF]" />
                  </div>
                  <p className="text-sm sm:text-base text-gray-600">Transformation through learning</p>
                </li>
                <li className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1 flex-shrink-0">
                    <Target className="w-4 h-4 sm:w-5 sm:h-5 text-[#00BFFF]" />
                  </div>
                  <p className="text-sm sm:text-base text-gray-600">Development of servant leaders</p>
                </li>
              </ul>
            </div>

            {/* Call to Action */}
            <div className="bg-[#00BFFF] rounded-xl shadow-md p-4 sm:p-6 text-white">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Ready to Get Started?</h3>
              <p className="text-sm sm:text-base mb-4 sm:mb-6">Begin your journey in business leadership at Daystar University.</p>
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

export default BusinessAdmin;
