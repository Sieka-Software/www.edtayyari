import { useNavigate } from 'react-router-dom'

export const RefundPolicy = () => {
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
                <h2 className='black mb-16 fw-700'>Refund Policy</h2>
            </div>
            <div className='legal-body px-3'>
                <p className='fw-400 mb-32'>
                    Welcome to EdTayyari (the "Website"). By accessing or using our Website, you (the "User")
                    agree to comply with and be bound by the following Terms and Conditions ("Terms"), which
                    govern your use of the Website, our courses, and related services offered by Sieka
                    Software Private Limited.
                </p>
                <p className='fw-400 mb-32'>
                    At EdTayyari, we strive to provide you with high-quality online courses and a seamless
                    learning experience. We understand, however, that there may be instances where you are not
                    completely satisfied with a purchase. This Refund Policy outlines the terms under which
                    refunds are granted and the steps to request one.
                    <br />
                    <br />
                    Please read this policy carefully to ensure you understand your rights and obligations
                    when purchasing courses on EdTayyari.
                </p>
                <h6 className='fw-700 mb-16'>1. General Refund Policy</h6>
                <p className='fw-400 mb-32'>
                    Due to the digital nature of our courses and the immediate access granted upon purchase,
                    all sales are final. Once access to a course has been provided, no refunds, cancellations,
                    or exchanges will be permitted, except under certain specific circumstances outlined
                    below.
                </p>
                <h6 className='fw-700 mb-16'>2. Eligibility for Refunds</h6>
                <p className='fw-400 mb-32'>
                    <ul className='my-3'>
                        Refunds may be considered on a case-by-case basis, but only under the following
                        conditions:
                        <li>
                            <b>Technical Issues:</b> If technical issues on our part prevent you from accessing
                            the course materials after purchase, we will work with you to resolve the issue. If
                            the problem persists and cannot be resolved within a reasonable timeframe, you may be
                            eligible for a refund. Technical issues on the User's side, such as internet
                            connectivity or outdated software, are not covered under this policy.
                        </li>
                        <li>
                            <b>Duplicate Purchases:</b> If you accidentally purchase the same course more than
                            once, we will issue a refund for the duplicate transaction, provided you notify us
                            within 7 days of the purchase date.
                        </li>
                        <li>
                            <b>Incorrect Charges:</b> If you believe you have been charged incorrectly or charged
                            for a course you did not intend to purchase, please contact us within 7 days of the
                            charge, and we will investigate the matter. If a billing error is identified, a full
                            refund will be issued.
                        </li>
                    </ul>
                </p>
                <h6 className='fw-700 mb-16'>3. Refund Request Process</h6>
                <p className='fw-400 mb-32'>
                    To request a refund, you must contact us via info@edtayyari.com with the following
                    information:
                    <ul className='my-3'>
                        <li>Your full name and registered email address.</li>
                        <li>The course name and the date of purchase.</li>
                        <li>
                            A detailed explanation of the reason for your refund request, along with any
                            supporting documentation (e.g., screenshots of technical errors, transaction
                            receipts).
                        </li>
                    </ul>
                    Upon receiving your request, we will review the case and respond within 5-7 business days
                    to confirm eligibility for a refund. If a refund is approved, it will be processed within
                    10 business days using the original payment method.
                </p>
                <h6 className='fw-700 mb-16'>4. No Refunds for the Following Conditions</h6>
                <p className='fw-400 mb-32'>
                    Refunds will not be granted in the following scenarios:
                    <ul className='my-3'>
                        <li>
                            <b>Change of Mind:</b> If you have accessed the course materials and decide you no
                            longer want to pursue the course, no refund will be provided. Please review the course
                            descriptions and previews carefully before making a purchase.
                        </li>
                        <li>
                            <b>Course Content Satisfaction:</b> Our courses are designed with high-quality
                            educational materials. However, satisfaction with the course content or perceived
                            quality is subjective and not a valid reason for a refund.
                        </li>
                        <li>
                            <b>Failure to Complete:</b> If you fail to complete the course for personal reasons
                            (e.g., lack of time, change of schedule), you are not eligible for a refund.
                        </li>
                        <li>
                            <b>Misuse of Course Materials:</b> Any unauthorized sharing, reproduction, or
                            distribution of course content will result in the termination of your account and no
                            refund will be provided.
                        </li>
                    </ul>
                </p>
                <h6 className='fw-700 mb-16'>5. Chargebacks</h6>
                <p className='fw-400 mb-32'>
                    If we receive a chargeback or dispute notice from your bank or credit card provider, we
                    reserve the right to suspend your account and restrict access to any purchased courses
                    until the chargeback issue is resolved. Filing a chargeback request with your payment
                    provider without contacting us first will be considered a breach of this Refund Policy,
                    and we reserve the right to dispute the chargeback.
                </p>
                <h6 className='fw-700 mb-16'>6. Digital Nature of Courses</h6>
                <p className='fw-400 mb-32'>
                    Since the courses offered on EdTayyari are digital products and access to the content is
                    granted immediately upon purchase, we do not offer refunds based on dissatisfaction with
                    the content or lack of use. Once a course is purchased and accessed, you are considered to
                    have "consumed" the product. It is your responsibility to review all available information
                    about the course, including curriculum details and previews, before making a purchase
                    decision.
                </p>
                <h6 className='fw-700 mb-16'>7. Refunds for Promotional Offers</h6>
                <p className='fw-400 mb-32'>
                    Refunds are not available for courses purchased during promotional offers or at discounted
                    prices. Any refunds granted for full-price purchases will be issued at the price paid,
                    minus any discounts or coupons applied during the promotional period.
                </p>
                <h6 className='fw-700 mb-16'>8. Refunds for Bundled Courses</h6>
                <p className='fw-400 mb-32'>
                    In the case of bundled course purchases (where multiple courses are sold together at a
                    discounted price), refunds will not be issued for individual courses within the bundle. If
                    a refund is granted, it will apply to the entire bundle, and access to all included
                    courses will be revoked.
                </p>
                <h6 className='fw-700 mb-16'>9. Refund Payment Method</h6>
                <p className='fw-400 mb-32'>
                    Refunds will be processed using the same payment method used for the original transaction.
                    Depending on your bank or payment provider, it may take 5-10 business days for the refund
                    to appear on your statement.
                </p>
                <h6 className='fw-700 mb-16'>10. Modifications to This Refund Policy</h6>
                <p className='fw-400 mb-32'>
                    We reserve the right to modify or update this Refund Policy at any time. Any changes will
                    be posted on this page, and the “Effective Date” at the top will be updated accordingly.
                    It is your responsibility to review this policy regularly. Continued use of the Website or
                    our services after any modifications signifies your acceptance of the updated Refund
                    Policy.
                </p>
                <h6 className='fw-700 mb-16'>11. Contact Us</h6>
                <p className='fw-400 mb-32'>
                    If you have any questions or concerns regarding this Refund Policy or require further
                    clarification, please contact us:
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
                    Thank you for choosing EdTayyari. We appreciate your understanding and cooperation.
                </p>
            </div>
        </div>
    )
}
