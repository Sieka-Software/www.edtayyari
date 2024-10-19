import { useNavigate } from 'react-router-dom'
import Choose1 from './../../assets/media/icons/choose-1.png'
import Choose2 from './../../assets/media/icons/choose-2.png'
import Choose3 from './../../assets/media/icons/choose-3.png'
import Choose4 from './../../assets/media/icons/choose-4.png'
import Choose5 from './../../assets/media/icons/choose-5.png'

export const Choose = () => {
    const navigate = useNavigate()

    const headings = [
        {
            heading: 'Flexible Learning',
            text: 'We prioritize your convenience, allowing you to learn at your own pace and on your schedule. With our flexible options, you can access courses from anywhere, ensuring a seamless learning experience.',
            icon: Choose2,
        },
        {
            heading: 'Learn Anything',
            text: 'Our diverse range of courses empowers you to explore and master any topic that interests you. From technical skills to personal development, we provide the knowledge and resources you need to thrive.',
            icon: Choose3,
        },
        {
            heading: 'Affordable Pricing',
            text: 'Education should be accessible to all, so we provide competitive pricing without sacrificing quality. Explore our affordable options tailored to fit your budget and enhance your learning.',
            icon: Choose4,
        },
        {
            heading: 'Certification',
            text: 'Stand out in today’s competitive job market with our industry-recognized certifications. Our courses equip you with valuable skills and credentials that enhance your career prospects and validate your expertise.',
            icon: Choose5,
        },
    ]

    return (
        <section className='why-choose-us py-80'>
            <div className='container-fluid'>
                <div className='row g-2'>
                    <div className='col-xl-8 p-2'>
                        <div className='choose-block d-flex align-items-center justify-content-between bg-white'>
                            <div className='text-box mb-12'>
                                <h2 className='black mb-16 fw-700'>Why Choose Us</h2>
                                <p className='mb-32'>
                                    High-quality, affordable education accessible to all learners seeking excellence
                                    without financial burden, ensuring accessibility and excellence.
                                </p>
                                <a onClick={() => navigate('/courses')} className='cus-btn-3'>
                                    <span className='btn-text'>Learn More</span>
                                    <span>Learn More</span>
                                </a>
                            </div>
                            <img src={Choose1} alt='' className='choose-icon d-sm-block d-none mb-12' />
                        </div>
                    </div>
                    {headings.map((item, index) => {
                        return (
                            <div className='col-xl-4 col-lg-6 col-md-6 p-2' key={index}>
                                <div className='choose-block bg-white'>
                                    <img src={item.icon} alt='' className='choose-icon-2 mb-24' />
                                    <div className='text-box'>
                                        <h5 className='color-primary mb-16 fw-700 choose-heading font-sec'>
                                            {item.heading}
                                        </h5>
                                        <p style={{ height: "100px" }}>
                                            {item.text}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
