import { useNavigate } from 'react-router-dom'

export const TermsAndConditions = () => {
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
                <h2 className='black mb-16 fw-700'>Terms and Conditions</h2>
            </div>
            <div className='legal-body px-3'>
                <p className='fw-400 mb-32'>
                    Welcome to EdTayyari (the "Website"). By accessing or using our Website, you (the "User")
                    agree to comply with and be bound by the following Terms and Conditions ("Terms"), which
                    govern your use of the Website, our courses, and related services offered by Sieka
                    Software Private Limited.
                </p>
                <p className='fw-400 mb-32'>
                    These Terms constitute a binding legal agreement between you and us. Please read these
                    Terms carefully. By using our Website, you acknowledge that you have read, understood, and
                    agree to be bound by these Terms, as well as any applicable laws and regulations. If you
                    do not agree to these Terms, you must refrain from using the Website.
                </p>
                <h6 className='fw-700 mb-16'>1. Definitions</h6>
                <p className='fw-400 mb-32'>
                    For the purpose of these Terms and Conditions:
                    <ul className='my-2'>
                        <li>
                            <b>"Website"</b> refers to the EdTayyari platform, owned and operated by Sieka
                            Software Private Limited, including all its subdomains, services, and content.
                        </li>
                        <li>
                            <b>"We," "Us," or "Our"</b> refers to Sieka Software Private Limited.
                        </li>
                        <li>
                            <b>"User"</b> refers to any individual, entity, or institution accessing or using the
                            Website.
                        </li>
                        <li>
                            <b>"Courses"</b> refer to the educational material, online tutorials, and any digital
                            content provided via EdTayyari.
                        </li>
                        <li>
                            <b>"Content"</b> includes, but is not limited to, text, videos, graphics, designs,
                            logos, downloadable resources, quizzes, and other educational materials hosted or
                            provided by EdTayyari.
                        </li>
                    </ul>
                </p>
                <h6 className='fw-700 mb-16'>2. Eligibility</h6>
                <p className='fw-400 mb-32'>
                    By using the Website and accessing any courses or services, you affirm that:
                    <ul className='my-2'>
                        <li>
                            You are at least 18 years of age or, if under 18, you have obtained parental or
                            guardian consent to use this Website.
                        </li>
                        <li>You have the legal authority to enter into binding contracts.</li>
                        <li>
                            You are not prohibited from using the Website under any applicable laws or
                            regulations.
                        </li>
                    </ul>
                    We reserve the right to refuse service, terminate accounts, and/or cancel orders at our
                    discretion, including without limitation if we believe that the User's conduct violates
                    applicable law or is harmful to our interests.
                </p>
                <h6 className='fw-700 mb-16'>3. Registration and Account</h6>
                <p className='fw-400 mb-32'>
                    To access certain features on EdTayyari, you may be required to create an account. You
                    agree to:
                    <ul className='my-2'>
                        <li>
                            Provide accurate, current, and complete information during the registration process.
                        </li>
                        <li>Keep your login credentials secure and confidential.</li>
                        <li>Be responsible for all activities that occur under your account.</li>
                        <li>Immediately notify us of any unauthorized access or use of your account.</li>
                    </ul>
                    EdTayyari reserves the right to suspend or terminate your account at any time if it
                    detects fraudulent activities, misuse, or breaches of these Terms.
                </p>
                <h6 className='fw-700 mb-16'>4. Purchasing Courses</h6>
                <p className='fw-400 mb-32'>
                    Courses available on EdTayyari can be purchased via our secure online platform. By
                    purchasing a course, you agree to the following:
                    <ul className='my-2'>
                        <li>
                            <b>Payment Process:</b> Payments are processed through trusted third-party payment
                            gateways, including Razorpay. All prices for courses are listed in "INR" and must be
                            paid in full before access to the course is granted.
                        </li>
                        <li>
                            <b>Pricing:</b> We reserve the right to modify course prices at any time without prior
                            notice. However, price changes will not affect purchases made prior to such changes.
                        </li>
                        <li>
                            <b>Coupons and Discounts:</b> If you have a valid coupon code or discount, you must
                            apply it at the time of purchase. No retrospective discounts will be applied.
                        </li>
                        <li>
                            <b>Refund Policy:</b> Due to the digital nature of our courses, no refunds will be
                            provided once access to the course has been granted, except in cases where technical
                            errors on our part prevent access. Please ensure that you review the course details
                            carefully before purchase.
                        </li>
                        <li>
                            <b>Currency and Conversion Fees:</b> International transactions may be subject to
                            currency conversion fees by your bank or payment provider. We are not responsible for
                            such additional fees.
                        </li>
                    </ul>
                </p>
                <h6 className='fw-700 mb-16'>5. Course Access and Usage</h6>
                <p className='fw-400 mb-32'>
                    Once you have purchased a course:
                    <ul className='my-2'>
                        <li>
                            You will receive access to the course content for the duration specified at the time
                            of purchase.
                        </li>
                        <li>
                            Course access is provided solely for personal, non-commercial use. You may not
                            distribute, share, copy, or sublicense the course or any of its materials to others.
                        </li>
                        <li>
                            You are responsible for ensuring that you meet any technical requirements necessary to
                            access the course, such as having a stable internet connection and compatible
                            software.
                        </li>
                        <li>
                            EdTayyari reserves the right to modify, update, or remove courses from the platform
                            without prior notice.
                        </li>
                    </ul>
                </p>
                <h6 className='fw-700 mb-16'>6. User Conduct</h6>
                <p className='fw-400 mb-32'>
                    When accessing EdTayyari, you agree to use the Website and its services responsibly and in
                    accordance with these Terms. Specifically, you agree that you will:
                    <ul className='my-2'>
                        <li>
                            Not engage in any activity that disrupts or interferes with the Website, servers, or
                            networks connected to the Website.
                        </li>
                        <li>
                            Not upload, post, or share any content that is unlawful, defamatory, obscene, or
                            infringes on the rights of others.
                        </li>
                        <li>
                            Not attempt to hack, reverse-engineer, or otherwise compromise the integrity or
                            security of EdTayyari.
                        </li>
                        <li>
                            Not use the Website for any fraudulent activities or in connection with any illegal
                            activities.
                        </li>
                    </ul>
                    EdTayyari reserves the right to investigate and take appropriate action, including legal
                    action, against any User who violates these terms.
                </p>
                <h6 className='fw-700 mb-16'>7. Intellectual Property</h6>
                <p className='fw-400 mb-32'>
                    All intellectual property on the Website, including but not limited to text, graphics,
                    logos, videos, audio files, and course materials, is owned by Sieka Software Private
                    Limited or its licensors. You agree that:
                    <ul className='my-2'>
                        <li>
                            You will not copy, reproduce, distribute, display, or create derivative works of any
                            content on EdTayyari without explicit written permission.
                        </li>
                        <li>
                            Unauthorized use of any intellectual property from EdTayyari may result in legal
                            action.
                        </li>
                    </ul>
                </p>
                <h6 className='fw-700 mb-16'>8. Disclaimers</h6>
                <p className='fw-400 mb-32'>
                    The courses and content provided on EdTayyari are intended for educational purposes only.
                    While we strive to offer high-quality materials, we do not guarantee that the information
                    provided will lead to specific outcomes, such as certification or employment.
                    Additionally:
                    <ul className='my-2'>
                        <li>
                            <b>No Warranty:</b> We make no representations or warranties about the accuracy,
                            completeness, or suitability of the courses for any specific purpose. The Website and
                            its content are provided on an "as-is" basis.
                        </li>
                        <li>
                            <b>Technical Issues:</b> EdTayyari will not be liable for any technical issues or
                            failures that may arise, including but not limited to connectivity problems, hardware
                            failures, or software incompatibilities.
                        </li>
                    </ul>
                </p>
                <h6 className='fw-700 mb-16'>9. Limitation of Liability</h6>
                <p className='fw-400 mb-32'>
                    To the maximum extent permitted by law, Sieka Software Private Limited will not be liable
                    for any direct, indirect, incidental, or consequential damages resulting from the use or
                    inability to use EdTayyari, including but not limited to loss of data, revenue, or
                    profits.
                </p>

                <h6 className='fw-700 mb-16'>10. Third-Party Services</h6>
                <p className='fw-400 mb-32'>
                    Our Website may integrate with third-party services such as payment gateways, hosting
                    providers, or educational platforms. These services are provided by independent entities,
                    and we are not responsible for their performance, availability, or any issues that arise
                    in connection with them. By using EdTayyari, you acknowledge that you may be subject to
                    additional terms and conditions provided by third-party services.
                </p>
                <h6 className='fw-700 mb-16'>11. Termination</h6>
                <p className='fw-400 mb-32'>
                    We reserve the right to suspend or terminate your access to EdTayyari at any time for any
                    reason, including but not limited to:
                    <ul className='my-2'>
                        <li>Violation of these Terms.</li>
                        <li>Engaging in fraudulent or unlawful activities.</li>
                        <li>Breaching any applicable local, state, national, or international laws.</li>
                    </ul>
                    Upon termination, you will lose access to any courses or materials you have purchased, and
                    no refund will be provided.
                </p>
                <h6 className='fw-700 mb-16'>12. Governing Law</h6>
                <p className='fw-400 mb-32'>
                    These Terms and Conditions will be governed by and construed in accordance with the laws
                    of India. Any disputes arising from or related to these Terms or the use of EdTayyari will
                    be subject to the exclusive jurisdiction of the courts of India.
                </p>
                <h6 className='fw-700 mb-16'>13. Privacy Policy</h6>
                <p className='fw-400 mb-32'>
                    Our Privacy Policy governs the collection, storage, and use of your personal data. By
                    using EdTayyari, you agree to our data collection and usage practices as outlined in the
                    Privacy Policy. This includes how we collect, protect, and disclose your information when
                    you visit our Website or make purchases.
                </p>
                <h6 className='fw-700 mb-16'>14. Changes to These Terms</h6>
                <p className='fw-400 mb-32'>
                    We reserve the right to modify these Terms at any time. Any changes will be effective upon
                    posting on the Website. It is your responsibility to regularly review these Terms to stay
                    informed of any updates. Continued use of the Website after changes have been made
                    constitutes acceptance of the revised Terms.
                </p>
                <h6 className='fw-700 mb-16'>15. Contact Us</h6>
                <p className='fw-400 mb-32'>
                    If you have any questions, concerns, or inquiries about these Terms and Conditions, you
                    can contact us at:
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
