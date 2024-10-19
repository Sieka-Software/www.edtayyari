import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../store';
import Logo from '../../assets/media/logo.svg'
import * as Actions from "../../store/actions"
import { utils } from "../../utils";
import { useFormik } from 'formik'
import * as Yup from 'yup'
import clsx from 'clsx'
import { constants } from "../../utils"
import * as PostActions from "../../store/slices/postSlice";

const initialValues = {
  email: '',
}

const subscribeSchema = Yup.object().shape({
  email: Yup.string()
    .matches(constants.EmailValidationRegex, 'Enter a valid email address')
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Email is required')
})

export const Footer = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isBackToTopVisible } = useAppSelector(state => state.master)
  const { subscribeForm } = useAppSelector(state => state.post);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    if (subscribeForm.status === 'success') {
      formik.resetForm();
      setTimeout(() => {
        dispatch(PostActions.setPostChildState({ parent: "subscribeForm", key: "status", value: "" }));
      }, 2000)
    }
  }, [subscribeForm.status]);

  const formik = useFormik({
    initialValues,
    validationSchema: subscribeSchema,
    onSubmit: async (data, { setSubmitting }) => {
      if (subscribeForm.loading)
        return;

      setSubmitting(true);
      dispatch(Actions.subscribeNewsletter(data));
    },
  })

  const sitesLinks = [
    { name: "About Us", path: "/about-us" },
    { name: "Courses", path: "/courses" },
    { name: "Instructor", path: "/instructors" },
    { name: "Contact Us", path: "/contact-us" },
  ]

  const legalLinks = [
    { name: "Hyperlink Policy", path: "/hyperlink-policy" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Refund Policy", path: "/refund-policy" },
    { name: "Security Policy", path: "/security-policy" },
    { name: "Terms and Conditions", path: "/terms-and-conditions" },
  ]

  const useFulLinks = [
    { name: "GitHub", url: "https://github.com" },
    { name: "Hackerrank", url: "https://www.hackerrank.com" },
    { name: "Code Sandbox", url: "https://www.codesandbox.io" },
  ]

  return (
    <footer className='bg-primary pt-md-40 pt-80 pb-md-20 pb-40  mt-5'>
      <div className='container-fluid'>
        <div className='footer-wrapper'>
          <div className='row px-lg-0 px-3'>
            <div className='col-lg-3 col-12 px-3 px-lg-0 pb-3'>
              <img src={Logo} alt='' className='ft-logo mb-16' />
              <p className='lightest-gray mb-32' style={{ textAlign: "justify" }}>
                EdTayyari is a comprehensive educational platform that makes high-quality learning
                accessible and affordable for everyone. With flexible courses and industry-recognized
                certifications, we empower individuals to reach their full potential and succeed in
                their careers.
              </p>
            </div>
            <div className='link-block col-lg-2 col-4 ps-md-5 pb-3'>
              <h6 className='white fw-500 mb-3'>Company</h6>
              <ul className='footer-list list-unstyled'>
                {sitesLinks.map((site, index) => {
                  return (
                    <li className='mb-2' key={index}>
                      <a onClick={() => navigate(site.path)}>{site.name}</a>
                    </li>
                  )
                })}
              </ul>
              <h6 className='light-white mb-4'>Follow Us!</h6>
              <ul className='list-unstyled mb-5 social-icons'>
                <li>
                  <a href='https://www.instagram.com'>
                    <i className='fa-brands fa-instagram fa-xl text-white' />
                  </a>
                </li>
                <li>
                  <a href='https://www.linkedin.com'>
                    <i className='fa-brands fa-linkedin fa-xl text-white mx-2' />
                  </a>
                </li>
                <li>
                  <a href='https://www.instagram.com'>
                    <i className='fa-regular fa-envelope fa-xl text-white' />
                  </a>
                </li>
              </ul>
            </div>
            <div className='link-block col-lg-2 col-5 pb-3'>
              <h6 className='white fw-500 mb-3'>Legal</h6>
              <ul className='footer-list list-unstyled'>
                {legalLinks.map((legal, index) => {
                  return (
                    <li className='mb-2' key={index}>
                      <a onClick={() => navigate(legal.path)}>{legal.name}</a>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className='link-block col-md-2 col-3 pb-3' style={{ marginLeft: "-20px" }}>
              <h6 className='white fw-500 mb-24'>Useful Links</h6>
              <ul className='footer-list list-unstyled'>
                {useFulLinks.map((link, index) => {
                  return (
                    <li className='mb-2' key={index}>
                      <a href={link.url} target='_blank' rel="noreferrer noopener">{link.name}</a>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className='link-block col-lg-3 col-12 pb-3'>
              <h6 className='white fw-500 mb-24'>Contact Us</h6>
              <ul className='footer-list list-unstyled mb-32'>
                <li className='mb-12 d-flex align-items-center gap-12'>
                  <a href='tel:123456987' className='d-flex align-items-center '>
                    <i className='fa-regular fa-phone fa-lg me-2' />
                    +91 90849507777
                  </a>
                </li>
                <li className='mb-12'>
                  <a
                    href='mailto:info@example.com'
                    className='d-flex align-items-center'
                  >
                    <i className='fa-regular fa-envelope fa-lg me-2' />
                    info@edtayyari.com
                  </a>
                </li>
              </ul>
              <h6 className='white fw-500 mb-3'>Subscribe to Our Newslatter</h6>
              <form className='subscribe-form' onSubmit={formik.handleSubmit}>
                <div className='checkout-box mb-2 newsletter-form'>
                  <div className='checkout-input'>
                    <input
                      type='text'
                      {...formik.getFieldProps('email')}
                      className={clsx(
                        'form-control'
                      )}
                      autoComplete='off'
                      placeholder='Enter Your Email'
                    />
                    <button type="submit" className='' disabled={formik.isSubmitting || !formik.isValid || !formik.dirty}>
                      <a className='cus-btn-5'>
                        <span>{subscribeForm.loading ? <i className="fa-solid fa-loader fa-spin" /> : "Submit"}</span>
                      </a>
                    </button>
                  </div>
                  {formik.touched.email && formik.errors.email && (
                    <p className={`text-center text-danger`}>
                      {formik.errors.email}
                    </p>
                  )}
                  {subscribeForm.status && <p className={`text-center text-${utils.trasformStatus(subscribeForm.status)}`}>{subscribeForm.message}</p>}
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className='hr-line mb-24 bg-light-gray' />
        <p className='bottom-bar light-white d-md-flex d-block text-center justify-content-between' style={{ fontSize: "0.9rem" }}>
          <span className='fw-400'>
            Copyright © 2024
            <a href="https://siekasoftware.com" className='color-sec ms-2 fw-700 d-md-inline d-block' target="_blank">Sieka Software Private Limited</a>
          </span>
          <span className='fw-400 d-none d-md-block'>CIN: U85499UP2024OPC210196</span>
        </p>
      </div>
      {isBackToTopVisible && <button onClick={scrollToTop} className="back-to-top" style={{ display: 'block' }}><i className="fa-solid fa-arrow-turn-up" /></button>}
    </footer >
  )
}
