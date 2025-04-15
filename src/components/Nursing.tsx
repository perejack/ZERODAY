import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Stethoscope, Heart, ChevronRight, ChevronLeft, GraduationCap, Users, Building2, Baby, UserPlus, Clipboard } from 'lucide-react';

const heroImages = [
  'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1920&q=80'
];

const departments = [
  {
    icon: Building2,
    title: 'Medical-Surgical Nursing',
    description: 'Foundational courses for professional nursing and midwifery practice'
  },
  {
    icon: Baby,
    title: 'Midwifery & Reproductive Health',
    description: 'Advanced competency in midwifery and reproductive health nursing'
  },
  {
    icon: UserPlus,
    title: 'Community Health Nursing',
    description: 'Leadership in public health nursing and preventive care'
  },
  {
    icon: GraduationCap,
    title: 'Education & Research',
    description: 'Preparing future educators, leaders, and researchers'
  }
];

const nursingPrograms = [
  { name: 'BSc. Nursing', path: '/bsc-nursing' },
  { name: 'BSc. Nursing Upgrading', path: '/bsc-nursing-upgrading' },
  { name: 'MSc. Nursing Education', path: '/new-msc-nursing-education' }
];

const Nursing = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');
  const navigate = useNavigate();

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
      {/* Hero Section */}
      <div className="relative h-[400px] sm:h-[500px] md:h-[600px]">
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
              Welcome to<br />School of Nursing
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto">
              Providing Christ-focused and patient-centered nursing education since 2020
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <button
                onClick={() => {
                  navigate('/apply');
                  window.scrollTo(0, 0);
                }}
                className="w-full sm:w-auto bg-[#00BFFF] text-white px-6 sm:px-8 py-3 rounded-lg text-sm sm:text-lg font-semibold hover:bg-[#0099CC] transition-colors duration-300 touch-manipulation"
              >
                Apply Now
              </button>
              <a
                href="#programs"
                className="w-full sm:w-auto bg-white/20 backdrop-blur-sm text-white px-6 sm:px-8 py-3 rounded-lg text-sm sm:text-lg font-semibold hover:bg-white/30 transition-colors duration-300 touch-manipulation"
              >
                Explore Programs
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Departments Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 sm:-mt-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {departments.map((dept, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="bg-[#00BFFF]/10 p-2 sm:p-3 rounded-lg">
                  <dept.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#00BFFF]" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900">{dept.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600">{dept.description}</p>
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
          <div className="lg:col-span-2 space-y-6">
            {/* Tabs */}
            <div className="bg-white rounded-xl shadow-md p-4 sm:p-6">
              <div className="flex flex-wrap gap-2 sm:gap-4 mb-6">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`px-4 py-2 rounded-lg text-sm sm:text-base font-medium transition-colors touch-manipulation ${
                    activeTab === 'overview'
                      ? 'bg-[#00BFFF] text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('programs')}
                  className={`px-4 py-2 rounded-lg text-sm sm:text-base font-medium transition-colors touch-manipulation ${
                    activeTab === 'programs'
                      ? 'bg-[#00BFFF] text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  Programs
                </button>
                <button
                  onClick={() => setActiveTab('dean')}
                  className={`px-4 py-2 rounded-lg text-sm sm:text-base font-medium transition-colors touch-manipulation ${
                    activeTab === 'dean'
                      ? 'bg-[#00BFFF] text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  Dean's Message
                </button>
              </div>

              {/* Tab Content */}
              {activeTab === 'overview' && (
                <div className="prose prose-sm sm:prose lg:prose-lg max-w-none">
                  <p className="text-gray-600">
                    The School of Nursing at Daystar University is committed to developing competent, compassionate nursing professionals who integrate Christian values with evidence-based practice. Our programs combine rigorous academic training with extensive clinical experience.
                  </p>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-6 mb-4">Key Features</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>Christ-centered approach to healthcare</li>
                    <li>State-of-the-art simulation laboratories</li>
                    <li>Experienced faculty with clinical expertise</li>
                    <li>Partnerships with leading healthcare facilities</li>
                    <li>Focus on evidence-based practice</li>
                    <li>Strong emphasis on clinical skills</li>
                  </ul>
                </div>
              )}

              {activeTab === 'programs' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {nursingPrograms.map((program, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow"
                    >
                      <div className="flex items-start space-x-3 sm:space-x-4">
                        <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1 flex-shrink-0">
                          <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-[#00BFFF]" />
                        </div>
                        <div>
                          <h3 className="text-sm sm:text-base font-semibold text-gray-900">{program.name}</h3>
                          <button
                            onClick={() => navigate(program.path)}
                            className="text-xs sm:text-sm text-[#00BFFF] hover:text-[#0099CC] mt-1 touch-manipulation"
                          >
                            Learn more →
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'dean' && (
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                      <Users className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400" />
                    </div>
                    <div className="text-center sm:text-left">
                      <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Dr. Susan Njuguna</h2>
                      <p className="text-sm sm:text-base text-gray-600">Dean, School of Nursing</p>
                    </div>
                  </div>
                  <div className="prose prose-sm sm:prose lg:prose-lg max-w-none text-gray-600">
                    <p className="mb-4">
                      The School of Nursing was established in 2020, and seeks to provide Christ-focused and patient-centered Nursing Education, to develop individuals to be competent Nurse Professionals for health systems and display excellence of servant leaders.
                    </p>
                    <p>
                      The student will learn through close interaction with qualified faculty who model Christian professional attitude and skills integrated into the teaching and learning experience. The students are required to have clinical teaching and learning from accredited public and private health institutions that link them to the industry.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white rounded-xl shadow-md p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Why Choose Us?</h3>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1 flex-shrink-0">
                    <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-[#00BFFF]" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-medium text-gray-900">Patient-Centered</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Focus on compassionate, quality care</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1 flex-shrink-0">
                    <Stethoscope className="w-4 h-4 sm:w-5 sm:h-5 text-[#00BFFF]" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-medium text-gray-900">Clinical Excellence</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Hands-on training at leading institutions</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1 flex-shrink-0">
                    <Clipboard className="w-4 h-4 sm:w-5 sm:h-5 text-[#00BFFF]" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-medium text-gray-900">Modern Facilities</h4>
                    <p className="text-xs sm:text-sm text-gray-600">State-of-the-art learning environment</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#00BFFF] to-[#0099CC] rounded-xl shadow-md p-4 sm:p-6 text-white">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Ready to Get Started?</h3>
              <p className="text-sm sm:text-base mb-4 sm:mb-6 text-white/90">Join our Christ-centered nursing program and make a difference in healthcare.</p>
              <button 
                onClick={() => {
                  navigate('/apply');
                  window.scrollTo(0, 0);
                }}
                className="w-full bg-white text-[#00BFFF] px-4 sm:px-6 py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-white/90 transition-colors duration-300 touch-manipulation"
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

export default Nursing;
