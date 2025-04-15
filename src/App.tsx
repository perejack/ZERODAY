import { useState, useEffect } from 'react';
import { scrollToTop } from './utils/scrollUtils';
import ApplicationForm from './components/ApplicationForm';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Menu, X, Search, Globe, ChevronDown, Play, Download, MessageCircle, GraduationCap, BookOpen, ScrollText, Award, AlignCenterVertical as Certificate, ArrowLeft, ArrowRight, Calendar, ChevronRight, Phone } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import Programs from './components/Programs';
import LawProgram from './components/LawProgram';
import ComputerScience from './components/ComputerScience';
import EnvironmentalHealth from './components/EnvironmentalHealth';
import ActuarialScience from './components/ActuarialScience';
import BiomedicalScience from './components/BiomedicalScience';
import Nursing from './components/Nursing';
import MscNursingEducation from './components/MscNursingEducation';
import CertificateICT from './components/CertificateICT';
import CertificatePeace from './components/CertificatePeace';
import CertificateCounseling from './components/CertificateCounseling';
import CertificateMedia from './components/CertificateMedia';
import CertificateBusiness from './components/CertificateBusiness';
import CertificateMusic from './components/CertificateMusic';
import CertificateCommunity from './components/CertificateCommunity';
import ACCA from './components/ACCA';
import CIPS from './components/CIPS';
import CPA from './components/CPA';
import CIFA from './components/CIFA';
import CS from './components/CS';
import CAMS from './components/CAMS';
import ATD from './components/ATD';
import DisabilityStudies from './components/DisabilityStudies';
import CIM from './components/CIM';
import BusinessLogistics from './components/BusinessLogistics';
import Accounting from './components/Accounting';
import Marketing from './components/Marketing';
import ManagementInfo from './components/ManagementInfo';
import BusinessAdmin from './components/BusinessAdmin';
import Economics from './components/Economics';
import Mba from './components/Mba';
import MscEconomics from './components/MscEconomics';
import PhdBusiness from './components/PhdBusiness';
import PeaceConflict from './components/PeaceConflict';
import Theology from './components/Theology';
import BEdScience from './components/BEdScience';
import BEdArts from './components/BEdArts';
import MAChristianMinistries from './components/MAChristianMinistries';
import MADiplomacy from './components/MADiplomacy';
import PGDE from './components/PGDE';
import DipCounselling from './components/DipCounselling';
import DipCommunityDev from './components/DipCommunityDev';
import DipAgriculture from './components/DipAgriculture';
import BAPsychology from './components/BAPsychology';
import BASocialWork from './components/BASocialWork';
import BAMonitoringEval from './components/BAMonitoringEval';
import MACounsellingPsych from './components/MACounsellingPsych';
import MAMonitoringEval from './components/MAMonitoringEval';
import MAChildDev from './components/MAChildDev';
import MAClinicalPsych from './components/MAClinicalPsych';
import MACommunityDev from './components/MACommunityDev';
import PGDChildDev from './components/PGDChildDev';
import PhDClinicalPsych from './components/PhDClinicalPsych';
import PhDDevStudies from './components/PhDDevStudies';
import Admissions from './components/Admissions';
import Applicants from './components/Applicants';
import WhatsAppButton from './components/WhatsAppButton';
import Contact from './components/Contact';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function App() {
  // Scroll to top on route change
  const { pathname } = useLocation();
  useEffect(() => {
    scrollToTop();
  }, [pathname]);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true });
  const [activePostIndex, setActivePostIndex] = useState(0);

  const navigationItems = ['Programs', 'Admissions', 'About'];
  const phoneNumber = '+254755295635';
  const programCategories = [
    {
      name: 'PhD',
      path: '/programs',
      description: 'Doctoral Programs',
      icon: GraduationCap
    },
    {
      name: 'Masters',
      path: '/programs',
      description: 'Masters Programs',
      icon: BookOpen
    },
    {
      name: 'Bachelors',
      path: '/programs',
      description: 'Undergraduate Programs',
      icon: ScrollText
    },
    {
      name: 'Diploma',
      path: '/programs',
      description: 'Diploma Programs',
      icon: Award
    },
    {
      name: 'Certificate',
      path: '/programs#certificate',
      description: 'Certificate Programs',
      icon: Certificate
    }
  ];
  
  const featuredPosts = [
    {
      id: 1,
      title: "Vice Chancellor meets with Congolese students following conflict in DRC",
      date: "FEB 10, 2025",
      category: "BLOG",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Daystar University poised to develop a new Strategic Plan 2025-2030",
      date: "FEB 3, 2025",
      category: "BLOG",
      image: "https://images.unsplash.com/photo-1557425955-df376b5903c8?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Internal Quality Auditors receive certificates as Daystar University prepares for ISO 9001:2015 certification",
      date: "JAN 23, 2025",
      category: "BLOG",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const academicPrograms = [
    {
      name: 'PhD Programs',
      description: 'Discover our wide range of programs designed to meet your academic goals.',
      icon: GraduationCap,
      image: 'https://www.daystar.ac.ke/blog/uploads/1700821188_PhD%20Dev.jpg',
      path: '/programs#phd'
    },
    {
      name: 'Masters Programs',
      description: 'Discover our wide range of programs designed to meet your academic goals.',
      icon: BookOpen,
      image: 'https://www.daystar.ac.ke/blog/uploads/1729056159_vc-book-launch.jpg',
      path: '/programs#masters'
    },
    {
      name: 'Bachelor Programs',
      description: 'Discover our wide range of programs designed to meet your academic goals.',
      icon: ScrollText,
      image: 'https://www.daystar.ac.ke/blog/uploads/1700734574_graduationceremony.jpg',
      path: '/programs#bachelors'
    },
    {
      name: 'Diploma Courses',
      description: 'Discover our wide range of programs designed to meet your academic goals.',
      icon: Award,
      image: 'https://image.free-apply.com/gallery/l/uni/gallery/lg/1040400076/f40c8749ade284c139cf2c7333e6c6b405a19f5d.jpg?s=640',
      path: '/programs#diploma'
    },
    {
      name: 'Certificate Programs',
      description: 'Discover our wide range of programs designed to meet your academic goals.',
      icon: Certificate,
      image: 'https://www.daystar.ac.ke/blog/uploads/1683439941_IMG_9902.JPG',
      path: '/programs#certificate'
    }
  ];

  const handlePrevPost = () => {
    setActivePostIndex((prev) => (prev > 0 ? prev - 1 : featuredPosts.length - 1));
  };

  const handleNextPost = () => {
    setActivePostIndex((prev) => (prev < featuredPosts.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ScrollToTop />
      {/* Sticky Navigation */}
      <header className="sticky top-0 z-50 bg-white border-b">
        <nav className="mx-auto flex items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <Link to="/" className="-m-1.5 p-1.5">
              <img className="h-8 w-auto" src="https://www.daystar.ac.ke/images/logo.png" alt="Daystar Logo" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item}
                to={item === 'About' ? '/' : item.toLowerCase()}
                className="text-gray-700 hover:text-[#00BFFF] transition-colors"
                onClick={() => window.scrollTo(0, 0)}
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Always visible contact and apply buttons */}
          <div className="flex items-center gap-2">
            <a 
              href="tel:+254755295635" 
              className="text-gray-700 hover:text-[#00BFFF] transition-colors flex items-center gap-1"
            >
              <Phone className="w-4 h-4" />
              <span>{phoneNumber}</span>
            </a>
            <Link
              to="/apply"
              onClick={() => {
                scrollToTop();
                setTimeout(() => {
                  setIsMenuOpen(false);
                }, 100);
              }}
              className="bg-[#00BFFF] text-white px-3 py-1 text-sm rounded-md hover:bg-[#33CCFF] transition-all duration-300 whitespace-nowrap"
            >
              Apply
            </Link>
            {/* Hamburger for navigation items */}
            <button
              type="button"
              className="md:hidden -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-white pt-16">
          <div className="px-4 py-2 space-y-4">
            <div className="space-y-2 py-6">
              {navigationItems.map((item) => (
                <Link
                  key={item}
                  to={item.toLowerCase()}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
      <Routes>
        <Route path="/" element={
          <>
            {/* Hero Section */}
            <section className="pt-16">
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination]}
                className="h-[600px] w-full"
              >
                {[
                  'https://www.daystar.ac.ke/academic-affairs/assets/images/slider-1.jpg',
                  'https://www.daystar.ac.ke/academic-affairs/assets/images/slider-2.jpg',
                  'https://www.daystar.ac.ke/academic-affairs/assets/images/slider-3.jpg',
                ].map((image, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className="relative h-full w-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${image})` }}
                    >
                      <div className="absolute inset-0 bg-black bg-opacity-50" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white px-4">
                          <h1 className="text-4xl md:text-6xl font-bold mb-4">
                            Shape Your Future at Daystar University
                          </h1>
                          <p className="text-xl md:text-2xl mb-8">May 2025 Intake Now Open</p>
                          <button 
                            onClick={() => {
                              navigate('/apply');
                              window.scrollTo(0, 0);
                            }}
                            className="bg-[#00BFFF] text-white px-8 py-3 rounded-full text-lg hover:bg-[#0099CC] transition-colors"
                          >
                            Start Application
                          </button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
                <div className="h-32"></div> {/* Spacer to move content lower */}
                <div className="text-center mb-6 bg-gradient-to-r from-[#00BFFF]/10 via-white to-[#00BFFF]/10 rounded-lg p-4 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Explore Our Academic Programs</h2>
                  <div className="flex items-center justify-center gap-2 text-[#00BFFF] animate-pulse">
                    <MessageCircle size={20} />
                    <p className="text-sm font-medium">Click on any category below to view programs and apply</p>
                  </div>
                </div>
                <div className="bg-white rounded-2xl shadow-xl p-8 grid grid-cols-2 md:grid-cols-5 gap-6">
                  {programCategories.map((category) => (
                    <Link
                      key={category.name}
                      to={category.path}
                      onClick={() => scrollToTop()}
                      className="group relative overflow-hidden bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg hover:border-[#00BFFF] transition-all duration-300 flex flex-col items-center justify-center space-y-3"
                    >
                      <div className="w-12 h-12 rounded-full bg-[#00BFFF]/10 flex items-center justify-center group-hover:bg-[#00BFFF] transition-colors duration-300">
                        {category.icon && <category.icon className="w-6 h-6 text-[#00BFFF] group-hover:text-white transition-colors duration-300" />}
                      </div>
                      <span className="text-lg font-semibold text-gray-800 group-hover:text-[#00BFFF] transition-colors duration-300">
                        {category.name}
                      </span>
                      <span className="text-sm text-gray-500 text-center">
                        {category.description}
                      </span>
                      <div className="absolute bottom-0 left-0 h-1 bg-[#00BFFF] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 w-full" />
                    </Link>
                  ))}
                </div>
              </div>
            </section>

            {/* About Us Section */}
            <section className="py-20 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div className="relative">
                    <img
                      src="https://www.daystar.ac.ke/blog/uploads/1704455283_du-athi-main.jpeg"
                      alt="Daystar University Campus"
                      className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                    />
                    <div className="absolute inset-0 bg-[#00BFFF] opacity-10 rounded-lg"></div>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-6">About Daystar University</h2>
                    <p className="text-lg text-gray-600 mb-8">
                      Daystar University is a Christ-centred non-denominational institution of higher learning which exists to equip Christian servant leaders for the transformation of church and society. Founded in Bulawayo, Zimbabwe, as Daystar Publications in 1964, the institution was moved to Kenya in 1971 and registered as Daystar Communications, a non-profit organization in 1973 offering a five-week International Institute for Christian Communication (IICC) course.
                    </p>
                    <button className="bg-[#00BFFF] text-white px-6 py-3 rounded-full hover:bg-[#0099CC] transition-colors">
                      Learn More About Us
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Key Features Section */}
            <section className="py-20 bg-white" ref={statsRef}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  {[
                    { value: 30, label: 'Nationalities' },
                    { value: 7000, label: 'Enrolled Students' },
                    { value: 8, label: 'Academic Schools' },
                    { value: 500, label: 'International Students' },
                  ].map((stat, index) => (
                    <div key={index} className="p-6 bg-gray-50 rounded-lg shadow-sm">
                      <div className="text-3xl font-bold text-[#00BFFF] mb-2">
                        {statsInView && (
                          <CountUp end={stat.value} suffix={stat.value === 30 ? '+' : '+'} duration={2.5} />
                        )}
                      </div>
                      <div className="text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Academic Programs */}
            <section className="py-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-12">Academic Programs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {academicPrograms.map((program, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                      <div className="relative h-48">
                        <img
                          src={program.image}
                          alt={program.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-30"></div>
                        <div className="absolute top-4 left-4">
                          <div className="bg-white p-2 rounded-lg">
                            <program.icon className="h-6 w-6 text-[#00BFFF]" />
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">{program.name}</h3>
                        <p className="text-gray-600 mb-4">{program.description}</p>
                        <Link
                          to={program.path}
                          className="inline-flex items-center justify-center w-full px-4 py-2 bg-[#00BFFF] text-white rounded-lg hover:bg-[#0099CC] transition-colors duration-300"
                        >
                          Learn More <ChevronRight className="ml-2 h-5 w-5" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Featured Posts Section */}
            <section className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center mb-12">
                  <h2 className="text-4xl font-bold text-[#00BFFF]">Featured Posts</h2>
                  <div className="flex items-center space-x-4">
                    <button 
                      onClick={handlePrevPost}
                      className="p-2 rounded-full border-2 border-[#00BFFF] text-[#00BFFF] hover:bg-[#00BFFF] hover:text-white transition-colors"
                    >
                      <ArrowLeft size={24} />
                    </button>
                    <button 
                      onClick={handleNextPost}
                      className="p-2 rounded-full border-2 border-[#00BFFF] text-[#00BFFF] hover:bg-[#00BFFF] hover:text-white transition-colors"
                    >
                      <ArrowRight size={24} />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="relative group">
                    <img
                      src={featuredPosts[activePostIndex].image}
                      alt={featuredPosts[activePostIndex].title}
                      className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-lg"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center space-x-2 text-white mb-2">
                        <Calendar size={16} />
                        <span className="text-sm">{featuredPosts[activePostIndex].date}</span>
                        <span className="px-2 py-1 bg-[#00BFFF] rounded-full text-xs">
                          {featuredPosts[activePostIndex].category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {featuredPosts[activePostIndex].title}
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {featuredPosts.map((post, index) => (
                      <div
                        key={post.id}
                        className={`p-6 rounded-lg cursor-pointer transition-all duration-300 ${
                          index === activePostIndex
                            ? 'bg-[#00BFFF] text-white shadow-lg transform scale-105'
                            : 'bg-gray-50 hover:bg-gray-100'
                        }`}
                        onClick={() => setActivePostIndex(index)}
                      >
                        <div className="flex items-center space-x-2 mb-2">
                          <Calendar size={16} />
                          <span className="text-sm">{post.date}</span>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            index === activePostIndex ? 'bg-white text-[#00BFFF]' : 'bg-[#00BFFF] text-white'
                          }`}>
                            {post.category}
                          </span>
                        </div>
                        <h3 className="font-semibold line-clamp-2">{post.title}</h3>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-center mt-12">
                  <a
                    href="#"
                    className="inline-flex items-center text-[#00BFFF] font-semibold hover:text-[#0099CC] transition-colors"
                  >
                    Read More Stories
                    <ArrowRight className="ml-2" size={20} />
                  </a>
                </div>
              </div>
            </section>

            {/* Call-to-Action */}
            <section className="py-20 bg-[#00BFFF] text-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold mb-8">Begin Your Journey at Daystar</h2>
                <div className="flex flex-wrap justify-center gap-6">
                  <button className="bg-white text-[#00BFFF] px-6 py-3 rounded-full flex items-center">
                    <Play size={20} className="mr-2" /> Virtual Tour
                  </button>
                  <button className="bg-white text-[#00BFFF] px-6 py-3 rounded-full flex items-center">
                    <Download size={20} className="mr-2" /> Download Prospectus
                  </button>
                  <button className="bg-white text-[#00BFFF] px-6 py-3 rounded-full flex items-center">
                    <MessageCircle size={20} className="mr-2" /> Book Consultation
                  </button>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#0F172A] text-white py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {/* Contact Us */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                    <div className="space-y-2 text-gray-300">
                      <p>Nairobi Campus</p>
                      <p>P.O. Box 44400-00100</p>
                      <p>Nairobi, Kenya</p>
                      <p className="mt-4">+254 771 035 437</p>
                    </div>
                  </div>

                  {/* Quick Links */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <div className="space-y-2 text-gray-300">
                      <Link to="/programs" className="block hover:text-[#00BFFF]">Programs</Link>
                      <Link to="/admissions" className="block hover:text-[#00BFFF]">Admissions</Link>
                      <Link to="/about" className="block hover:text-[#00BFFF]">About</Link>
                    </div>
                  </div>

                  {/* Connect */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Connect</h3>
                    <div className="space-y-2 text-gray-300">
                      <a href="https://facebook.com" className="block hover:text-[#00BFFF]">Facebook</a>
                      <a href="https://twitter.com" className="block hover:text-[#00BFFF]">Twitter</a>
                      <a href="https://instagram.com" className="block hover:text-[#00BFFF]">Instagram</a>
                      <a href="https://linkedin.com" className="block hover:text-[#00BFFF]">LinkedIn</a>
                    </div>
                  </div>

                  {/* Newsletter */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                    <div className="space-y-4">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-[#00BFFF]"
                      />
                      <button className="w-full bg-[#00BFFF] text-white px-4 py-2 rounded hover:bg-[#0099CC] transition-colors">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
                  &copy; {new Date().getFullYear()} Daystar University. All rights reserved.
                </div>
              </div>
            </footer>

            {/* Chat Bot */}
            <button className="fixed bottom-6 right-6 bg-[#00BFFF] text-white p-4 rounded-full shadow-lg hover:bg-[#0099CC] transition-colors">
              <MessageCircle size={24} />
            </button>
          </>
        } />
        <Route path="/programs" element={<Programs />} />
        <Route path="/law-program" element={<LawProgram />} />
        <Route path="/computer-science" element={<ComputerScience />} />
        <Route path="/environmental-health" element={<EnvironmentalHealth />} />
        <Route path="/actuarial-science" element={<ActuarialScience />} />
        <Route path="/biomedical-science" element={<BiomedicalScience />} />
        <Route path="/nursing" element={<Nursing />} />
        <Route path="/msc-nursing-education" element={<MscNursingEducation />} />
        <Route path="/certificate-ict" element={<CertificateICT />} />
        <Route path="/certificate-peace" element={<CertificatePeace />} />
        <Route path="/certificate-counseling" element={<CertificateCounseling />} />
        <Route path="/certificate-media" element={<CertificateMedia />} />
        <Route path="/certificate-business" element={<CertificateBusiness />} />
        <Route path="/certificate-music" element={<CertificateMusic />} />
        <Route path="/certificate-community" element={<CertificateCommunity />} />
        <Route path="/acca" element={<ACCA />} />
        <Route path="/cips" element={<CIPS />} />
        <Route path="/cpa" element={<CPA />} />
        <Route path="/cifa" element={<CIFA />} />
        <Route path="/cs" element={<CS />} />
        <Route path="/cams" element={<CAMS />} />
        <Route path="/atd" element={<ATD />} />
        <Route path="/disability-studies" element={<DisabilityStudies />} />
        <Route path="/cim" element={<CIM />} />
        <Route path="/business-logistics" element={<BusinessLogistics />} />
        <Route path="/accounting" element={<Accounting />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/management-info" element={<ManagementInfo />} />
        <Route path="/business-admin" element={<BusinessAdmin />} />
        <Route path="/economics" element={<Economics />} />
        <Route path="/mba" element={<Mba />} />
        <Route path="/msc-economics" element={<MscEconomics />} />
        <Route path="/phd-business" element={<PhdBusiness />} />
        <Route path="/peace-conflict" element={<PeaceConflict />} />
        <Route path="/theology" element={<Theology />} />
        <Route path="/bed-science" element={<BEdScience />} />
        <Route path="/bed-arts" element={<BEdArts />} />
        <Route path="/ma-christian-ministries" element={<MAChristianMinistries />} />
        <Route path="/ma-diplomacy" element={<MADiplomacy />} />
        <Route path="/pgde" element={<PGDE />} />
        <Route path="/dip-counselling" element={<DipCounselling />} />
        <Route path="/dip-community-dev" element={<DipCommunityDev />} />
        <Route path="/dip-agriculture" element={<DipAgriculture />} />
        <Route path="/ba-psychology" element={<BAPsychology />} />
        <Route path="/ba-social-work" element={<BASocialWork />} />
        <Route path="/ba-monitoring-eval" element={<BAMonitoringEval />} />
        <Route path="/ma-counselling-psych" element={<MACounsellingPsych />} />
        <Route path="/ma-monitoring-eval" element={<MAMonitoringEval />} />
        <Route path="/ma-child-dev" element={<MAChildDev />} />
        <Route path="/ma-clinical-psych" element={<MAClinicalPsych />} />
        <Route path="/ma-community-dev" element={<MACommunityDev />} />
        <Route path="/pgd-child-dev" element={<PGDChildDev />} />
        <Route path="/phd-clinical-psych" element={<PhDClinicalPsych />} />
        <Route path="/phd-dev-studies" element={<PhDDevStudies />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/apply" element={<ApplicationForm />} />
        <Route path="/applicants" element={<Applicants />} />
        <Route path="/apply-test" element={<ApplicationForm />} />
        <Route path="/login" element={<div />} />
        <Route path="/admin/login" element={<div />} />
        <Route path="/portal/dashboard" element={<div />} />
        <Route path="/admin/dashboard" element={<div />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <WhatsAppButton phoneNumber="254771035437" />
    </div>
  );
}

export default App;