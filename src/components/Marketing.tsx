import { BookOpen, Users, Target, GraduationCap, Building2, Globe2, BarChart, Award, ShoppingBag, TrendingUp, PieChart, Megaphone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ProgramGoal {
  icon: any;
  title: string;
  description: string;
}

const programGoals: ProgramGoal[] = [
  {
    icon: ShoppingBag,
    title: "Professional Excellence",
    description: "Encourage students to pursue marketing as a means of serving God, country, and self"
  },
  {
    icon: Award,
    title: "Christian Ethics",
    description: "Practice Christian principles of integrity and honesty in customer service"
  },
  {
    icon: Building2,
    title: "Versatile Application",
    description: "Prepare for roles in church, government, and private organizations"
  },
  {
    icon: BarChart,
    title: "Comprehensive Knowledge",
    description: "Master marketing, economics, management, and business fundamentals"
  },
  {
    icon: Target,
    title: "Success Skills",
    description: "Develop essential skills and methods for marketing excellence"
  }
];

const careerOpportunities = [
  {
    icon: Megaphone,
    title: "Marketing Manager",
    description: "Lead marketing strategies and campaigns"
  },
  {
    icon: TrendingUp,
    title: "Brand Manager",
    description: "Develop and manage brand strategies"
  },
  {
    icon: Globe2,
    title: "Digital Marketing",
    description: "Manage online marketing and social media"
  },
  {
    icon: PieChart,
    title: "Market Research",
    description: "Analyze market trends and consumer behavior"
  }
];

const keyFeatures = [
  {
    icon: BookOpen,
    title: "Global Perspective",
    description: "Internationally oriented marketing education"
  },
  {
    icon: Users,
    title: "Professional Network",
    description: "Connect with industry experts and peers"
  },
  {
    icon: Award,
    title: "Christian Values",
    description: "Integration of faith and business practice"
  },
  {
    icon: GraduationCap,
    title: "Career Ready",
    description: "Practical skills for immediate workplace impact"
  }
];

const Marketing = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-[#00BFFF]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#00BFFF]/80" />
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=80"
            alt="Marketing Program"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Bachelor of Commerce in Marketing
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Develop global marketing expertise in a rapidly evolving business landscape
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                className="bg-white text-[#00BFFF] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                onClick={() => {
                  navigate('/apply');
                  window.scrollTo(0, 0);
                }}
              >
                Apply Now
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {keyFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center space-x-4">
                <div className="bg-[#00BFFF]/10 p-3 rounded-lg">
                  <feature.icon className="w-6 h-6 text-[#00BFFF]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Content */}
          <div className="lg:col-span-2">
            {/* About Section */}
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Program Overview</h2>
              <div className="prose max-w-none text-gray-600">
                <p>
                  The Marketing major is a comprehensive, globally-oriented program designed to provide managerial orientation to marketing in a complex, rapidly changing global environment. Our program develops well-rounded marketing executives with sound working knowledge of activities involved in developing marketing programmes and strategy to achieve competitive advantages both locally and globally.
                </p>
                <p className="mt-4">
                  The program incorporates analysis of markets, planning, research, and project synthesis, giving students excellent tools and firm grounding in marketing management technicalities. We emphasize both global and ethical dimensions of marketing decisions.
                </p>
              </div>
            </div>

            {/* Program Goals */}
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Program Goals</h2>
              <div className="grid grid-cols-1 gap-6">
                {programGoals.map((goal, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-[#00BFFF]/10 p-3 rounded-lg mt-1">
                      <goal.icon className="w-5 h-5 text-[#00BFFF]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{goal.title}</h3>
                      <p className="text-sm text-gray-600">{goal.description}</p>
                    </div>
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {careerOpportunities.map((career, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-[#00BFFF]/10 p-3 rounded-lg mt-1">
                      <career.icon className="w-5 h-5 text-[#00BFFF]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{career.title}</h3>
                      <p className="text-sm text-gray-600">{career.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Why Choose Us */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Why Choose Our Program</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1">
                    <Globe2 className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Global Focus</h4>
                    <p className="text-sm text-gray-600">International marketing perspective and strategies</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1">
                    <Target className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Industry Relevance</h4>
                    <p className="text-sm text-gray-600">Current marketing trends and practices</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1">
                    <Users className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Professional Network</h4>
                    <p className="text-sm text-gray-600">Connect with industry leaders</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Values */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Our Values</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1">
                    <Award className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <p className="text-sm text-gray-600">Excellence in marketing education</p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1">
                    <Users className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <p className="text-sm text-gray-600">Transformation through learning</p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1">
                    <Target className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <p className="text-sm text-gray-600">Service through marketing leadership</p>
                </li>
              </ul>
            </div>

            {/* Call to Action */}
            <div className="bg-[#00BFFF] rounded-xl shadow-md p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="mb-6">Begin your journey in marketing at Daystar University.</p>
              <button
                className="w-full bg-white text-[#00BFFF] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                onClick={() => {
                  navigate('/apply');
                  window.scrollTo(0, 0);
                }}
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

export default Marketing;
