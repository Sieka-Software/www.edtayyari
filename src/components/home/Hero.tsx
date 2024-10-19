import { useNavigate } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation'
import ArrowLine from '../../assets/media/vector/arrow-line.png'
import HeroBanner from '../../assets/media/hero/hero-banner.png'
import BannerUser1 from '../../assets/media/user/banner-user-1.png'
import BannerUser2 from '../../assets/media/user/banner-user-2.png'
import BannerUser3 from '../../assets/media/user/banner-user-3.png'
import BannerUser4 from '../../assets/media/user/banner-user-4.png'

export const Hero = () => {
    const navigate = useNavigate()
    return (
        <section className='hero-banner'>
            <div className='container-fluid'>
                <div className='mt-80 py-80 '>
                    <img src={ArrowLine} alt='' className='banner-element d-xl-block d-none' />
                    <div className='row align-items-center row-gap-4 justify-content-between pb-4'>
                        <div className='col-xl-7 order-xl-1 order-1'>
                            <div className='hero-content'>
                                <div className='hero-text mb-48'>
                                    <h2 className='white text-xl-start text-center'>
                                        Empowering Minds with
                                    </h2>
                                    <h3 className='white mb-48 text-xl-start text-center'>Exceptional Skills for
                                        <br className="d-sm-block d-lg-none" />
                                        <span className='underline-text color-sec fw-700 ms-2'>
                                            <TypeAnimation
                                                sequence={[
                                                    'Learning',
                                                    500,
                                                    'Leading',
                                                    500,
                                                    'Innovating',
                                                    '',
                                                    500,
                                                ]}
                                                repeat={Infinity}
                                            />
                                        </span>
                                    </h3>
                                    <p className='text-xl-start text-center lightest-gray fw-300'>
                                        Unlock your potential with expert guidance, innovative techniques, and practical knowledge to succeed in learning, and beyond!.
                                    </p>
                                </div>
                                <div className='hero-buttons d-flex gap-16 mb-48'>
                                    <a onClick={() => navigate('/courses')} className='cus-btn'>
                                        <span className='btn-text'>Explore Courses</span>
                                        <span>Explore Courses</span>
                                    </a>
                                    <a onClick={() => navigate('/about-us')} className='cus-btn-2'>
                                        <span className='btn-text'>Read More</span>
                                        <span>Read More</span>
                                    </a>
                                </div>
                                <div className='student-images-block d-lg-flex  d-none'>
                                    <div className='student-images'>
                                        <img src={BannerUser1} alt='' />
                                        <img src={BannerUser2} alt='' />
                                        <img src={BannerUser3} alt='' />
                                        <img src={BannerUser4} alt='' />
                                    </div>
                                    <br className="d-sm-block d-lg-none" />
                                    <h6 className='white font-sec fw-500'>
                                        <span className='color-sec fw-700'>1000+ </span> Students
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-5 order-xl-2 order-2'>
                            <div className='hero-image-block text-xl-start text-center'>
                                <img src={HeroBanner} alt='' />
                                <div className='online-course'>
                                    <div className='icon-box'>
                                        <i className="fa-regular fa-circle-user text-white fa-xl" />
                                    </div>
                                    <div className='container-text'>
                                        <h5 className='color-primary fw-700'>1000+</h5>
                                        <p className='fw-500'>Students</p>
                                    </div>
                                </div>
                                <div className='online-course tutor'>
                                    <div className='icon-box'>
                                        <i className="fa-solid fa-chalkboard-user text-white fa-lg" />
                                    </div>
                                    <div className='container-text'>
                                        <p className='fw-500'>Career Guide</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
