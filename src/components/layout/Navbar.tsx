import { useEffect, useState } from 'react'
import { useAppSelector } from '../../store'
import { useNavigate, useLocation } from 'react-router-dom'
import Logo from "../../assets/media/logo.svg";

export const Navbar = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [isMenuExpanded, setIsMenuExpanded] = useState(false)
    const [coursesData, setCoursesData] = useState<any>([])
    const { config } = useAppSelector(state => state.master);
    const { courses } = useAppSelector(state => state.work);

    useEffect(() => {
        if (courses.data.length > 0) {
            setCoursesData(courses.data.map((course: CourseType) => ({
                name: course.courseName,
                path: `/course/${course._id}`,
            })));
        }
    }, [courses.data])

    const handleClick = (path: string) => {
        navigate(path);
        setIsMenuExpanded(false);
    }

    const Links = [
        {
            name: 'Home',
            path: '/',
        },
        {
            name: 'About Us',
            path: '/about-us',
        },
        {
            name: 'Courses',
            path: '/courses',
            child: coursesData,
        },
        {
            name: 'Contact Us',
            path: '/contact-us',
        },
        {
            name: 'Others',
            child: [
                {
                    name: 'C++',
                    path: '/c++',
                },
            ],
        },
    ]

    return (
        <>
            <header className='header'>
                <div className='container-fluid'>
                    <nav className='navigation d-flex align-items-center justify-content-between'>
                        <a className='d-flex align-items-center'>
                            <img src={Logo} alt='EdTayyari' className='header-logo' />
                        </a>
                        <div className='menu-button-right'>
                            <div className='main-menu__nav'>
                                <ul className='main-menu__list'>
                                    {Links?.map((link: any, index: number) => {
                                        return (
                                            <li key={index}>
                                                <a

                                                    onClick={() => navigate(link.path)}
                                                    className={`${location.pathname.includes(link.path) &&
                                                        link.name !== 'Home' &&
                                                        'active font-weight-light'
                                                        }
                                                    ${location.pathname === '/' &&
                                                        link.name === 'Home' &&
                                                        'active font-weight-light'
                                                        }
                                                    `}
                                                >
                                                    {link.name}
                                                    {link.child && link.name !== "Courses" && (
                                                        <i className='fa-solid fa-chevron-down fa-2xs d-xl-block d-none' style={{ marginLeft: "-10px" }} />
                                                    )}
                                                    {link.child && link.name === "Courses" && coursesData.length > 0 && (
                                                        <i className='fa-solid fa-chevron-down fa-2xs d-xl-block d-none' style={{ marginLeft: "-10px" }} />
                                                    )}
                                                </a>
                                                <ul>
                                                    {link.child?.map((childLink: any, childIndex: number) => {
                                                        return (
                                                            <li key={childIndex}>
                                                                <a

                                                                    style={{ width: "300px", lineHeight: "auto" }}
                                                                    onClick={() => navigate(childLink.path)}
                                                                >
                                                                    {childLink.name}
                                                                </a>
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className='main-menu__right'>
                            <div className='search-heart-icon d-sm-flex d-none align-items-center gap-24'>
                                {config?.isCourseEnrollmentAllowed === "true" && <a onClick={() => navigate("/courses")} className='cus-btn'>
                                    <span className='btn-text'>Enroll Now</span>
                                    <span>Enroll</span>
                                </a>}
                            </div>
                            <a

                                className='d-xl-none d-flex main-menu__toggler mobile-nav__toggler'
                                onClick={() => setIsMenuExpanded(true)}
                            >
                                {!isMenuExpanded && <i className='fa-regular fa-bars' />}
                            </a>
                        </div>
                    </nav>
                </div>
            </header>
            <div className={`mobile-nav__wrapper ${isMenuExpanded ? 'expanded' : ''}`}>
                <div className='mobile-nav__overlay' onClick={() => setIsMenuExpanded(false)} />
                <span className='mobile-nav__close mobile-nav__toggler m-5'>
                    {isMenuExpanded && <i className='fa-solid fa-times fa-lg' onClick={() => setIsMenuExpanded(false)} />}
                </span>
                <div className='mobile-nav__content'>
                    <div className='logo-box text-center'>
                        <a >
                            <img src={Logo} alt='' />
                        </a>
                    </div>
                    <ul className='main-menu__list'>
                        {Links?.map((link: any, index: number) => {
                            const [isExpanded, setExpanded] = useState(false);
                            return (
                                <li key={index}>
                                    <a

                                        className={`${isExpanded ? 'expanded' : ""} `}
                                    >
                                        <span onClick={() => handleClick(link.path)}>{link.name}</span>
                                        {link.child && link.name !== "Courses" && (
                                            <button onClick={() => setExpanded(!isExpanded)} className={`${isExpanded ? 'expanded' : ""} `}><i className={`fa fa-angle-${isExpanded ? 'up' : 'down'}`} /></button>
                                        )}
                                        {link.child && link.name === "Courses" && coursesData.length > 0 && (
                                            <button onClick={() => setExpanded(!isExpanded)} className={`${isExpanded ? 'expanded' : ""} `}><i className={`fa fa-angle-${isExpanded ? 'up' : 'down'}`} /></button>
                                        )}
                                    </a>
                                    <ul style={{ display: `${isExpanded ? 'block' : 'none'}` }}>
                                        {link.child?.map((childLink: any, childIndex: number) => {
                                            return (
                                                <li key={childIndex} className='my-2' style={{fontSize:"12px"}}>
                                                    <a

                                                        onClick={() => handleClick(childLink.path)}
                                                    >
                                                        {childLink.name}
                                                    </a>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </li>
                            )
                        })}
                    </ul>
                    <ul className='mobile-nav__contact list-unstyled'>
                        <li>
                            <i className='fas fa-envelope' />
                            <a href='mailto:example@company.com'>info@edtayyari.com</a>
                        </li>
                        <li>
                            <i className='fa fa-phone-alt' />
                            <a href='tel:+12345678'>+91 9084950475</a>
                        </li>
                    </ul>
                    <div className='mobile-nav__social'>
                        <a >
                            <i className='fa-brands fa-x-twitter' />
                        </a>
                        <a >
                            <i className='fab fa-facebook' />
                        </a>
                        <a >
                            <i className='fab fa-instagram' />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
