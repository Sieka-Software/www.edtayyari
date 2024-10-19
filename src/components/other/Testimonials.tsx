import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import TestUser1 from '../../assets/media/user/test-user-1.png'
import Quotes from '../../assets/media/icons/quotes.png'

export const Testimonials = () => {
    const settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        draggable: true,
        speed: 800,
        autoplaySpeed: 2000,
        className: 'testimonials-slider g-4',
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    }

    const Testimonials = [
        {
            id: 1,
            name: 'Edmon Birchwood',
            title: 'Research Assistant III',
            image: TestUser1,
            rate: 4,
            course: 'Literature and Society',
            feedback:
                'The instructor was knowledgeable and helpful. They provided clear explanations and examples.',
        },
        {
            id: 2,
            name: 'Bruno Yelding',
            title: 'Payment Adjustment Coordinator',
            image: TestUser1,
            rate: 3,
            course: 'Introduction to Biology',
            feedback:
                'The instructor was knowledgeable and helpful. They provided clear explanations and examples.',
        },
        {
            id: 3,
            name: 'Catharina Peskett',
            title: 'Junior Executive',
            image: TestUser1,
            rate: 4,
            course: 'Mathematics for Beginners',
            feedback:
                'The instructor was knowledgeable and helpful. They provided clear explanations and examples.',
        },
        {
            id: 4,
            name: 'Albertine Charlon',
            title: 'Chemical Engineer',
            image: TestUser1,
            rate: 5,
            course: 'Computer Science 101',
            feedback:
                'The instructor was knowledgeable and helpful. They provided clear explanations and examples.',
        },
        {
            id: 5,
            name: 'Jenna Irce',
            title: 'Engineer IV',
            image: TestUser1,
            rate: 3,
            course: 'History of Art',
            feedback:
                'The instructor was knowledgeable and helpful. They provided clear explanations and examples.',
        },
        {
            id: 6,
            name: 'Wilhelm Blackney',
            title: 'Design Engineer',
            image: TestUser1,
            rate: 4,
            course: 'Mathematics for Beginners',
            feedback:
                'I would highly recommend this course to others looking to expand their knowledge in this area.',
        },
        {
            id: 7,
            name: 'Elli Wherry',
            title: 'Electrical Engineer',
            image: TestUser1,
            rate: 2,
            course: 'Literature and Society',
            feedback:
                'The course was very informative and engaging. I learned a lot of new concepts and skills.',
        },
        {
            id: 8,
            name: 'Leland Gibbetts',
            title: 'Assistant Professor',
            image: TestUser1,
            rate: 1,
            course: 'Computer Science 101',
            feedback:
                'The instructor was knowledgeable and helpful. They provided clear explanations and examples.',
        },
        {
            id: 9,
            name: 'Sonia Procter',
            title: 'Senior Developer',
            image: TestUser1,
            rate: 4,
            course: 'History of Art',
            feedback:
                'The instructor was knowledgeable and helpful. They provided clear explanations and examples.',
        },
        {
            id: 10,
            name: 'Pamelina Fontin',
            title: 'Product Engineer',
            image: TestUser1,
            rate: 3,
            course: 'History of Art',
            feedback:
                'The course was very informative and engaging. I learned a lot of new concepts and skills.',
        },
    ]

    return (
        <section className='testimonials-section py-40'>
            <div className='container-fluid mb-5'>
                <div className='heading mb-48'>
                    <h2 className='black fw-700 mb-8'>What Our Students Say</h2>
                    <div className='d-sm-flex align-items-center justify-content-between'>
                        <p>
                            Insights from Our Students: Hear Their Experiences and
                            <br className='d-sm-block d-none' /> Success Stories.
                        </p>
                    </div>
                </div>
                <div className='testimonials-wrapper'>
                    <Slider {...settings}>
                        {Testimonials.map((item, index) => (
                            <div className='px-1' key={index}>
                                <div className='testimonials-block bg-white'>
                                    <div className='image-box mb-24'>
                                        <div className='d-flex align-items-center'>
                                            <img src={item.image} alt='' />
                                            <div className='user-name ms-4'>
                                                <h6 className='fw-700 black'>{item.name}</h6>
                                                <p className=''>{item.title}</p>
                                            </div>
                                            <img src={Quotes} alt='' />
                                        </div>
                                    </div>
                                    <div className='hr-line mb-24' />
                                    <p className='black fw-600 mb-16'>{item.course}</p>
                                    <p>{item.feedback}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    )
}
