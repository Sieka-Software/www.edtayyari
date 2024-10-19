import { useNavigate } from 'react-router-dom'

export const SecurityPolicy = () => {
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
                <h2 className='black mb-16 fw-700'>Security Policy</h2>
            </div>
            <div className='legal-body px-3'>
                <p className='fw-400 mb-32'>
                    Welcome to EdTayyari (the "Website"). By accessing or using our Website, you (the "User")
                    agree to comply with and be bound by the following Terms and Conditions ("Terms"), which
                    govern your use of the Website, our courses, and related services offered by Sieka
                    Software Private Limited. At EdTayyari, we take the security of your personal information
                    and data very seriously. This Security Policy outlines the various measures we have
                    implemented to protect the confidentiality, integrity, and availability of the data
                    collected on our platform. Our goal is to provide a safe and secure environment for all
                    our users when accessing our courses and services.
                </p>
                <h6 className='fw-700 mb-16'>1. Data Security Measures</h6>
                <p className='fw-400 mb-32'>
                    We employ industry-standard security protocols and technologies to protect all user data
                    collected through our platform. Below are the primary security measures in place:
                    <ul className='my-3'>
                        <li>
                            <b>Encryption:</b> All sensitive data, including personal and payment information, is
                            encrypted using SSL/TLS (Secure Socket Layer/Transport Layer Security) during
                            transmission between your device and our servers. This ensures that any data you
                            provide is encrypted and safe from interception by unauthorized third parties.
                        </li>
                        <li>
                            <b>Secured Data Storage:</b> Data collected on our platform is securely stored in a
                            modern, NoSQL database that is equipped with access control mechanisms, encryption,
                            and advanced security features. Only authorized personnel have access to this data,
                            and all sensitive information is stored in a manner that ensures its confidentiality
                            and integrity.
                        </li>
                        <li>
                            <b>Access Control: </b>Access to user data and our system resources is restricted to
                            only those who need it for legitimate business purposes. We use multi-factor
                            authentication (MFA) and other identity verification methods to prevent unauthorized
                            access to our systems.
                        </li>
                    </ul>
                </p>
                <h6 className='fw-700 mb-16'>2. Secure Payment Processing</h6>
                <p className='fw-400 mb-32'>
                    We partner with trusted third-party payment gateways such as Razorpay to handle
                    transactions securely. <br />
                    The following steps are taken to ensure the safety of your payment
                    <ul className='my-3'>
                        information:
                        <li>
                            <b>PCI-DSS Compliance:</b> Our payment processors are PCI-DSS (Payment Card Industry
                            Data Security Standard) compliant, which means they adhere to strict guidelines for
                            the secure handling, storage, and transmission of credit card information.
                        </li>
                        <li>
                            <b>No Storage of Credit Card Information:</b> EdTayyari does not store your credit
                            card information on our servers. All payment details are securely processed by our
                            third-party payment partners.
                        </li>
                        <li>
                            <b>Secure Transactions:</b> Every transaction on EdTayyari is encrypted and processed
                            over secure channels to protect against fraud or unauthorized access.
                        </li>
                    </ul>
                </p>
                <h6 className='fw-700 mb-16'>3. User Account Security</h6>
                <p className='fw-400 mb-32'>
                    To protect your account, we recommend that you follow these security best practices:
                    <ul className='my-3'>
                        <li>
                            <b>Strong Passwords:</b> When creating your EdTayyari account, use a strong password
                            that includes a combination of letters, numbers, and special characters. Avoid using
                            easily guessable passwords or the same password across multiple sites.
                        </li>
                        <li>
                            <b>Two-Factor Authentication (2FA):</b> For enhanced account security, we offer
                            two-factor authentication (2FA) as an additional layer of protection. When enabled,
                            you will be required to enter a verification code in addition to your password when
                            logging in.
                        </li>
                        <li>
                            <b>Regular Account Monitoring:</b> We encourage users to regularly monitor their
                            account activity for any unauthorized access.
                        </li>
                    </ul>
                    If you suspect any suspicious activity, please contact us immediately to secure your
                    account.
                </p>
                <h6 className='fw-700 mb-16'>4. System Monitoring and Threat Detection</h6>
                <p className='fw-400 mb-32'>
                    At EdTayyari, we use a combination of automated and manual systems to monitor our platform
                    for potential security threats. <br />
                    This includes:
                    <ul className='my-3'>
                        <li>
                            <b>Continuous Monitoring:</b> We continuously monitor network traffic, system logs,
                            and user activities to detect any potential security breaches or suspicious behavior.
                        </li>
                        <li>
                            <b>Intrusion Detection Systems (IDS):</b> Our servers are equipped with Intrusion
                            Detection Systems that actively scan for and block any unauthorized access attempts or
                            malicious activities.
                        </li>
                        <li>
                            <b>Security Audits:</b> We regularly conduct security audits and vulnerability
                            assessments to identify potential weaknesses in our systems. Any identified
                            vulnerabilities are promptly addressed with security patches or updates.
                        </li>
                    </ul>
                </p>
                <h6 className='fw-700 mb-16'>5. Incident Response Plan</h6>
                <p className='fw-400 mb-32'>
                    In the unlikely event of a security breach or data incident, we have a comprehensive
                    Incident Response Plan in place to mitigate the damage and protect your information:
                    <ul className='my-3'>
                        <li>
                            <b>Immediate Containment:</b> As soon as a potential breach is detected, our team
                            takes immediate action to contain and isolate the issue.
                        </li>
                        <li>
                            <b>Notification:</b> If a breach involves personal data and may affect your privacy or
                            security, we will notify affected users as quickly as possible. We will provide
                            details on the nature of the breach, what data was affected, and the steps you can
                            take to protect yourself.
                        </li>
                        <li>
                            <b>Corrective Action:</b> We work diligently to resolve the issue and prevent future
                            occurrences by implementing additional security measures where necessary.
                        </li>
                    </ul>
                </p>
                <h6 className='fw-700 mb-16'>6. Third-Party Security</h6>
                <p className='fw-400 mb-32'>
                    In some cases, we may share user data with trusted third-party service providers for
                    specific purposes, such as payment processing, email communications, or analytics. These
                    third-party providers are required to maintain strict security standards and are
                    contractually obligated to keep your data confidential and secure.
                    <ul className='my-3'>
                        <li>
                            <b>Due Diligence:</b> Before engaging with third-party providers, we conduct thorough
                            due diligence to ensure they have appropriate security measures in place.
                        </li>
                        <li>
                            <b> Data Sharing Controls:</b> Data shared with third parties is limited to only what
                            is necessary for them to perform their services. We do not sell or lease your personal
                            data to third parties.
                        </li>
                    </ul>
                </p>
                <h6 className='fw-700 mb-16'>7. User Responsibility</h6>
                <p className='fw-400 mb-32'>
                    While we take extensive measures to protect your data, there are also steps you can take
                    to enhance your security:
                    <ul className='my-3'>
                        <li>
                            <b>Keep Your Credentials Safe:</b> Do not share your account password or any sensitive
                            information with others. Avoid logging into your account from shared or public
                            devices.
                        </li>
                        <li>
                            <b>Regular Updates:</b> Keep your software, operating system, and antivirus programs
                            up to date to protect against potential vulnerabilities.
                        </li>
                    </ul>
                </p>
                <h6 className='fw-700 mb-16'>8. Compliance with Legal and Regulatory Requirements</h6>
                <p className='fw-400 mb-32'>
                    We are committed to complying with applicable data protection laws and regulations, such
                    as the General Data Protection Regulation (GDPR) and California Consumer Privacy Act
                    (CCPA), which outline specific requirements for how personal data is collected, used, and
                    protected.
                </p>
                <h6 className='fw-700 mb-16'>9. Changes to This Security Policy</h6>
                <p className='fw-400 mb-32'>
                    We reserve the right to modify or update this Security Policy at any time. Any changes
                    will be posted on this page, and the “Effective Date” at the top will be updated
                    accordingly. It is your responsibility to review this policy regularly to stay informed
                    about how we protect your data.
                </p>
                <h6 className='fw-700 mb-16'>10. Contact Us</h6>
                <p className='fw-400 mb-32'>
                    If you have any questions, concerns, or suggestions regarding our Security Policy or the
                    measures we take to protect your data, please contact us at:{' '}
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
