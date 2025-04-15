import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { toast, Toaster } from 'react-hot-toast';
import {
  UserIcon,
  CreditCardIcon,
  AcademicCapIcon,
  BookOpenIcon,
  HomeIcon
} from '@heroicons/react/24/solid';
import {
  UserIcon as UserIconOutline,
  EnvelopeIcon as EnvelopeIconOutline,
  PhoneIcon as PhoneIconOutline,
  PlusCircleIcon as PlusCircleIconOutline,
  ChevronRightIcon as ChevronRightIconOutline,
  ChevronLeftIcon as ChevronLeftIconOutline,
  CalendarIcon as CalendarIconOutline,
  GlobeAltIcon as GlobeAltIconOutline,
  UserGroupIcon as UserGroupIconOutline,
  BookmarkIcon as BookmarkIconOutline,
  QrCodeIcon as QrCodeIconOutline,
  BanknotesIcon as BanknotesIconOutline,
  BookOpenIcon as BookOpenIconOutline,
  TrashIcon as TrashIconOutline
} from '@heroicons/react/24/outline';
import { supabase } from '../lib/supabase';
import {
  ApplicationFormData,
  SUBJECTS,
  GRADES,
  PROGRAMME_LEVELS,
  PROGRAMMES,
  CAMPUSES,
  INTAKES,
  STUDY_MODES,
  HIGH_SCHOOL_SYSTEMS
} from '../types/application';
import { useGoogleAds } from '../hooks/useGoogleAds';

const years = Array.from({ length: 10 }, (_, i) => (new Date().getFullYear() - i).toString());

const formVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: 20 }
};

const stepTitles = [
  { title: 'Personal Information', icon: UserIcon },
  { title: 'Programme Details', icon: AcademicCapIcon },
  { title: 'Academic Background', icon: BookOpenIcon },
  { title: 'Family Information', icon: HomeIcon },
  { title: 'Application Fee', icon: CreditCardIcon }
];

