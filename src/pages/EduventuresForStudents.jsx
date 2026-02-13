import React, { useEffect, useRef } from 'react'


import StudentTrainersSection from '../components/StudentTrainerSection/StudentTrainerSection'
// import EduventuresTrainers from '../../components/EduventuresForStudentsTrainers'
// import EduventuresStudentsTestimonials from '../../components/EduventuresStudentsTestimonials'
// import EduventuresForStudentsSoftSkills from '../../components/EduventuresForStudentsSoftSkills'
import SoftSkillsCoursesSection from '../components/SoftSkillsCoursesSection/SoftSkillsCoursesSection'


import StudentTestimonialsSection from '../components/StudentTestimonialsSection/StudentTestimonialsSection'
import { useLocation } from 'react-router-dom';
import Navbar from '../components/EduventuresForStudentsNavbarNew/EduventuresForStudentsNavbarNew'
import EduventuresForStudentsHeroSection from '../components/EduventuresForStudentsHeroSectionNew/EduventuresForStudentsHeroSectionNew'
import BookingForm from '../components/BookingFormForStudentsEduventures/BookingFormForStudentsEduventures'
import MasterClasses from '../components/EduventuresForStudentsMasterClassCard/EduventuresForStudentsMasterClassCard'
import JobOrientedCoursesSection from '../components/JobOrientedCoursesSection/JobOrientedCoursesSection'

const EduventuresForStudents = () => {

  const location = useLocation();
  const bookingFormRef = useRef(null); // Create ref for booking form

  // Function to scroll to booking form
  const scrollToBookingForm = () => {
    bookingFormRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div>
      <Navbar />
      <EduventuresForStudentsHeroSection scrollToBookingForm={scrollToBookingForm} />
      <BookingForm ref={bookingFormRef} />
      <MasterClasses/>
      {/* <EduventuresCourses/> */}
      <JobOrientedCoursesSection/>
      <SoftSkillsCoursesSection/>
      {/* <EduventuresForStudentsSoftSkills/> */}
      {/* <TrainerCard image={"/dummy_trainer.jpg"} name={"Ajay"} title={"CEO"} verified={1} experience={"5 years"} expertise={"Web Developer"}description={"I am a Good Guy and i am a Placeholder for the trainers section card . I hope i dont cause trouble"}/> */}
      <StudentTrainersSection/>
      <StudentTestimonialsSection/>
      {/* <EduventuresStudentsTestimonials/> */}
    </div>
  )
}

export default EduventuresForStudents
