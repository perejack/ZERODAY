import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, Code, Globe, Laptop, Server, Users, ChevronRight, ChevronLeft, Terminal, Award, Heart, CheckCircle } from 'lucide-react';

const heroImages = [
  'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1623479322729-28b25c16b011?auto=format&fit=crop&w=1920&q=80'
];

const careerPaths = [
  { icon: Code, title: 'Software Development', description: 'Build robust applications and systems' },
  { icon: Globe, title: 'Web Development', description: 'Create modern web applications' },
  { icon: Terminal, title: 'DevOps', description: 'Manage deployment and operations' },
  { icon: Server, title: 'Cloud Engineering', description: 'Build cloud infrastructure' },
  { icon: Laptop, title: 'UI/UX Design', description: 'Create intuitive interfaces' },
  { icon: Brain, title: 'AI & Machine Learning', description: 'Develop intelligent systems' },
  { icon: Users, title: 'Cybersecurity', description: 'Protect systems and data' }
];

const ComputerScience = () => {
  const navigate = useNavigate();
  const [activeTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Image Carousel */}
      <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50" />
          </div>
        ))}
        <button
          onClick={prevImage}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full z-10 touch-manipulation"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full z-10 touch-manipulation"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center text-white px-4 max-w-5xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Bachelor of Science in<br />Applied Computer Science
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto">
              Shape the future through technology and innovation
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <button
                onClick={() => {
                  navigate('/apply');
                  window.scrollTo(0, 0);
                }}
                className="w-full sm:w-auto bg-[#00BFFF] text-white px-6 sm:px-8 py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-[#0099CC] transition-colors duration-300 touch-manipulation"
              >
                Apply Now
              </button>
              <a
                href="#learn-more"
                className="w-full sm:w-auto inline-block border-2 border-white text-white px-6 sm:px-8 py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-white/10 transition-colors duration-300 touch-manipulation"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            {activeTab === 'overview' && (
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Program Overview</h2>
                <div className="prose prose-sm sm:prose-base max-w-none">
                  <p className="text-gray-600">
                    Our BSc in Applied Computer Science program equips you with the skills and knowledge needed to excel in the rapidly evolving tech industry. Through a combination of theoretical understanding and practical application, you'll be prepared for a successful career in software development, cybersecurity, AI, and more.
                  </p>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 mb-4">Career Opportunities</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  {careerPaths.map((career, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow active:shadow-md">
                      <career.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#00BFFF] mb-3 sm:mb-4" />
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">{career.title}</h3>
                      <p className="text-sm sm:text-base text-gray-600">{career.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white rounded-xl shadow-md p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Why Choose Us?</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-[#00BFFF]/10 p-2 sm:p-3 rounded-lg">
                    <Award className="w-4 h-4 sm:w-5 sm:h-5 text-[#00BFFF]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm sm:text-base">Excellence</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Commitment to academic excellence</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-[#00BFFF]/10 p-2 sm:p-3 rounded-lg">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#00BFFF]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm sm:text-base">Transformation</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Holistic student development</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-[#00BFFF]/10 p-2 sm:p-3 rounded-lg">
                    <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-[#00BFFF]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm sm:text-base">Servant Leadership</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Ethical and service-oriented approach</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Student Club */}
            <div className="bg-white rounded-xl shadow-md p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">DITA Club</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                Join Daystar Information Technology Association (DITA) to enhance your skills through:
              </p>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#00BFFF] mr-2 sm:mr-3 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-600">Innovation projects</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#00BFFF] mr-2 sm:mr-3 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-600">Mentorship programs</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#00BFFF] mr-2 sm:mr-3 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-600">Networking events</span>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-[#00BFFF] to-[#0099CC] rounded-xl shadow-md p-4 sm:p-6 text-white">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Ready to Get Started?</h3>
              <p className="text-sm sm:text-base mb-4 sm:mb-6">
                Take the first step towards your future in technology. Apply now to join our program.
              </p>
              <button 
                onClick={() => {
                  navigate('/apply');
                  window.scrollTo(0, 0);
                }}
                className="w-full bg-white text-[#00BFFF] px-4 sm:px-6 py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-gray-100 transition-colors duration-300 touch-manipulation"
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

export default ComputerScience;
