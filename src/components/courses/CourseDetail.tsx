import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../store'
import * as Common from '../alert'
import { CourseDetailLoader } from './CourseDetailLoader'
import CourseDetailsImg from '../../assets/media/course/course-detail.png'
import CourseSidebarImg from '../../assets/media/course/course-sidebar.png'
import TeacherDefault from '../../assets/media/teachers/teacher-2.png'

export const CourseDetail = () => {
    const navigate = useNavigate()
    const { config } = useAppSelector((state) => state.master)
    const { course } = useAppSelector((state) => state.work)
    
    return (
        <section className='course-detail-section pt-10 pb-40'>
            <div className='container-fluid'>
                <div className='row justify-content-center'>
                    <div className='col-xl-11'>
                        {course.loading && <CourseDetailLoader />}
                        {!course.loading && course.data == null && <Common.EmptyData />}
                        {!course.loading && course.data != null && (
                            <div className='row row-gap-4'>
                                <div className='text-end mb-5'>
                                    <a
                                        className='cus-btn-3 mt-xl-0 mt-48'
                                        style={{ width: '200px' }}
                                        onClick={() => navigate('/courses')}
                                    >
                                        <span className='btn-text'>All Courses</span>
                                        <span>
                                            <i className='fa-regular fa-arrow-left me-2' />
                                            Back to All Courses
                                        </span>
                                    </a>
                                    <a className='cus-btn-3 mt-xl-0 mt-48 ms-1' onClick={() => navigate('/')}>
                                        <span className='btn-text'>
                                            <i className='fa-regular fa-home me-2' />
                                            Home
                                        </span>
                                        <span>
                                            <i className='fa-regular fa-home me-2' />
                                            Home
                                        </span>
                                    </a>
                                </div>
                                <div className='col-xl-8 order-xl-1 order-1'>
                                    <div className='course-detail-wrapper'>
                                        <div className='detail-image position-relative'>
                                            <img
                                                src={course.data?.coursePhoto ? course.data?.coursePhoto : CourseDetailsImg}
                                                alt=''
                                                className='mb-24 br-12 w-100'
                                            />
                                            <span className="position-absolute label-tag subtitle" style={{ top: "10px", right: "10px" }}>
                                                {course.data?.courseCategory}
                                            </span>
                                        </div>
                                        <div className='d-flex align-items-center gap-16 mb-24'>
                                            <div className='d-flex align-items-center gap-12'>
                                                <img
                                                    src={course.data?.instructorInfo.instructorPhoto}
                                                    alt=''
                                                    style={{ width: '30px' }}
                                                />
                                                <p className='fw-500'>
                                                    <span className='black me-2'>Instructor:</span>
                                                    {course.data?.instructorInfo.instructorName}
                                                </p>
                                            </div>
                                        </div>
                                        <h4 className='black fw-700 mb-16'>{course.data?.courseName}</h4>
                                        <p className='mb-5' style={{ textAlign: "justify" }}>{course.data?.courseSummary}</p>
                                        <div className='course-tabs-wrapper'>
                                            <ul className='nav nav-tabs' id='myTab' role='tablist'>
                                                <li className='nav-item  active' role='presentation'>
                                                    <button
                                                        className='nav-link  active'
                                                        id='overview-tab'
                                                        data-bs-toggle='tab'
                                                        data-bs-target='#overview'
                                                        type='button'
                                                        role='tab'
                                                        aria-controls='overview'
                                                        aria-selected='true'
                                                    >
                                                        Overview
                                                    </button>
                                                </li>
                                                <li className='nav-item' role='presentation'>
                                                    <button
                                                        className='nav-link'
                                                        id='curriculum-tab'
                                                        data-bs-toggle='tab'
                                                        data-bs-target='#curriculum'
                                                        type='button'
                                                        role='tab'
                                                        aria-controls='curriculum'
                                                        aria-selected='false'
                                                    >
                                                        Curriculum
                                                    </button>
                                                </li>
                                                <li className='nav-item' role='presentation'>
                                                    <button
                                                        className='nav-link'
                                                        id='instructor-tab'
                                                        data-bs-toggle='tab'
                                                        data-bs-target='#instructor'
                                                        type='button'
                                                        role='tab'
                                                        aria-controls='instructor'
                                                        aria-selected='false'
                                                    >
                                                        Instructor
                                                    </button>
                                                </li>
                                                <li className='nav-item' role='presentation'>
                                                    <button
                                                        className='nav-link'
                                                        id='references-tab'
                                                        data-bs-toggle='tab'
                                                        data-bs-target='#references'
                                                        type='button'
                                                        role='tab'
                                                        aria-controls='references'
                                                        aria-selected='false'
                                                    >
                                                        References
                                                    </button>
                                                </li>
                                            </ul>
                                            <div className='tab-content' id='myTabContent'>
                                                <div
                                                    className='tab-pane fade show active py-5'
                                                    id='overview'
                                                    role='tabpanel'
                                                    aria-labelledby='overview-tab'
                                                >
                                                    <div className="heading">
                                                        <h5 className="black fw-700 mb-32">Course Overview</h5>
                                                    </div>
                                                    <div className="course-text mb-32">
                                                        {course.data?.courseOverview.map((item, index) => {
                                                            return (
                                                                <div className="mb-4">
                                                                    <h6 className="fw-700 dark-gray mb-1">{index + 1}. {item.title}</h6>
                                                                    <p>
                                                                        {item.body}
                                                                    </p>
                                                                </div>
                                                            )
                                                        })}
                                                        <div className="mb-2">
                                                            <h6 className="fw-700 dark-gray mb-16">{course.data?.courseOverview.length + 1}. Certification</h6>
                                                            <p>Upon successful completion of the course, you will receive a
                                                                Certificate of Completion. This certificate validates
                                                                your new skills and can be added to your resume or LinkedIn
                                                                profile to showcase your expertise in web development.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className='tab-pane fade py-5'
                                                    id='curriculum'
                                                    role='tabpanel'
                                                    aria-labelledby='curriculum-tab'
                                                >
                                                    <div className="heading">
                                                        <h5 className="black fw-700 mb-32">Course Content</h5>
                                                    </div>
                                                    <div className="row">
                                                        {course.data?.courseCurriculum.map((item, index) => {
                                                            return (
                                                                <div className="faq-block mb-8" key={index}>
                                                                    <a className="accordion-button collapse" data-bs-toggle="collapse" data-bs-target={`#item${index.toString()}`} aria-expanded={false}>
                                                                        <p className="fw-500 w-100">{item.curriculumTitle}</p>
                                                                        <p className="d-none d-md-block fw-500 w-100 dark-gray text-end me-2">{item.noOfLectures} Lectures • {item.lectureLength}</p>
                                                                    </a>
                                                                    <div id={`item${index.toString()}`} className="accordion-collapse collapse ms-4  mt-3" aria-labelledby={`item${index.toString()}`}>
                                                                        <ul className="faq-detail-block">
                                                                            {item?.subSections.map((child, childIndex) => {
                                                                                return (<li>
                                                                                    <div className="d-flex align-items-center gap-16" key={childIndex}>
                                                                                        <i className="fa-brands fa-youtube me-1 fa-lg" />
                                                                                        <p>{child}</p>
                                                                                    </div>
                                                                                    <p>{item.lectureLength}</p>
                                                                                </li>)
                                                                            })}
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })}
                                                    </div>
                                                </div>
                                                <div
                                                    className='tab-pane fade py-5'
                                                    id='instructor'
                                                    role='tabpanel'
                                                    aria-labelledby='instructor-tab'
                                                >
                                                    <div className="heading">
                                                        <h5 className="black fw-700 mb-32">Course Instructor</h5>
                                                    </div>
                                                    <div className='tutor-container p-24 bg-white-bordered br-12 gap-48'>
                                                        <div className='tutor-image'>
                                                            <img
                                                                src={
                                                                    course.data?.instructorInfo.instructorPhoto
                                                                        ? course.data?.instructorInfo.instructorPhoto
                                                                        : TeacherDefault
                                                                }
                                                                alt=''
                                                                style={{ width: '200px' }}
                                                            />
                                                        </div>
                                                        <div className='tutor-content'>
                                                            <h5 className='black mb-8 fw-700'>
                                                                {course.data?.instructorInfo.instructorName}
                                                            </h5>
                                                            <p className='mb-24'>
                                                                {course.data?.instructorInfo.instructorTitle}
                                                                <br />({course.data?.instructorInfo.instructorDesignation})
                                                            </p>
                                                            <p className='mb-24' style={{ textAlign: 'justify' }}>
                                                                {course.data?.instructorInfo.instructorSummary}
                                                            </p>
                                                            <ul className='list-unstyled m-0 social-icons'>
                                                                <li>
                                                                    <a
                                                                        href={course.data?.instructorInfo.instructorLinkedin}
                                                                        target='_blank'
                                                                        rel='noreferrer noopener'
                                                                    >
                                                                        <i className='fa-brands fa-linkedin' />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href={`mailto:${course.data?.instructorInfo.instructorEmail}`}
                                                                        target='_blank'
                                                                        rel='noreferrer noopener'
                                                                    >
                                                                        <i className='fa-regular fa-envelope' />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className='tab-pane fade py-5'
                                                    id='references'
                                                    role='tabpanel'
                                                    aria-labelledby='references-tab'
                                                >
                                                    <div className="heading">
                                                        <h5 className="black fw-700 mb-32">Course References</h5>
                                                    </div>
                                                    <div className="row">
                                                        {course.data?.courseReferences?.map((item, index) => {
                                                            return (
                                                                <div className="faq-block mb-8" key={index}>
                                                                    <div className="accordion-button d-flex align-items-center my-2">
                                                                        <i className={`fa-regular me-2 fa-xl ${item.referenceExt === "PDF" && 'fa-file-pdf'}`} />
                                                                        <p className="fw-500 w-100">{item.referenceName}</p>
                                                                        <div className="fw-500 w-100 dark-gray text-end me-2">
                                                                            <a className="cus-btn-4 px-0 py-2">Preview</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-4 order-xl-2 order-2'>
                                    <div className='course-sidebar bg-white-bordered p-24'>
                                        <div className='video-block mb-32'>
                                            {course.data?.coursePreview ? (
                                                <iframe
                                                    width='100%'
                                                    height='200'
                                                    src={`${course.data?.coursePreview}?controls=0`}
                                                    title='YouTube video player'
                                                    style={{ borderRadius: '10px' }}
                                                ></iframe>
                                            ) : (
                                                <img src={CourseSidebarImg} alt='' className='w-100 br-8' />
                                            )}
                                            <div className='label-tag video-tag subtitle'>Preview</div>
                                        </div>
                                        <div className='d-flex justify-content-between align-items-center mb-3'>
                                            <h6 className='black fw-700'>
                                                <span className='text-muted'>{course.data?.courseCode.slice(0, 10)}</span>
                                            </h6>
                                            <h4 className='black fw-700'>
                                                {course.data?.isLive && <span>
                                                    <del className='text-muted fw-200'>₹ {course.data?.courseMRP}</del> ₹{' '}
                                                    {course.data?.coursePrice}
                                                </span>}
                                            </h4>
                                        </div>
                                        {!course.data?.isLive && course.data?.courseStatus === 'expired' && (
                                            <a onClick={() => navigate('/courses')} className='cus-btn-3 w-100'>
                                                <span>Registration Closed</span>
                                                <span>Try Another</span>
                                            </a>
                                        )}
                                        {!course.data?.isLive && course.data?.courseStatus === 'coming' && (
                                            <a onClick={() => navigate('/courses')} className='cus-btn-3 w-100'>
                                                <span>Comming Soon.</span>
                                                <span>Try Another</span>
                                            </a>
                                        )}

                                        {config?.isCourseEnrollmentAllowed === 'true' && course.data?.isLive && (
                                            <a
                                                onClick={() => navigate(`/checkout/${course.data?._id}`)}
                                                className='cus-btn-3 w-100 mb-12'
                                            >
                                                <span>Buy Now</span>
                                                <span>Buy Now</span>
                                            </a>
                                        )}
                                        {course.data?.isMoneyback && (
                                            <p className='subtitle mb-24 text-center'>30-Day Money-Back Guarantee</p>
                                        )}
                                        <div className='d-flex align-items-center justify-content-between p-16 br-4 bg-light-white mb-8'>
                                            <div className='d-flex align-items-center gap-12'>
                                                <i className='fa-regular fa-user' />
                                                <p className='black fw-500'>Instructor</p>
                                            </div>
                                            <div className='d-flex'>
                                                <p className='fw-500'>{course.data?.instructorInfo.instructorName}</p>
                                            </div>
                                        </div>
                                        <div className='d-flex align-items-center justify-content-between p-16 br-4 bg-light-white mb-8'>
                                            <div className='d-flex align-items-center gap-12'>
                                                <i className='fa-regular fa-chart-line' />
                                                <p className='black fw-500'>Level</p>
                                            </div>
                                            <div className='d-flex'>
                                                <p className='fw-500'>{course.data?.courseLevel}</p>
                                            </div>
                                        </div>
                                        <div className='d-flex align-items-center justify-content-between p-16 br-4 bg-light-white mb-8'>
                                            <div className='d-flex align-items-center gap-12'>
                                                <i className='fa-regular fa-clock' />
                                                <p className='black fw-500'>Duration</p>
                                            </div>
                                            <div className='d-flex'>
                                                <p className='fw-500'>{course.data?.courseDuration}</p>
                                            </div>
                                        </div>
                                        <div className='d-flex align-items-center justify-content-between p-16 br-4 bg-light-white mb-8'>
                                            <div className='d-flex align-items-center gap-12'>
                                                <i className='fa-regular fa-users' />
                                                <p className='black fw-500'>Enrolled</p>
                                            </div>
                                            <div className='d-flex'>
                                                <p className='fw-500'>{course.data?.studentsEnrolled} Student</p>
                                            </div>
                                        </div>
                                        <div className='d-flex align-items-center justify-content-between p-16 br-4 bg-light-white mb-8'>
                                            <div className='d-flex align-items-center gap-12'>
                                                <i className='fa-regular fa-keynote' />
                                                <p className='black fw-500'>Lectures</p>
                                            </div>
                                            <div className='d-flex'>
                                                <p className='fw-500'>{course.data?.courseLecture} Lectures</p>
                                            </div>
                                        </div>
                                        <div className='d-flex align-items-center justify-content-between p-16 br-4 bg-light-white mb-8'>
                                            <div className='d-flex align-items-center gap-12'>
                                                <i className='fa-regular fa-globe' />
                                                <p className='black fw-500'>Language</p>
                                            </div>
                                            <div className='d-flex'>
                                                <p className='fw-500'>{course.data?.courseLanguage}</p>
                                            </div>
                                        </div>
                                        <div className='d-flex align-items-center justify-content-between p-16 br-4 bg-light-white mb-24'>
                                            <div className='d-flex align-items-center gap-12'>
                                                <i className='fa-regular fa-file-certificate' />
                                                <p className='black fw-500'>Certificate</p>
                                            </div>
                                            <div className='d-flex'>
                                                <p className='fw-500'>{course.data?.isCertificate ? 'Yes' : 'No'}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section >
    )
}