const ApplicationForm: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { trackConversion } = useGoogleAds();
  const [showForm, setShowForm] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  // Track form start when component mounts
  useEffect(() => {
    trackConversion('form_start');
  }, []);

  const applicationSteps = [
    {
      title: 'Fill Application Form',
      description: 'Once you are logged in, start by filling the form with the required details',
      icon: UserIcon,
      color: 'bg-blue-500'
    },
    {
      title: 'Make Payment',
      description: 'Once you are done with filling the form, you will be required to pay application fee of KES 2,050',
      icon: CreditCardIcon,
      color: 'bg-green-500'
    },
    {
      title: 'Review',
      description: 'Your application will be reviewed within 7 working days and send you an email notification regarding your application',
      icon: AcademicCapIcon,
      color: 'bg-purple-500'
    }
  ];

  const requiredDocs = [
    {
      title: 'Passport Photo',
      description: 'A clear passport sized photo is required (accepted types: jpg, jpeg, png)',
      icon: UserIcon
    },
    {
      title: 'Identification Documents',
      description: 'National ID (Kenyan, 18+), Birth Certificate (Kenyan, <18), or Valid Passport (Non-Kenyan)',
      icon: BookmarkIconOutline
    },
    {
      title: 'Academic Certificates',
      description: 'At least 1 Academic Certificate depending on the Programme Category',
      icon: BookOpenIcon
    }
  ];
  const [formData, setFormData] = useState<ApplicationFormData>({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    dateOfBirth: '',
    nationality: '',
    gender: '',
    religion: '',
    phoneNumber: '',
    hasDisability: false,
    programmeLevel: '',
    programmeName: '',
    campus: '',
    intake: '',
    modeOfStudy: '',
    highSchoolSystem: '',
    examNumber: '',
    institutionName: '',
    fromYear: '',
    toYear: '',
    graduationYear: '',
    meanGrade: '',
    subjectGrades: SUBJECTS.map(subject => ({ subject, grade: '' })),
    customSubjects: [],
    fatherStatus: 'Alive',
    fatherName: '',
    fatherPhone: '',
    motherStatus: 'Alive',
    motherName: '',
    motherPhone: ''
  });

  const [newCustomSubject, setNewCustomSubject] = useState({ subject: '', grade: '' });

  // Get pre-selected program from state if available
  useEffect(() => {
    if (location.state?.program) {
      setFormData(prev => ({
        ...prev,
        programmeLevel: location.state.program.level,
        programmeName: location.state.program.name
      }));
      setShowForm(true); // Show form immediately if program is pre-selected
    }
  }, [location]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (currentStep < 5) {
      nextStep();
      return;
    }

    try {
      // Track form submission
      trackConversion('form_submit');
      
      const { error } = await supabase
        .from('applicants')
        .insert([{
          first_name: formData.firstName,
          middle_name: formData.middleName || null,
          last_name: formData.lastName,
          email: formData.email,
          phone_number: formData.phoneNumber,
          programme_name: formData.programmeName
        }]);

      if (error) throw error;

      // Additional conversion tracking for successful submission
      trackConversion('form_success');
      
      // Show success message and navigate
      toast.success('Application submitted successfully!');
      navigate('/application-success');
    } catch (err) {
      console.error('Error submitting application:', err);
      toast.error('Failed to submit application. Please try again.');
    }
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 5));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const renderApplicationInfo = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12 space-y-12"
    >
      {/* Application Steps */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-gray-900">Application Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {applicationSteps.map((step) => (
            <motion.div
              key={step.title}
              whileHover={{ scale: 1.03 }}
              className="relative p-6 bg-white rounded-xl shadow-lg border border-gray-100"
            >
              <div className={`absolute -top-4 left-6 p-3 rounded-lg ${step.color}`}>
                <step.icon className="w-6 h-6 text-white" />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                >
                  Learn More
                  <ChevronRightIconOutline className="w-4 h-4 ml-1" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Required Documents */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-gray-900">Required Documents</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {requiredDocs.map((doc) => (
            <motion.div
              key={doc.title}
              whileHover={{ scale: 1.03 }}
              className="p-6 bg-white rounded-xl shadow-lg border border-gray-100"
            >
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <doc.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{doc.title}</h3>
                  <p className="text-gray-600">{doc.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Apply Now Button */}
      <div className="flex justify-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowForm(true)}
          className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
        >
          Apply Now
        </motion.button>
      </div>
    </motion.div>
  );

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-8">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2 group-hover:text-[#00BFFF] transition-colors">
                  <UserIconOutline className="w-4 h-4 sm:w-5 sm:h-5 inline-block mr-1 sm:mr-2" />
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#00BFFF] focus:ring-[#00BFFF] transition-all hover:border-[#00BFFF] text-sm sm:text-base px-3 py-2"
                  required
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2 group-hover:text-[#00BFFF] transition-colors">
                  <UserIconOutline className="w-4 h-4 sm:w-5 sm:h-5 inline-block mr-1 sm:mr-2" />
                  Middle Name
                </label>
                <input
                  type="text"
                  name="middleName"
                  value={formData.middleName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#00BFFF] focus:ring-[#00BFFF] transition-all hover:border-[#00BFFF] text-sm sm:text-base px-3 py-2"
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2 group-hover:text-[#00BFFF] transition-colors">
                  <UserIconOutline className="w-4 h-4 sm:w-5 sm:h-5 inline-block mr-1 sm:mr-2" />
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#00BFFF] focus:ring-[#00BFFF] transition-all hover:border-[#00BFFF] text-sm sm:text-base px-3 py-2"
                  required
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2 group-hover:text-[#00BFFF] transition-colors">
                  <EnvelopeIconOutline className="w-4 h-4 sm:w-5 sm:h-5 inline-block mr-1 sm:mr-2" />
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#00BFFF] focus:ring-[#00BFFF] transition-all hover:border-[#00BFFF] text-sm sm:text-base px-3 py-2"
                  required
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2 group-hover:text-[#00BFFF] transition-colors">
                  <PhoneIconOutline className="w-4 h-4 sm:w-5 sm:h-5 inline-block mr-1 sm:mr-2" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#00BFFF] focus:ring-[#00BFFF] transition-all hover:border-[#00BFFF] text-sm sm:text-base px-3 py-2"
                  required
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2 group-hover:text-[#00BFFF] transition-colors">
                  <CalendarIconOutline className="w-4 h-4 sm:w-5 sm:h-5 inline-block mr-1 sm:mr-2" />
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#00BFFF] focus:ring-[#00BFFF] transition-all hover:border-[#00BFFF] text-sm sm:text-base px-3 py-2"
                  required
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2 group-hover:text-[#00BFFF] transition-colors">
                  <GlobeAltIconOutline className="w-4 h-4 sm:w-5 sm:h-5 inline-block mr-1 sm:mr-2" />
                  Nationality
                </label>
                <input
                  type="text"
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#00BFFF] focus:ring-[#00BFFF] transition-all hover:border-[#00BFFF] text-sm sm:text-base px-3 py-2"
                  required
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2 group-hover:text-[#00BFFF] transition-colors">
                  <UserGroupIconOutline className="w-4 h-4 sm:w-5 sm:h-5 inline-block mr-1 sm:mr-2" />
                  Gender
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#00BFFF] focus:ring-[#00BFFF] transition-all hover:border-[#00BFFF] text-sm sm:text-base px-3 py-2"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2 group-hover:text-[#00BFFF] transition-colors">
                  <BookmarkIconOutline className="w-4 h-4 sm:w-5 sm:h-5 inline-block mr-1 sm:mr-2" />
                  Religion
                </label>
                <input
                  type="text"
                  name="religion"
                  value={formData.religion}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#00BFFF] focus:ring-[#00BFFF] transition-all hover:border-[#00BFFF] text-sm sm:text-base px-3 py-2"
                  required
                />
              </motion.div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-8">Programme Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">Programme Level</label>
                <select
                  name="programmeLevel"
                  value={formData.programmeLevel}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#00BFFF] focus:ring-[#00BFFF] transition-all hover:border-[#00BFFF] text-sm sm:text-base px-3 py-2"
                  required
                >
                  <option value="">--Select--</option>
                  {PROGRAMME_LEVELS.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">Programme Name</label>
                <select
                  name="programmeName"
                  value={formData.programmeName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#00BFFF] focus:ring-[#00BFFF] transition-all hover:border-[#00BFFF] text-sm sm:text-base px-3 py-2"
                  required
                >
                  <option value="">--Select--</option>
                  {PROGRAMMES.map((program: string) => (
                    <option key={program} value={program}>{program}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">Campus</label>
                <select
                  name="campus"
                  value={formData.campus}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#00BFFF] focus:ring-[#00BFFF] transition-all hover:border-[#00BFFF] text-sm sm:text-base px-3 py-2"
                  required
                >
                  <option value="">--Select--</option>
                  {CAMPUSES.map((campus: string) => (
                    <option key={campus} value={campus}>{campus}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">Intake</label>
                <select
                  name="intake"
                  value={formData.intake}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#00BFFF] focus:ring-[#00BFFF] transition-all hover:border-[#00BFFF] text-sm sm:text-base px-3 py-2"
                  required
                >
                  <option value="">--Select--</option>
                  {INTAKES.map((intake: string) => (
                    <option key={intake} value={intake}>{intake}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">Mode of Study</label>
                <select
                  name="modeOfStudy"
                  value={formData.modeOfStudy}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#00BFFF] focus:ring-[#00BFFF] transition-all hover:border-[#00BFFF] text-sm sm:text-base px-3 py-2"
                  required
                >
                  <option value="">--Select--</option>
                  {STUDY_MODES.map((mode: string) => (
                    <option key={mode} value={mode}>{mode}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-8">Academic Background</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">High School System</label>
                <select
                  name="highSchoolSystem"
                  value={formData.highSchoolSystem}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#00BFFF] focus:ring-[#00BFFF] transition-all hover:border-[#00BFFF] text-sm sm:text-base px-3 py-2"
                  required
                >
                  <option value="">--Select--</option>
                  {HIGH_SCHOOL_SYSTEMS.map((system: string) => (
                    <option key={system} value={system}>{system}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">Index/Exam Registration Number</label>
                <input
                  type="text"
                  name="examNumber"
                  value={formData.examNumber}
                  onChange={handleInputChange}
                  placeholder="e.g., 13456/20"
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#00BFFF] focus:ring-[#00BFFF] transition-all hover:border-[#00BFFF] text-sm sm:text-base px-3 py-2"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">Institution Name</label>
                <input
                  type="text"
                  name="institutionName"
                  value={formData.institutionName}
                  onChange={handleInputChange}
                  placeholder="e.g., Masomo School"
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#00BFFF] focus:ring-[#00BFFF] transition-all hover:border-[#00BFFF] text-sm sm:text-base px-3 py-2"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">From Year</label>
                <select
                  name="fromYear"
                  value={formData.fromYear}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#00BFFF] focus:ring-[#00BFFF] transition-all hover:border-[#00BFFF] text-sm sm:text-base px-3 py-2"
                  required
                >
                  <option value="">--Select--</option>
                  {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">To Year</label>
                <select
                  name="toYear"
                  value={formData.toYear}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#00BFFF] focus:ring-[#00BFFF] transition-all hover:border-[#00BFFF] text-sm sm:text-base px-3 py-2"
                  required
                >
                  <option value="">--Select--</option>
                  {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">Mean Grade</label>
                <select
                  name="meanGrade"
                  value={formData.meanGrade}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#00BFFF] focus:ring-[#00BFFF] transition-all hover:border-[#00BFFF] text-sm sm:text-base px-3 py-2"
                  required
                >
                  <option value="">--Select--</option>
                  {GRADES.map(grade => (
                    <option key={grade} value={grade}>{grade}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-4 sm:mt-6">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6 flex items-center">
                <BookOpenIconOutline className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-4 text-[#00BFFF]" />
                Subject Grades
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
                {formData.subjectGrades.map((subjectGrade, index) => (
                  <motion.div
                    key={subjectGrade.subject}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all group"
                  >
                    <span className="w-1/2 text-sm font-medium text-gray-700 group-hover:text-[#00BFFF] transition-colors">
                      {subjectGrade.subject}
                    </span>
                    <select
                      value={subjectGrade.grade}
                      onChange={(e) => {
                        const newGrades = [...formData.subjectGrades];
                        newGrades[index].grade = e.target.value;
                        setFormData(prev => ({
                          ...prev,
                          subjectGrades: newGrades
                        }));
                      }}
                      className="w-1/2 rounded-lg border-gray-300 shadow-sm focus:border-[#00BFFF] focus:ring-[#00BFFF] transition-all group-hover:border-[#00BFFF] text-sm sm:text-base px-3 py-2"
                    >
                      <option value="">--Select--</option>
                      {GRADES.map(grade => (
                        <option key={grade} value={grade}>{grade}</option>
                      ))}
                    </select>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8"
              >
                <h4 className="text-lg sm:text-xl font-medium text-gray-900 mb-4 sm:mb-6 flex items-center">
                  <PlusCircleIconOutline className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-4 text-[#00BFFF]" />
                  Add Custom Subject
                </h4>
                <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4 bg-gray-50 p-4 rounded-lg">
                  <input
                    type="text"
                    placeholder="Subject Name"
                    value={newCustomSubject.subject}
                    onChange={(e) => setNewCustomSubject(prev => ({ ...prev, subject: e.target.value }))}
                    className="w-full md:w-1/3 rounded-lg border-gray-300 shadow-sm focus:border-[#00BFFF] focus:ring-[#00BFFF] transition-all hover:border-[#00BFFF] text-sm sm:text-base px-3 py-2"
                  />
                  <select
                    value={newCustomSubject.grade}
                    onChange={(e) => setNewCustomSubject(prev => ({ ...prev, grade: e.target.value }))}
                    className="w-full md:w-1/3 rounded-lg border-gray-300 shadow-sm focus:border-[#00BFFF] focus:ring-[#00BFFF] transition-all hover:border-[#00BFFF] text-sm sm:text-base px-3 py-2"
                  >
                    <option value="">--Select Grade--</option>
                    {GRADES.map(grade => (
                      <option key={grade} value={grade}>{grade}</option>
                    ))}
                  </select>
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      if (newCustomSubject.subject && newCustomSubject.grade) {
                        setFormData(prev => ({
                          ...prev,
                          customSubjects: [...prev.customSubjects, { ...newCustomSubject, isCustom: true }]
                        }));
                        setNewCustomSubject({ subject: '', grade: '' });
                        toast.success('Custom subject added successfully!');
                      }
                    }}
                    className="w-full md:w-auto px-4 py-2 bg-gradient-to-r from-[#00BFFF] to-[#33CCFF] text-white rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center space-x-2"
                  >
                    <PlusCircleIconOutline className="w-5 h-5" />
                    <span>Add Subject</span>
                  </motion.button>
                </div>
              </motion.div>

              <AnimatePresence>
                {formData.customSubjects.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-6"
                  >
                    <h4 className="text-lg sm:text-xl font-medium text-gray-900 mb-4 sm:mb-6 flex items-center">
                      <BookmarkIconOutline className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-4 text-[#00BFFF]" />
                      Custom Subjects
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
                      {formData.customSubjects.map((subject, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all group"
                        >
                          <span className="text-sm text-gray-700 group-hover:text-[#00BFFF] transition-colors">
                            {subject.subject}: {subject.grade}
                          </span>
                          <motion.button
                            type="button"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => {
                              setFormData(prev => ({
                                ...prev,
                                customSubjects: prev.customSubjects.filter((_, i) => i !== index)
                              }));
                              toast.success('Custom subject removed!');
                            }}
                            className="text-red-600 hover:text-red-800 p-1 rounded-full hover:bg-red-50 transition-colors"
                          >
                            <TrashIconOutline className="w-5 h-5" />
                          </motion.button>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-8">Family Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2 group-hover:text-[#00BFFF] transition-colors">
                  <UserIconOutline className="w-4 h-4 sm:w-5 sm:h-5 inline-block mr-1 sm:mr-2" />
                  Father's Full Name
                </label>
                <input
                  type="text"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleInputChange}
                  placeholder="e.g., John Doe"
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#00BFFF] focus:ring-[#00BFFF] transition-all hover:border-[#00BFFF] text-sm sm:text-base px-3 py-2"
                  required
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2 group-hover:text-[#00BFFF] transition-colors">
                  <UserIconOutline className="w-4 h-4 sm:w-5 sm:h-5 inline-block mr-1 sm:mr-2" />
                  Father's Phone Number
                </label>
                <input
                  type="tel"
                  name="fatherPhone"
                  value={formData.fatherPhone}
                  onChange={handleInputChange}
                  placeholder="e.g., 0712345678"
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#00BFFF] focus:ring-[#00BFFF] transition-all hover:border-[#00BFFF] text-sm sm:text-base px-3 py-2"
                  required
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2 group-hover:text-[#00BFFF] transition-colors">
                  <UserIconOutline className="w-4 h-4 sm:w-5 sm:h-5 inline-block mr-1 sm:mr-2" />
                  Mother's Full Name
                </label>
                <input
                  type="text"
                  name="motherName"
                  value={formData.motherName}
                  onChange={handleInputChange}
                  placeholder="e.g., Jane Doe"
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#00BFFF] focus:ring-[#00BFFF] transition-all hover:border-[#00BFFF] text-sm sm:text-base px-3 py-2"
                  required
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2 group-hover:text-[#00BFFF] transition-colors">
                  <UserIconOutline className="w-4 h-4 sm:w-5 sm:h-5 inline-block mr-1 sm:mr-2" />
                  Mother's Phone Number
                </label>
                <input
                  type="tel"
                  name="motherPhone"
                  value={formData.motherPhone}
                  onChange={handleInputChange}
                  placeholder="e.g., 0712345678"
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#00BFFF] focus:ring-[#00BFFF] transition-all hover:border-[#00BFFF] text-sm sm:text-base px-3 py-2"
                  required
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2 group-hover:text-[#00BFFF] transition-colors">
                  <UserIconOutline className="w-4 h-4 sm:w-5 sm:h-5 inline-block mr-1 sm:mr-2" />
                  Father's Status
                </label>
                <select
                  name="fatherStatus"
                  value={formData.fatherStatus}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#00BFFF] focus:ring-[#00BFFF] transition-all hover:border-[#00BFFF] text-sm sm:text-base px-3 py-2"
                  required
                >
                  <option value="Alive">Alive</option>
                  <option value="Deceased">Deceased</option>
                </select>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2 group-hover:text-[#00BFFF] transition-colors">
                  <UserIconOutline className="w-4 h-4 sm:w-5 sm:h-5 inline-block mr-1 sm:mr-2" />
                  Mother's Status
                </label>
                <select
                  name="motherStatus"
                  value={formData.motherStatus}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#00BFFF] focus:ring-[#00BFFF] transition-all hover:border-[#00BFFF] text-sm sm:text-base px-3 py-2"
                  required
                >
                  <option value="Alive">Alive</option>
                  <option value="Deceased">Deceased</option>
                </select>
              </motion.div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-8">Application Fee Payment</h2>
              <p className="text-gray-600 mb-8">Please pay the application fee of KES 2,050 to complete your application.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* M-Pesa Option */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${selectedPaymentMethod === 'mpesa' ? 'border-[#00BFFF] bg-blue-50' : 'border-gray-200 hover:border-[#00BFFF]'}`}
                onClick={() => setSelectedPaymentMethod('mpesa')}
              >
                <div className="flex items-center justify-center mb-4">
                  <QrCodeIconOutline className="w-12 h-12 text-[#00BFFF]" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-center mb-2">Pay with M-Pesa</h3>
                <p className="text-gray-600 text-center text-sm sm:text-base mb-4">Fast and convenient mobile payment</p>
                
                {selectedPaymentMethod === 'mpesa' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="space-y-4"
                  >
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <p className="text-sm font-medium">Follow these steps:</p>
                      <ol className="list-decimal list-inside text-sm text-gray-600 space-y-2 mt-2">
                        <li>Go to M-Pesa menu</li>
                        <li>Select Pay Bill</li>
                        <li>Enter Business No: <span className="font-medium">247247</span></li>
                        <li>Enter Account No: <span className="font-medium">YOUR_PHONE</span></li>
                        <li>Enter Amount: <span className="font-medium">2,050</span></li>
                        <li>Enter your M-Pesa PIN</li>
                      </ol>
                    </div>
                    <div className="mt-4 flex flex-col items-center gap-4">
                      <button
                        type="button"
                        onClick={handlePayment}
                        disabled={loading}
                        className={`w-full px-4 py-2 bg-gradient-to-r from-[#00BFFF] to-[#33CCFF] text-white rounded-lg hover:opacity-90 transition-opacity ${
                          loading
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-[#00BFFF] hover:bg-[#33CCFF]'
                        } transition-colors duration-200`}
                      >
                        {loading ? 'Processing...' : 'Pay with M-Pesa'}
                      </button>
                      {error && (
                        <div className="text-red-600 text-sm mt-2 text-center">
                          {error}
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </motion.div>

              {/* Bank Transfer Option */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${selectedPaymentMethod === 'bank' ? 'border-[#00BFFF] bg-blue-50' : 'border-gray-200 hover:border-[#00BFFF]'}`}
                onClick={() => setSelectedPaymentMethod('bank')}
              >
                <div className="flex items-center justify-center mb-4">
                  <BanknotesIconOutline className="w-12 h-12 text-[#00BFFF]" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-center mb-2">Bank Transfer</h3>
                <p className="text-gray-600 text-center text-sm sm:text-base mb-4">Direct bank deposit or transfer</p>
                
                {selectedPaymentMethod === 'bank' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="space-y-4"
                  >
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <p className="text-sm font-medium mb-2">Bank Details:</p>
                      <div className="space-y-2 text-sm text-gray-600">
                        <p>Bank Name: <span className="font-medium">Kenya Commercial Bank</span></p>
                        <p>Account Name: <span className="font-medium">UNIVERSITY NAME</span></p>
                        <p>Account Number: <span className="font-medium">1234567890</span></p>
                        <p>Branch: <span className="font-medium">MAIN BRANCH</span></p>
                        <p>Swift Code: <span className="font-medium">KCBLKENX</span></p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </div>

            <div className="mt-8 text-center text-sm sm:text-base text-gray-500">
              <p>After making the payment, click 'Submit Application' to complete your application.</p>
              <p className="mt-2">Your application will be processed once the payment is confirmed.</p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<'mpesa' | 'bank' | null>('mpesa');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePayment = async () => {
    try {
      setLoading(true);
      setError(null);

      // Get token
      console.log('Getting token...');
      const tokenResponse = await fetch('/api/get-token');
      
      if (!tokenResponse.ok) {
        const errorData = await tokenResponse.text();
        console.error('Token response:', errorData);
        throw new Error(`Failed to get token: ${errorData}`);
      }

      const tokenData = await tokenResponse.json();
      console.log('Token response:', tokenData);
      
      if (!tokenData.token) {
        throw new Error(`No token in response: ${JSON.stringify(tokenData)}`);
      }

      // Get the callback URL
      const callbackUrl = `${window.location.origin}/api/ipn`;
      console.log('Using callback URL:', callbackUrl);

      // Prepare order data
      const orderData = {
        id: `zeroday_${Date.now()}`,
        currency: 'KES',
        amount: 2050,
        description: 'Application Fee',
        callback_url: callbackUrl,
        branch: 'ZERODAY',
        billing_address: {
          email_address: formData.email,
          phone_number: formData.phoneNumber,
          country_code: 'KE',
          first_name: formData.firstName,
          middle_name: formData.middleName || '',
          last_name: formData.lastName,
          line_1: 'Nairobi',
          line_2: '',
          city: 'Nairobi',
          state: '',
          postal_code: '',
          zip_code: '',
        },
      };

      console.log('Submitting order with data:', orderData);

      // Submit order
      const submitResponse = await fetch('/api/submit-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: tokenData.token,
          orderData,
        }),
      });

      if (!submitResponse.ok) {
        const errorData = await submitResponse.text();
        console.error('Submit response:', errorData);
        throw new Error(`Failed to submit order: ${errorData}`);
      }

      const submitData = await submitResponse.json();
      console.log('Order submitted successfully:', submitData);

      if (submitData.order_tracking_id) {
        window.location.href = `https://pay.pesapal.com/iframe/PesapalIframe3/Index?OrderTrackingId=${submitData.order_tracking_id}`;
      } else {
        throw new Error(`No order tracking ID in response: ${JSON.stringify(submitData)}`);
      }
    } catch (err: any) {
      const errorMessage = err.message || 'Payment failed';
      setError(errorMessage);
      console.error('Payment error:', err);
      toast.error('Payment failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 py-6 px-3 sm:py-12 sm:px-6 lg:px-8">
      <Toaster position="top-right" />
      
      <AnimatePresence mode="wait">
        {!showForm ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-7xl mx-auto"
          >
            {renderApplicationInfo()}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="relative max-w-4xl mx-auto bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden"
          >
        {/* Progress Steps */}
        <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#00BFFF] to-[#33CCFF] border-b border-blue-400 shadow-lg">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-nowrap overflow-x-auto gap-4 sm:gap-0 sm:justify-between items-center py-3 sm:py-4 no-scrollbar">
              {stepTitles.map((step, index) => {
                const StepIcon = step.icon;
                const isActive = index + 1 === currentStep;
                return (
                  <motion.div
                    key={index}
                    className={`flex flex-col items-center flex-shrink-0 ${
                      isActive ? 'text-white' : 'text-white/60'
                    }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div 
                      className={`relative w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border-2 
                        ${isActive ? 'border-white bg-white/20' : 'border-white/60'}`}
                    >
                      <StepIcon className="w-4 h-4 sm:w-6 sm:h-6" />
                      <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full ${
                        isActive ? 'bg-white' : 'bg-transparent'
                      }`} />
                    </div>
                    <span className="mt-2 text-[10px] sm:text-sm font-medium text-center whitespace-nowrap max-w-[80px] sm:max-w-none">
                      {step.title}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Spacer for fixed header */}
        <div className="h-24 sm:h-28" />

        {/* Form Content */}
        <div className="p-4 sm:p-6 relative z-10">
          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={formVariants}
                className="w-full"
              >
                {renderStep()}
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-4 sm:pt-6 space-x-3">
              {currentStep > 1 && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  onClick={prevStep}
                  className="flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm sm:text-base"
                >
                  <ChevronLeftIconOutline className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                  Previous
                </motion.button>
              )}
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="flex items-center px-4 sm:px-6 py-2 sm:py-3 ml-auto bg-gradient-to-r from-[#00BFFF] to-[#33CCFF] text-white rounded-lg hover:opacity-90 transition-opacity text-sm sm:text-base"
              >
                {currentStep === 5 ? 'Submit Application' : 'Next'}
                {currentStep < 5 && <ChevronRightIconOutline className="w-4 h-4 sm:w-5 sm:h-5 ml-1 sm:ml-2" />}
              </motion.button>
            </div>
          </form>
        </div>
      </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ApplicationForm;
