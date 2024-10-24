import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import RazorpayLogo from '../../assets/media/brands/razorpay_logo.png'
import { useAppSelector, useAppDispatch } from '../../store'
import * as Actions from '../../store/actions'
import { useRazorpay, RazorpayOrderOptions } from "react-razorpay";
import config from '../../config'
import { useFormik } from 'formik'
import { constants } from "../../utils"
import * as Yup from 'yup'
import clsx from 'clsx'

const initialValues = {
    name: '',
    email: '',
    phone: '',
    referralCode: '',
    termsChecked: false,
}

const orderSchema = Yup.object().shape({
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
    termsChecked: Yup.boolean()
        .equals([true], 'You must accept the terms and conditions'),
})

export const OrderDetail = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>()
    const { Razorpay } = useRazorpay();
    const { orderForm, course, price, razorpayorder } = useAppSelector((state) => state.order);

    useEffect(() => {
        if (orderForm.status === 'success') {
            formik.resetForm();
        }
    }, [orderForm.status]);

    const formik = useFormik({
        initialValues,
        validationSchema: orderSchema,
        onSubmit: async (data: any, { setSubmitting }) => {
            setSubmitting(true);
            if (orderForm.loading)
                return;
            data = {
                ...data,
                courseId: id
            }

            dispatch(Actions.placeOrder(data));
        },
    })

    useEffect(() => {
        const handlePayment = () => {
            const options: RazorpayOrderOptions = {
                key: config.RAZORPAY_KEY_ID,
                amount: razorpayorder.data?.amount,
                currency: razorpayorder.data?.currency,
                name: 'Course Payment',
                description: `Payment for ${course.courseName}`,
                order_id: razorpayorder.data?.id,
                handler: (response) => {
                    dispatch(Actions.updateOrderStatus(response));
                },
                prefill: orderForm.args.studentDetail,
            };

            const razorpayInstance = new Razorpay(options);
            razorpayInstance.open();
        };

        if (razorpayorder) {
            handlePayment();
        }

    }, [razorpayorder])

    return (
        <div className='order-wrapper mb-5'>
            <form onSubmit={formik.handleSubmit}>
                <div className='row'>
                    <div className='col-12 title-row title-row-2 mb-24'>
                        <h5 className='fw-500 black'>Billing Details</h5>
                    </div>
                    <div className='billing-wrapper col-12'>
                        <div className='row'>
                            <div className='col-md-6 mb-3'>
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
                                        placeholder='Enter Full Name'
                                    />
                                    <i className='fa-regular fa-user' />
                                </div>
                                {formik.touched.name && formik.errors.name && (
                                    <div className="form-text text-danger ms-2">
                                        {typeof formik.errors.name === 'string' ? formik.errors.name : null}
                                    </div>
                                )}
                            </div>
                            <div className='col-md-6 mb-3'>
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
                                        placeholder='Enter Phone Number'
                                    />
                                    <i className='fa-regular fa-phone' />
                                </div>
                                {formik.touched.phone && formik.errors.phone && (
                                    <div className="form-text text-danger ms-2">
                                        {typeof formik.errors.phone === 'string' ? formik.errors.phone : null}
                                    </div>
                                )}
                            </div>
                            <div className='col-md-6 mb-3'>
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
                                        autoComplete='off'
                                        placeholder='Enter Email Address'
                                    />
                                    <i className='fa-regular fa-envelope' />
                                </div>
                                {formik.touched.email && formik.errors.email && (
                                    <div className="form-text text-danger ms-2">
                                        {typeof formik.errors.email === 'string' ? formik.errors.email : null}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-12 title-row title-row-2 my-3'>
                        <h5 className='fw-500 black mb-3'>Payments Methods</h5>
                        <div className='shipping-radio-container'>
                            <div className='plans'>
                                <label className='plan basic-plan'>
                                    <input defaultChecked type='radio' />
                                    <span className='plan-content content-2'>
                                        <img src={RazorpayLogo} alt='' />
                                        <span className='plan-details'>
                                            <span className='fw-500 black'>Razorpay</span>
                                        </span>
                                    </span>
                                </label>
                            </div>
                            <div className="form-text mt-4">
                                <p><i className='fa-duotone fa-lock me-2' />Your Transaction is Secured with SSL Encryption</p>
                            </div>

                        </div>
                    </div>
                    <div className='col-md-6 title-row title-row-2 my-3'>
                        <h5 className='fw-500 black mb-3'>Referral Code</h5>
                        <div className='input-block align-items-center'>
                            <input
                                type='text'
                                style={{ height: '80px' }}
                                {...formik.getFieldProps('referralCode')}
                                className={clsx('form-control')}
                                autoComplete='off'
                                placeholder='Enter Referral Code'
                            />
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='hr-line mb-16' />
                        <p className='subtitle mb-16'>
                            Your personal data will be used to process your order, support your experience
                            throughout this website, and for other purposes described in our
                            <span className='color-primary fw-600 ms-1' style={{cursor:"pointer"}} onClick={() => navigate("/privacy-policy")}> Privacy Policy.</span>
                        </p>
                        <div className='d-flex my-3 align-items-center'>
                            <input
                                type='checkbox'
                                {...formik.getFieldProps('termsChecked')}
                                style={{ cursor: "pointer" }}
                            />
                            <label htmlFor='terms' className='subtitle mx-2'>
                                I have read and agree to the website terms and conditions
                            </label>
                        </div>
                        {formik.touched.termsChecked && formik.errors.termsChecked && (
                            <div className="form-text text-danger ms-2">
                                {typeof formik.errors.termsChecked === 'string' ? formik.errors.termsChecked : null}
                            </div>
                        )}
                        <div className='text-end'>'
                            <button type="submit" disabled={formik.isSubmitting || !formik.isValid || !formik.dirty}>
                                <a className='cus-btn-4' style={{ minWidth: "300px" }}>
                                    <span>{orderForm.loading ? <i className="fa-solid fa-loader fa-spin" /> : `Proceed to Pay ₹ ${price?.courseTotal}`}</span>
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
