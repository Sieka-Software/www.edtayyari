import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import TeacherDefault from "../../assets/media/teachers/teacher-2.png";

interface InstructorCardProps {
    instructor: InstructorType;
}

export const InstructorCard: React.FC<InstructorCardProps> = ({ instructor }) => {
    return (
        <div className="col-xl-3 col-lg-6 col-md-6">
            <div className="teacher-block bg-white br-12">
                <div className="teacher-image text-center shine mb-32">
                    <a><img src={TeacherDefault} alt="" /></a>
                    <ul className="social-plateform list-unstyled">
                        <li>
                            <a href={instructor.instructorLinkedin} target="_blank" rel="noreferrer noopener">
                                <FontAwesomeIcon icon={faLinkedin} size="xl" />
                            </a>
                        </li>
                        <li>
                            <a href={`mailto:${instructor.instructorEmail}`} target="_blank" rel="noreferrer noopener">
                                <FontAwesomeIcon icon={faEnvelope} size="xl" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="teacher-content">
                    <a className="h5 fw-700 mb-8">{instructor.instructorName}</a>
                    <p className="dark-gray">{instructor.instructorTitle}</p>
                    <p className="dark-gray">{instructor.instructorDesignation}</p>
                </div>
            </div>
        </div>
    )
}
