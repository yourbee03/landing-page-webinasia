import React from 'react';
import Slider from 'react-slick';
import './About.css';

function About() {
  const teamMembers = [
    {
      photo: 'images/member1.jpg',
      name: 'John Doe',
      jobdesc: 'Chief Executive Officer',
    },
    {
      photo: 'images/member2.jpg',
      name: 'Tri Wahyudi',
      jobdesc: 'Chief Technology Officer',
    },
    {
      photo: 'images/member3.jpg',
      name: 'Alice Johnson',
      jobdesc: 'Chief Operating Officer',
    },
    {
      photo: 'images/member4.jpg',
      name: 'Bob Brown',
      jobdesc: 'Chief Marketing Officer',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    centerMode: true,
    centerPadding: '0px', // Ensures images are fully visible
    focusOnSelect: true,
  };

  return (
    <section className="about-section">
      <div className="about-content">
        <h2>Tentang Kami</h2>
        <p>
          Kami adalah platform yang bertujuan untuk menyediakan solusi inovatif bagi kebutuhan Anda. Dengan berbagai fitur unggulan, kami berkomitmen untuk memberikan layanan terbaik yang mampu meningkatkan produktivitas dan efisiensi Anda.
        </p>
        <p>
          <h2>Visi</h2> menjadi pemimpin di bidang ini dengan terus berinovasi dan memberikan pengalaman terbaik kepada pengguna.
        </p>
        <p>
          <h2>Misi</h2> menjadi pemimpin di bidang ini dengan terus berinovasi dan memberikan pengalaman terbaik kepada pengguna.
        </p>
      </div>

      <div className="team-carousel">
        <h3>Tim Webinasia</h3>
        <Slider {...settings}>
          {teamMembers.map((member, index) => (
            <div className="team-member" key={index}>
              <img src={member.photo} alt={member.name} className="member-photo" />
              <h4>{member.name}</h4>
              <p>{member.jobdesc}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default About;
