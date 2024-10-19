import { useNavigate } from 'react-router-dom'
import CourseDefault from '../../assets/media/course/course-1.png'

interface CourseCardProps {
    course: CourseType
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
    const navigate = useNavigate()

    return (
        <div className='col-xl-4 col-lg-6 col-md-12 p-2'>
            <a onClick={() => navigate(`/course/${course._id}`)} className='course-card bg-white' style={{ cursor: "pointer" }}>
                <div className='course-image shine mb-32 position-relative'>
                    <img
                        src={course?.coursePhoto ? course.coursePhoto : CourseDefault}
                        alt=''
                        className='br-8'
                    />
                    {course.isLive && <span className="position-absolute translate-middle badge rounded-pill bg-light text-danger" style={{ top: "15px", right: "-20px" }}>
                        <i className='fa-solid fa-circle fa-2xs me-2 text-danger-glow blink' />Live
                    </span>}
                </div>
                <div className='course-content'>
                    <div className='course-info mb-24'>
                        <div className='d-flex align-items-center gap-12'>
                            <div className='info-box'>
                                <p className='dark-gray fw-500'>{course.courseDuration}</p>
                            </div>
                            <div className='info-box'>
                                <p className='dark-gray fw-500'>{course.courseLevel}</p>
                            </div>
                        </div>
                        <p className='color-primary fw-700'>By {course.instructorInfo.instructorName}</p>
                    </div>
                    <h5 className='fw-700 mb-16'>{course.courseName}</h5>
                    <p className='dark-gray mb-24 course-detail'>
                        {course.courseSummary}
                    </p>
                    <div className='hr-line mb-24' />
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className='d-flex align-items-center'>
                            <div className='d-flex align-items-center'>
                                <i className='fa-regular fa-clock text-dark fa-lg me-1' />
                                <p className='dark-gray fw-600'>{course.courseDuration}</p>
                            </div>
                            <div className='d-flex align-items-center ms-3'>
                                <i className='fa-regular fa-keynote text-dark fa-lg me-1' />
                                <p className='dark-gray fw-600'>{course.courseLecture} Lesson</p>
                            </div>
                        </div>
                        <div>
                            <button className='btn price-label' onClick={() => navigate(`/course/${course._id}`)} style={{ cursor: "pointer" }}>
                                <h5>{course.isLive ? '₹' + course.coursePrice : 'Closed'}</h5>
                            </button>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}
