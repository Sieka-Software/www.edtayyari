import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import * as Actions from "../../store/actions";
import { useFormik } from 'formik'
import * as Yup from 'yup'
import clsx from 'clsx'
import { constants } from "../../utils"

const initialValues = {
    name: '',
    email: '',
    phone: '',
    message: ''
}

const querySchema = Yup.object().shape({
    name: Yup.string()
        .required('Full Name is required')
        .min(2, 'Enter a valid full name'),
    email: Yup.string()
        .matches(constants.EmailValidationRegex, 'Enter a valid email address')
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols')
        .required('Email is required'),
    phone: Yup.string()
        .matches(constants.PhoneValidationRegex, 'Phone number is not valid')
        .required('Phone number is required'),
    message: Yup.string()
        .min(5, 'Enter minimum 3 characters in Message')
        .required('Message is required')
})

export const Contact = () => {
    const dispatch = useAppDispatch();
    const { queryForm } = useAppSelector(state => state.post);

    useEffect(() => {
        if (queryForm.status === 'success') {
            formik.setErrors({});
            formik.resetForm();
        }
    }, [queryForm.status]);

    const formik = useFormik({
        initialValues,
        validationSchema: querySchema,
        onSubmit: async (data, { setSubmitting }) => {
            if (queryForm.loading)
                return;

            setSubmitting(true);
            dispatch(Actions.submitQuery(data));
        },
    })


    return (
        <section className='contact-section py-80'>
            <div className='container-fluid'>
                <div className='contact-wrapper'>
                    <div className='row justify-content-center'>
                        <div className='col-xxl-10 col-xl-11 col-lg-11'>
                            <div className='row row-gap-4'>
                                <div className='col-xl-6 col-lg-5'>
                                    <div className='contact-text-container'>
                                        <h3 className='fw-500 mb-12'>Contact Information</h3>
                                        <p className='mb-32'>
                                            Your email address is safe with us. Required fields are noted with *
                                        </p>
                                        <div className='detail-block mb-24'>
                                            <div className='icon-box'>
                                                <i className="fa-regular fa-phone text-white" />
                                            </div>
                                            <div>
                                                <h6 className='fw-500 mb-12'>Phone Number:</h6>
                                                <p>+91 8595894937</p>
                                            </div>
                                        </div>
                                        <div className='detail-block mb-24'>
                                            <div className='icon-box'>
                                                <i className="fa-regular fa-envelope text-white" />
                                            </div>
                                            <div>
                                                <h6 className='fw-500 mb-12'>Email Address:</h6>
                                                <a href='mailto:info@example.com'>info@edtayyari.com</a>
                                            </div>
                                        </div>
                                        <div className='detail-block mb-24'>
                                            <div className='icon-box'>
                                                <i className="fa-regular fa-map text-white" />
                                            </div>
                                            <div>
                                                <h6 className='fw-500 mb-12'>Address:</h6>
                                                <p>Noida, UP (India)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-6 col-lg-7'>
                                    <div className='form-container'>
                                        <form className='contact-form' onSubmit={formik.handleSubmit}>
                                            <h3 className='fw-500 mb-12'>What can we do for you?</h3>
                                            <p className='light-gray mb-24'>
                                                Your email address is safe with us. Required fields are noted with *
                                            </p>
                                            {queryForm.status === "success" && <div className='alert alert-success text-center'>
                                                {queryForm.message} <b>{queryForm.data.id}!</b>
                                            </div>}
                                            {queryForm.status === "error" && <div className='alert alert-danger text-center'>
                                                {queryForm.message}
                                            </div>}
                                            <div className='row'>
                                                <div className='col-md-6 mb-2'>
                                                    <div className='input-block'>
                                                        <input
                                                            type='text'
                                                            {...formik.getFieldProps('name')}
                                                            className={clsx(
                                                                'form-control',
                                                                { 'is-invalid': formik.touched.name && formik.errors.name },
                                                                {
                                                                    'is-valid': formik.touched.name && !formik.errors.name,
                                                                }
                                                            )}
                                                            autoComplete='off'
                                                            placeholder='Full Name'
                                                        />
                                                        <i className="fa-regular fa-user" />
                                                    </div>
                                                    {formik.touched.name && formik.errors.name && (
                                                        <div className="form-text text-danger mt-2 ms-2">
                                                            {formik.errors.name}
                                                        </div>
                                                    )}
                                                </div>
                                                <div className='col-md-6 mb-2'>
                                                    <div className='input-block'>
                                                        <input
                                                            type='text'
                                                            {...formik.getFieldProps('phone')}
                                                            className={clsx(
                                                                'form-control',
                                                                { 'is-invalid': formik.touched.phone && formik.errors.phone },
                                                                {
                                                                    'is-valid': formik.touched.phone && !formik.errors.phone,
                                                                }
                                                            )}
                                                            autoComplete='off'
                                                            placeholder='Phone Number'
                                                        />
                                                        <i className="fa-regular fa-phone" />
                                                    </div>
                                                    {formik.touched.phone && formik.errors.phone && (
                                                        <div className="form-text text-danger mt-2 ms-2">
                                                            {formik.errors.phone}
                                                        </div>
                                                    )}
                                                </div>
                                                <div className='col-md-12 mb-2'>
                                                    <div className='input-block'>
                                                        <input
                                                            type='text'
                                                            {...formik.getFieldProps('email')}
                                                            className={clsx(
                                                                'form-control',
                                                                { 'is-invalid': formik.touched.email && formik.errors.email },
                                                                {
                                                                    'is-valid': formik.touched.email && !formik.errors.email,
                                                                }
                                                            )}
                                                            autoComplete="off"
                                                            placeholder='Email Address'
                                                        />
                                                        <i className="fa-regular fa-envelope" />
                                                    </div>
                                                    {formik.touched.email && formik.errors.email && (
                                                        <div className="form-text text-danger mt-2 ms-2">
                                                            {formik.errors.email}
                                                        </div>
                                                    )}
                                                </div>
                                                <div className='col-md-12'>
                                                    <div className='input-block mb-2'>
                                                        <textarea
                                                            {...formik.getFieldProps('message')}
                                                            className={clsx(
                                                                'form-control form-control-2',
                                                                { 'is-invalid': formik.touched.message && formik.errors.message },
                                                                {
                                                                    'is-valid': formik.touched.message && !formik.errors.message,
                                                                }
                                                            )}
                                                            placeholder='Write Your Message'
                                                            defaultValue={''}
                                                        />
                                                    </div>
                                                    {formik.touched.message && formik.errors.message && (
                                                        <div className="form-text text-danger mt-2 ms-2">
                                                            {formik.errors.message}
                                                        </div>
                                                    )}
                                                </div>
                                                <div className='col-md-12 text-end mt-2'>
                                                    <button type='submit' className='cus-btn-4' style={{ width: "200px" }} disabled={formik.isSubmitting || !formik.isValid || !formik.dirty}>
                                                        <span>{queryForm.loading ? <i className="fa-solid fa-loader fa-spin" /> : "Submit Query"}</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="map pt-80">
                    <div className="map-wrapper">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224357.50123586552!2d77.23701468919643!3d28.5221023514615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1729572970134!5m2!1sen!2sin" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                    </div>
                </div>
            </div>
        </section>
    )
}
