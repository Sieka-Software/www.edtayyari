import { useAppSelector, useAppDispatch } from '../../store'
import { useParams } from 'react-router-dom'
import CourseImg from '../../assets/media/course/course-1.png'
import * as Actions from '../../store/actions'
import { useState } from 'react'

export const OrderSummary = () => {
    const dispatch = useAppDispatch();
    const { id } = useParams<{ id: string }>();
    const [couponCode, setCouponCode] = useState<string>('');
    const { course, price, couponForm } = useAppSelector((state) => state.order);

    const applyCoupon = (e: any) => {
        e.preventDefault()
        if (couponCode && !couponForm.loading) {
            dispatch(Actions.applyCoupon({ courseId: id || "", couponCode }))
        }
    }

    const handleCouponChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let couponCode = e.target.value.toUpperCase()
        setCouponCode(couponCode)
    }

    return (
        <div className='checkout-sidebar bg-white-bordered br-12'>
            <div className='title-row title-row-2 mb-16'>
                <h5 className='fw-500 black'>Order Summary</h5>
            </div>
            <div className='summary-container p-3'>
                <div className='img-block bg-light-white w-100'>
                    <img
                        src={course?.coursePhoto ? course?.coursePhoto : CourseImg}
                        className='w-100'
                        style={{ borderRadius: '10px' }}
                    />
                </div>
                <div className='summary-block mb-24 mt-5'>
                    <div className='d-flex align-items-start justify-content-between w-100'>
                        <div>
                            <p className='black fw-500 mb-4p'>{course?.courseName}</p>
                            <p className='subtitle mb-4p'>By {course?.instructorInfo.instructorName}</p>
                        </div>
                        <p className='black fw-500'>₹ {price?.courseMRP}.00</p>
                    </div>
                </div>
                <div className='checkout-box'>
                    <form>
                        <div className='checkout-input'>
                            <input
                                type='text'
                                onChange={handleCouponChange}
                                value={couponCode}
                                className='form-control form-control-2'
                                placeholder='Enter Coupon Code'
                            />
                            <button type='submit' onClick={applyCoupon} disabled={id === "" || couponCode === ""}>
                                <a className='cus-btn-4'>
                                    <span>{couponForm.loading ? <i className="fa-solid fa-loader fa-spin" /> : "Apply Coupon"}</span>
                                </a>
                            </button>
                        </div>
                    </form>
                </div>
                {couponForm.status && (
                    <p
                        className={`subtitle mb-2 text-center ${couponForm.status === 'error' ? 'text-danger' : 'text-success'
                            }`}
                    >
                        <span className='fw-bold'>{couponForm.args.couponCode && couponForm.args.couponCode + " !"}</span> {couponForm.message}
                    </p>
                )}
                <div className='d-flex align-items-center justify-content-between mb-16 mt-3'>
                    <p className='black fw-500'>Discount</p>
                    <p className='dark-gray fw-500'>- ₹ {price?.courseDiscount}</p>
                </div>
                <div className='hr-line my-2' />
                <div className='d-flex align-items-center justify-content-between mb-16'>
                    <p className='black fw-500'>Subtotal</p>
                    <p className='dark-gray fw-500'>₹ {price?.coursePrice}.00</p>
                </div>
                {price?.courseCouponDiscount > 0 && (
                    <>
                        <div className='hr-line my-2' />
                        <div className='d-flex align-items-center justify-content-between mb-16'>
                            <p className='black fw-500' style={{ lineHeight: "20px" }}>Coupon Discount<br />
                                <span className='fw-bold' style={{ fontSize: "12px", color: "green" }}>({price?.courseCoupon})</span></p>
                            <p className='dark-gray fw-500'>- ₹ {price?.courseCouponDiscount}</p>
                        </div>
                    </>
                )}
                <div className='hr-line my-2' />
                <div className='d-flex align-items-center justify-content-between mb-16'>
                    <p className='black fw-500'>GST</p>
                    <p className='dark-gray fw-500'>+ ₹ {price?.courseGST}</p>
                </div>
                <div className='hr-line my-2' />
                <div className='d-flex align-items-center justify-content-between mb-16'>
                    <h5 className='fw-500 color-primary'>TOTAL</h5>
                    <h5 className='fw-500 color-primary'>
                        ₹ {price?.courseTotal}
                    </h5>
                </div>
            </div>
        </div>
    )
}
