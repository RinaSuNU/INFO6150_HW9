import { useState } from "react";
import DataAnn from '../assets/DataAnnotation.jpeg';
import SP from '../assets/S&P.jpeg';
import ROKT from '../assets/ROKT.jpeg';
import ChildCard from "../components/ChildCard.jsx";
import './JobLists.css';
import None from "../assets/img_avatar.png";

function JobLists() {
    const [JobListArr] = useState([
        {
            title: "Full Stack Developer",
            skills: "Join our dynamic team to work on cutting-edge technologies. Develop and maintain sophisticated web applications for our diverse client base.",
            salary: "Last updated 2 days ago",
            applyLink:  "https://example.com/apply/full-stack-developer",
            image: DataAnn
        },
        {
            title: "Digital Marketing Specialist",
            skills: "Elevate our digital marketing strategies to promote our innovative products. Proficiency in SEO, SEM, and social media marketing is highly valued.",
            salary:  "Last updated 1 day ago",
            applyLink: "https://example.com/apply/digital-marketing-specialist",
            image: SP
        },
        {
            title: "UX/UI Designer",
            skills: "Shape engaging user experiences and create visually captivating designs. Work alongside cross-functional teams to turn ideas into reality.",
            salary:  "Last updated 4 hours ago",
            applyLink: "https://example.com/apply/ux-ui-designer",
            image: ROKT
        },
        {
            title: "Data Scientist",
            skills: "Leverage advanced analytics and machine learning to uncover insights from vast data sets. Proficiency with Python and R is a must.",
            salary:   "Last updated 3 days ago",
            applyLink: "https://example.com/apply/data-scientist",
            image: None
        },
        {
            title: "Customer Support Representative",
            skills: "Deliver unparalleled customer service and support. Exceptional communication skills and a knack for solving problems are key.",
            salary:   "Last updated 6 hours ago",
            applyLink: "https://example.com/apply/customer-support-representative",
            image: None
        },
        {
            title: "Project Manager",
            skills: "Guide and coordinate project teams to ensure successful project delivery. Strong organizational and leadership skills are required.",
            salary:    "Last updated 1 week ago",
            applyLink: "https://example.com/apply/project-manager",
            image: None
        }
    ]);

    let displayJobs = JobListArr.map((e, index) => {
        return (
            <ChildCard key={index}  salary={e.salary} skills={e.skills} image={e.image} title={e.title} applyLink={e.applyLink}/>
        );
    });

    return (
        <div className="cards-container">
            {displayJobs}
        </div>
    );
}

export default JobLists;
