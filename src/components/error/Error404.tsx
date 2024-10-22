import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store";
import * as MasterActions from "../../store/slices/masterSlice"
import LogoDark from "../../assets/media/logo-dark.svg";

export const Error404 = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(MasterActions.setMasterState({ key: 'isError', value: true }));
    }, [dispatch]);

    const handleHome = () => {
        dispatch(MasterActions.setMasterState({ key: 'isError', value: false }));
        navigate("/");
    }

    return (
        <div className='scroll-content'>
            <section className='coming-soon-page py-40'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='title-area text-center'>
                            <a>
                                <img src={LogoDark} alt='' className='mb-24' />
                            </a>
                            <h3 className="black mb-16 fw-700"> <span className="color-primary">Opps! </span> There is something wrong</h3>
                            <p className="mb-32">The page you are looking for does not exist. Please check the URL or go back to the homepage.</p>
                        </div>
                        <div className='newsletter-text'>
                            <h3 className='coming-soon-text color-primary mb-32'>Error 404</h3>
                            <div className='newsletter-heading justify-content-center my-5'>
                                <div className='text text-center'>
                                    <h6 className='mb-8 medium-black fw-700'>For more Info Contact us at :</h6>
                                    <p className='medium-gray'>info@edtayyari.com | +91 8595894937</p>
                                </div>
                            </div>
                            <div className="text-center">
                                <a href="javascript:void(0)" onClick={handleHome} className="cus-btn-3 m-auto">
                                    <span>Back to Home Page</span>
                                    <span>Back to Home Page</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
