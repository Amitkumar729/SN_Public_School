import React from "react";
import "./faculty.css";

const faculty = () => {
  return (
    <div className="faculty-conatiner">
      <div className="faculty-header">
        <h2>More About Us</h2>
      </div>
      <div className="faculty-wrapper">
        <div className="faculty-left">
          <img src="/assets/manjula.png" />
        </div>
        <div className="faculty-right">
          <div className="faculty-heading">
            <h3>From the Desk Of School Director</h3>
          </div>
          <div className="faculty-name">
            <h4>Manjula Gupta</h4>
          </div>
          <div className="about-faculty">
            <p>
              At S.N Public School, we strive to create a joyful and enriching
              environment where every student can thrive academically, grow
              personally, and develop a love for learning. Our dedicated team of
              educators is passionate about providing a well-rounded education
              that goes beyond textbooks and exams. We believe in nurturing
              curious minds, encouraging creativity, and fostering critical
              thinking skills. Character development is at the heart of our
              educational approach. We believe in shaping well-rounded
              individuals who are not only academically strong but also possess
              values like integrity, respect, empathy, and resilience. Through
              various activities and interactions, we help our students grow
              into responsible, compassionate, and socially conscious
              individuals. While academics and character development are
              important, we also understand the need for holistic growth. That's
              why our school offers a vibrant array of extracurricular
              activities, sports, arts, and cultural events. We believe in
              encouraging each student to explore their interests and talents
              outside the classroom, fostering a well-balanced and fulfilling
              school experience. At S.N Public School, we strongly believe in
              fostering a supportive and inclusive community. Our dedicated
              staff members are committed to creating a safe and nurturing
              environment where each student feels valued, heard, and supported.
              We believe that the success of our students is built on strong
              partnerships between parents, teachers, and students. Open lines
              of communication are the key to building this partnership, and we
              value collaboration with our school families.
            </p>
          </div>
        </div>
      </div>

      {/* Swapped Wrapper */}
      <div className="faculty-wrapper swapped">
        <div className="faculty-right">
          <div className="faculty-heading">
            <h3>From the Desk Of School Director</h3>
          </div>
          <div className="faculty-name">
            <h4>Manjula Gupta</h4>
          </div>
          <div className="about-faculty">
            <p>
              Dear Students, Parents, and Staff, I am delighted to welcome you
              to S.N Public School's website. As the coordinator of this
              esteemed institution, it is my pleasure to share with you the
              values and vision that drive our school community. At S.N Public
              School, we believe in providing a holistic educational experience
              that empowers students to excel academically, grow personally, and
              contribute positively to society. Our resolute team of educators
              strives to create a nurturing and stimulating environment where
              each student can realize their full potential. Our school is
              committed to academic excellence while also fostering a love for
              learning. We offer a rich and diverse curriculum that encourages
              critical thinking, creativity, and critical thinking skills.
              Through a well-rounded education, we aim to equip our students
              with the necessary knowledge and skills to face the challenges of
              an ever-changing world. Moreover, we emphasize the development of
              character and values. We firmly believe in instilling qualities
              such as integrity, respect, empathy, and perseverance in our
              students. Along with academic achievements, we encourage them to
              become responsible and compassionate individuals who can make a
              positive impact on the world around them. Furthermore, S.N Public
              School strongly emphasizes the importance of holistic development.
              We recognize the need to nurture every aspect of a student's
              personality. Thus, we provide ample opportunities for students to
              engage in sports, arts, and cultural activities. We believe that
              these pursuits not only promote physical fitness but also instill
              teamwork, discipline, and leadership skills. Please take some time
              to explore the various sections of our website to learn more about
              our school, its programs, and extracurricular activities. We hope
              that this platform will provide you with valuable information
              about our school and its vibrant community. Thank you for
              considering S.N Public School as a place for your child's
              education. We are proud of our school, and we hope that with your
              support, we can continue to provide a nurturing and enriching
              environment for our students.
            </p>
          </div>
        </div>
        <div className="faculty-left swapped">
          <img src="/assets/kajal.png" alt="Manjula Gupta" />
        </div>
      </div>
    </div>
  );
};

export default faculty;
