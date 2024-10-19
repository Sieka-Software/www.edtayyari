import { useEffect, useState } from 'react'
import { useAppSelector } from '../../store'
import { useNavigate, useLocation } from 'react-router-dom';
import * as Common from "../alert";
import { CoursesLoader } from './CoursesLoader'
import { CourseCard } from './CourseCard'

export const CoursesRoot = () => {
    const navigate = useNavigate()
    const pathname = useLocation().pathname;
    const { courses } = useAppSelector((state) => state.work)
    const { health } = useAppSelector((state) => state.master)
    const [selectedCategory, setSelectedCategory] = useState<String>('All Courses')
    const [categories, setCategories] = useState<String[] | null>([])
    const [filteredCourses, setFilteredCourses] = useState<any[]>()

    useEffect(() => {
        if (courses && courses.data) {
            let coursesList = courses.data
            let uniqueCategories: string[] = [];

            if (pathname === "/courses") {
                uniqueCategories = [
                    ...new Set(coursesList.map((course: { courseCategory: any }) =>
                        course.courseCategory || ''
                    )),
                ];
            } else {
                let updatedCourses = coursesList.filter((course: { isLive: boolean }) => { course.isLive });

                uniqueCategories = [
                    ...new Set(updatedCourses.map((course: { courseCategory: any }) =>
                        course.courseCategory || ''
                    )),
                ];
            }

            uniqueCategories.sort((a: any, b: any) => a.localeCompare(b))
            setCategories(uniqueCategories)
            setFilteredCourses(courses.data)
        }
    }, [courses])

    useEffect(() => {
        if (selectedCategory === 'All Courses') setFilteredCourses(courses.data)
        else
            setFilteredCourses(
                courses.data?.filter(
                    (course: { courseCategory: any }) => course.courseCategory === selectedCategory
                )
            )
    }, [selectedCategory])

    return (
        <section id='courses' className='courses-section pb-40'>
            <div className='container-fluid'>
                <div className='heading mb-48'>
                    <h2 className='black fw-700 mb-32'>Our Latest Course</h2>
                    <div className='row align-items-center'>
                        <ul className={`nav nav-tabs col-md-6 col-12 ps-3`}>
                            <li className={`nav-item`}>
                                <button
                                    className={`nav-link ${selectedCategory === 'All Courses' && 'active'}`}
                                    onClick={() => setSelectedCategory('All Courses')}
                                >
                                    All Courses
                                </button>
                            </li>
                            {categories?.map((category, index) => {
                                return (
                                    <li className='nav-item' key={index}>
                                        <button
                                            className={`nav-link ${category === selectedCategory && 'active'}`}
                                            onClick={() => setSelectedCategory(category)}
                                        >
                                            {category}
                                        </button>
                                    </li>
                                )
                            })}
                        </ul>
                        <div className='text-end mt-sm-0 mt-48 col-md-6 col-12'>
                            {pathname === "/courses" ?
                                <a onClick={() => navigate("/")} className="cus-btn-3">
                                    <span className="btn-text">
                                        <i className='fa-regular fa-arrow-left me-2' />
                                        Back to Home
                                    </span>
                                    <span>
                                        <i className='fa-regular fa-arrow-left me-2' />
                                        Back to Home
                                    </span>
                                </a>
                                : <a onClick={() => navigate("/courses")} className="cus-btn-3">
                                    <span className="btn-text">See All Courses</span>
                                    <span>See All Courses</span>
                                </a>}
                        </div>
                    </div>
                </div>
                {health && courses.loading && <CoursesLoader />}
                {(!health || (!courses.loading && courses.data.length === 0)) && <Common.EmptyData />}
                {health && !courses.loading && courses.data.length > 0 && (
                    <div className='row'>
                        {filteredCourses?.map((course: CourseType, index: any) => {
                            return <CourseCard course={course} key={index} />
                        })}
                    </div>
                )}
            </div>
        </section>
    )
}
