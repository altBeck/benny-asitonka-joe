import { useRef, useState } from "react";
import { ProjectItem, Work, Carousel } from "../../components";

import lkdn from "../../assets/LinkedIn.svg";
import insta from "../../assets/insta.svg"
import logo from "/logo-06.png";

import video from "../../assets/video.mp4";
import img1 from "../../assets/nerdwork.jpeg";
import img2 from "../../assets/nerdowk-1.jpeg";
import img3 from "../../assets/nerdowrk-2.jpeg";
import img4 from "../../assets/Shifu Shotz-11.jpg";
import img5 from "../../assets/Shifu Shotz-12.jpg";
import img6 from "../../assets/OTAKU-9442.jpg";
import img7 from "../../assets/OTAKU-9445 (1).jpg";
import img8 from "../../assets/OTAKU-9447.jpg";
import img9 from "../../assets/OTAKU-9457.jpg";
import img10 from "../../assets/otaku-connect-1.jpeg"

const nerdworkImages = [ img1, img2, img3, img4, img5 ];
const otakuImages = [ img6, img7, img8, img9, img10 ];
const videoUrl = [ video ];

const Home = () => {

  const projects = [
    {
      title: 'Nerdwork Comic-Con 2023',
      description: 'Nerdwork is an entertainment startup specialising in organising the largest annual comic convention event in Rivers State, fostering community engagement among its 1000+ members, celebrating Japanese and Western pop culture through events, competitions, cosplay, gaming, art displays, guest appearances and interactive experiences.',
      videoUrl: video,
    },
  ];

  const workExperiences = [
    {
      company: 'Nerdwork',
      duration: 'Jan 2019 - Present',
      role: 'Team Project Lead',
      details: [
        {
          title: 'Crisis Management: ',
          description:
            'Successfully navigated and resolved unforeseen challenges during the organization of the largest annual comic-con event in Rivers State. Demonstrated composure and decisive decision-making under high-pressure situations.',
        },
        {
          title: 'Risk Management: ',
          description:
            'Proactively identified and mitigated potential risks associated with event planning, ensuring a 20% reduction in unplanned disruptions and contributing to the overall success of the comic-con event.',
        },
        {
          title: 'Community Management: ',
          description:
            'Led a dynamic community of 1000+ members, fostering engagement and collaboration within the community, resulting in a 30% increase in active participation and enthusiasm.',
        },
        {
          title: 'Vendor Management: ',
          description:
            'Negotiated and managed relationships with diverse vendors, optimizing costs while maintaining high-quality standards. Achieved a 15% cost reduction in vendor agreements for event resources.',
        },
        {
          title: 'Event Management: ',
          description:
            'Orchestrated the entire event life cycle, from conceptualization to execution. Achieved an annual attendance of 2000+ attendees, establishing the comic-con as a premier event in Rivers State. Coordinated logistics, scheduling, and on-site management, ensuring a seamless and memorable experience for participants.',
        },
      ],
      images: nerdworkImages,
    },

    {
      company: 'Otaku Connect',
      duration: 'Dec 2020',
      role: 'Team Lead',
      details: [
        {
          title: 'Budget and Financial Management: ',
          description:
            'Successfully managed the event budget, achieving a 10% cost savings through strategic allocation of resources and negotiation with vendors.',
        },
        {
          title: 'Vendor Management: ',
          description:
            'Negotiated vendor agreements resulting in a 15% reduction in overall event expenses, demonstrating effective cost control without compromising quality.',
        },
        {
          title: 'Negotiating Skills: ',
          description:
            'Utilized strong negotiation skills to secure sponsorships, contributing to a 20% increase in event funding and allowing for additional enhancements to the event experience.',
        },
        {
          title: 'Attendance Growth: ',
          description:
            'Implemented targeted marketing strategies that led to a 25% increase in attendance compared to the previous year, showcasing effective planning and execution.',
        },
      ],
      images: otakuImages,
    },

    {
      company: 'El Cafe',
      duration: 'Jan 2021 - Aug 2021',
      role: 'Architect/Project Manager',
      details: [
        {
          title: 'Communication Skills: ',
          description:
            'Facilitated regular project updates, resulting in a 20% increase in team alignment and improved project efficiency.',
        },
        {
          title: 'Adaptability: ',
          description:
            'Successfully managed changes in project scope, leading to a 15% reduction in project timeline extensions and ensuring timely completion.',
        },
        {
          title: 'Customer Focus: ',
          description:
            'Incorporated client feedback into the design, resulting in a final product that exceeded customer satisfaction expectations by achieving a 25% increase in positive client feedback.',
        },
        {
          title: 'Event Integration: ',
          description:
            'Collaborated with the events team to seamlessly integrate architectural elements, contributing to a 30% improvement in the overall gaming experience and enhancing customer engagement.',
        },
      ],
    },
  ];

  return (
    <div className="px-4 pb-0 sm:pb-28">
      <section className="py-8">
        <div className="pb-4">
          <img 
            src={logo}
            width={40}
          />
        </div>

        <div>
          <h1 className="text-xl font-medium">Benny Asitonka-Joe</h1>
          <p className="text-gray-500">Product Manager</p>
        </div>
        <div className="flex space-x-2 pt-2">
          <a 
            href="https://www.instagram.com/aj_benny_/?hl=en"
            target="_blank" rel="noopener noreferrer"
          >
            <img 
              src={insta}
              width={24}
              height={24}
            />
          </a>

          <a 
            href="https://linkedin.com/in/benny-asitonka-joe"
            target="_blank" rel="noopener noreferrer"
          >
            <img
            src={lkdn}
            alt="linkedin"
            width={24}
            height={24}
            />
          </a>
        </div>
      </section>

      <section>
        <div>
          <div className="pb-8">
            <h1 className="text-gray-500 font-medium">Summary</h1>
            <p>Dynamic and results-driven product manager with a background in architecture, offering a unique blend of creativity and project management skills. Proven ability to lead cross-functional teams and deliver successful projects in diverse settings.</p>
          </div>

        </div>
      </section>

      <section>
        <div className="pb-8">
          <div className="pb-2">
            <h1 className="text-gray-500 font-medium">Projects</h1>
          </div>

          <div className="space-y-4">
            {projects.map((project, index) => (
              <ProjectItem key={index} {...project} />
            ))}
          </div>

        </div>
      </section>

      <section>
        <div>
          <div className="pb-2">
            <h1 className="text-gray-500 font-medium">Work Experience</h1>
          </div>

          <div className="space-y-4">
            {workExperiences.map((experience, index) => (
              <div key={index}>
                <Work {...experience} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-8">
        <h1 className="text-gray-500 font-medium">Education</h1>
        <div className="pt-2">
          <h3 className="font-semibold text-lg">Rivers State University</h3>
          <ul className="space-y-2">
            <li className="font-medium text-md">Architecture (Bachelor of Technology, Architecture) <br/> <span className="font-normal text-sm">2014 - 2018</span></li>
            <li className="font-medium text-md">Architecture (Masters of Architecture, Architecture) <br/> <span className="font-normal text-sm">2019 - 2021</span></li>
          </ul>
        </div>
      </section>

    </div>
  )
}

export default Home