import { useNavigate } from 'react-router-dom'

export const PrivacyPolicy = () => {
    const navigate = useNavigate()

    return (
        <div id='legal' className='container my-5'>
            <div className='text-end mb-5'>
                <a onClick={() => navigate('/')} className='cus-btn-3 mt-sm-0 mt-48'>
                    <span className='btn-text'>
                        <i className='fa-regular fa-arrow-left me-2' />
                        Back to Home
                    </span>
                    <span>
                        <i className='fa-regular fa-arrow-left me-2' />
                        Back to Home
                    </span>
                </a>
            </div>
            <div className='title text-center mb-5'>
                <h2 className='black mb-16 fw-700'>Privacy Policy</h2>
            </div>
            <div className='legal-body px-3'>
                <p className='fw-400 mb-32'>
                    At EdTayyari, owned and operated by Sieka Software Private Limited, we are committed to
                    protecting your privacy. This Privacy Policy explains how we collect, use, share, and
                    protect your personal information when you use our website and services, including
                    purchasing courses and interacting with us.
                    <br />
                    <br />
                    Please take the time to read this policy carefully to understand how your information is
                    handled.
                </p>
                <h6 className='fw-700 mb-16'>1. Information We Collect</h6>
                <p className='fw-400 mb-32'>
                    We collect various types of information when you visit our website, register for courses,
                    or interact with our services. This may include:
                    <ul className="my-2">
                        <li>
                            <b>Personal Information:</b> This includes your name, email address, phone number,
                            payment details, and any other information you provide when creating an account,
                            purchasing a course, or contacting us.
                        </li>
                        <li>
                            <b>Non-Personal Information:</b> This includes data collected automatically, such as
                            your IP address, browser type, device information, pages viewed, and the time spent on
                            our website. This data helps us understand how users interact with EdTayyari and
                            improve our services.
                        </li>
                        <li>
                            <b>Course Usage Data:</b> We may collect information on your progress and activities
                            within the courses, such as completed lessons, quiz results, and other
                            performance-related data.
                        </li>
                    </ul>
                </p>
                <h6 className='fw-700 mb-16'>2. How We Use Your Information</h6>
                <p className='fw-400 mb-32'>
                    The information we collect is used for the following purposes:
                    <ul className="my-2">
                        <li>
                            <b>Account Management:</b> To create, manage, and secure your account on EdTayyari.
                        </li>
                        <li>
                            <b>Course Access:</b> To provide you with access to purchased courses and track your
                            progress within them.
                        </li>
                        <li>
                            <b>Customer Support:</b> To respond to your inquiries, support requests, or
                            complaints.
                        </li>
                        <li>
                            <b>Payment Processing: </b>To process payments securely via trusted third-party
                            payment processors.
                        </li>
                        <li>
                            <b>Personalization:</b> To offer you personalized content, recommendations, and
                            services based on your preferences and behavior.
                        </li>
                        <li>
                            <b>Communication:</b> To send you transactional emails, notifications about course
                            updates, promotional offers, or important policy changes.
                        </li>
                    </ul>
                    We will never sell or lease your personal information to third parties for marketing
                    purposes.
                </p>
                <h6 className='fw-700 mb-16'>3. Data Security and Storage</h6>
                <p className='fw-400 mb-32'>
                    We take your privacy and data security seriously. At EdTayyari, we implement advanced
                    technologies and follow industry best practices to ensure the protection of your
                    information.
                    <ul className="my-2">
                        <li>
                            <b>Data Storage:</b> All data, including personal information and course-related data,
                            is securely stored in a modern, secured NoSQL database. Our databases are regularly
                            maintained and protected using encryption protocols and secure access controls,
                            ensuring that your data remains safe.
                        </li>
                        <li>
                            <b>Data Encryption:</b> All communication between your device and our servers is
                            encrypted using the latest security standards, including SSL/TLS encryption. This
                            ensures that sensitive information, such as login credentials and payment details, is
                            protected from unauthorized access during transmission.
                        </li>
                    </ul>
                </p>
                <h6 className='fw-700 mb-16'>4. Third-Party Services</h6>
                <p className='fw-400 mb-32'>
                    In order to provide a seamless experience, we may share your data with trusted third-party
                    service providers for specific tasks such as payment processing, email communication, and
                    analytics. These providers are bound by strict data protection agreements and are only
                    permitted to use your data for the services we have authorized. Some of the third-party
                    services we use include:
                    <ul className="my-2">
                        <li>
                            <b>Payment Processors:</b> We use secure payment gateways (e.g., Razorpay) to handle
                            transactions. Your payment information is processed securely, and we do not store
                            sensitive credit card details on our servers.
                        </li>
                        <li>
                            <b>Analytics:</b> We may use third-party analytics tools to track user behavior and
                            interactions on the Website. These tools help us improve the user experience and
                            optimize our services. However, no personally identifiable information is shared for
                            this purpose.
                        </li>
                    </ul>
                </p>
                <h6 className='fw-700 mb-16'>5. Data Retention</h6>
                <p className='fw-400 mb-32'>
                    We retain your personal data for as long as is necessary to fulfill the purposes outlined
                    in this Privacy Policy, such as providing access to courses, customer support, or meeting
                    legal obligations. If you wish to delete your account or request the deletion of your
                    personal data, you may mail us at info@edtayyari.com. Upon receiving your
                    request, we will delete your information, unless we are required to retain it for legal,
                    regulatory, or internal record-keeping purposes.
                </p>
                <h6 className='fw-700 mb-16'>6. Your Rights</h6>
                <p className='fw-400 mb-32'>
                    You have rights over the personal information we hold about you. These include:
                    <ul className="my-2">
                        <li>
                            <b>Access:</b> You can request a copy of the data we have about you.
                        </li>
                        <li>
                            <b>Correction:</b> You can request corrections to any inaccurate or incomplete data.
                        </li>
                        <li>
                            <b>Deletion:</b> You can request the deletion of your data, subject to certain legal
                            or regulatory requirements.
                        </li>
                        <li>
                            <b>Withdrawal of Consent:</b> You may withdraw your consent to data processing at any
                            time, though this may impact your ability to access certain services or courses.
                        </li>
                    </ul>
                    To exercise these rights, please contact us at info@edtayyari.com.
                </p>
                <h6 className='fw-700 mb-16'>7. Cookies and Tracking Technologies</h6>
                <p className='fw-400 mb-32'>
                    EdTayyari uses cookies and similar tracking technologies to enhance your browsing
                    experience. Cookies are small text files stored on your device that help us remember your
                    preferences, maintain your session, and analyze website usage. Types of Cookies We Use:
                    <ul className="my-2">
                        <li>
                            <b>Essential Cookies:</b> Necessary for the operation of the website, such as
                            maintaining your session and ensuring security.
                        </li>
                        <li>
                            <b>Analytical Cookies:</b> Help us understand how users engage with EdTayyari and
                            improve our services.
                        </li>
                        <li>
                            <b>Marketing Cookies:</b> Used to deliver personalized ads or promotional offers.
                        </li>
                    </ul>
                    You can manage your cookie preferences through your browser settings. However, disabling
                    certain cookies may affect your ability to use the full functionality of our website.
                </p>
                <h6 className='fw-700 mb-16'>8. Data Sharing and Disclosure</h6>
                <p className='fw-400 mb-32'>
                    We do not share, sell, or distribute your personal information to third parties without
                    your explicit consent, except as necessary to provide our services or comply with legal
                    obligations. We may disclose your information:
                    <ul className="my-2">
                        <li>
                            <b>To Service Providers:</b> To trusted third-party partners who assist us in
                            operating the Website and providing services, as long as they agree to keep this
                            information confidential and use it only for the purposes we specify.
                        </li>
                        <li>
                            <b>For Legal Requirements:</b> We may disclose your information if required by law, to
                            protect our rights, or in response to a valid request from law enforcement or
                            regulatory authorities.
                        </li>
                    </ul>
                </p>
                <h6 className='fw-700 mb-16'>9. Children’s Privacy</h6>
                <p className='fw-400 mb-32'>
                    EdTayyari is not directed at individuals under the age of 18, and we do not knowingly
                    collect personal information from children under 18 without verifiable parental consent.
                    If we discover that a child under 18 has provided us with personal data, we will take
                    steps to delete that data promptly.
                </p>
                <h6 className='fw-700 mb-16'>10. International Data Transfers</h6>
                <p className='fw-400 mb-32'>
                    If you are accessing EdTayyari from outside of India, please note that your personal
                    information may be transferred to, stored, and processed in countries other than your own.
                    By using our services, you consent to the transfer of information to countries outside
                    your country of residence, which may have different data protection laws.
                </p>
                <h6 className='fw-700 mb-16'>11. Changes to This Privacy Policy</h6>
                <p className='fw-400 mb-32'>
                    We reserve the right to update or modify this Privacy Policy at any time. Any changes will
                    be posted on this page, with the “Effective Date” updated accordingly. It is your
                    responsibility to review this policy periodically. Your continued use of EdTayyari after
                    any modifications signifies your acceptance of the updated Privacy Policy.
                </p>
                <h6 className='fw-700 mb-16'>12. Contact Us</h6>
                <p className='fw-400 mb-32'>
                    If you have any questions or concerns about this Privacy Policy or how we handle your
                    data, please contact us at:
                    <ul className='my-3'>
                        <li>
                            <b>Email:</b> info@edtayyari.com
                        </li>
                        <li>
                            <b>Phone:</b> +91 908495XXXX
                        </li>
                        <li>
                            <b>Mailing Address:</b> Sieka Software (OPC) Private Limited, Katsahar, Harpur Budhat,
                            Gorakhpur, Sahjanwa, Uttar Pradesh, India, 273209
                        </li>
                    </ul>
                    Thank you for using EdTayyari. We look forward to providing you with an exceptional
                    learning experience.
                </p>
            </div>
        </div>
    )
}
