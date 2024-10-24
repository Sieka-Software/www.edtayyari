import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../store';
import { useLocation } from 'react-router-dom';
import * as Common from "../alert";
import { MentorCard } from './MentorCard';
import { MentorsLoader } from "./MentorsLoader"

export const MentorsRoot = () => {
    const navigate = useNavigate()
    const pathname = useLocation().pathname;
    const { instructors } = useAppSelector((state) => state.work)
    const { health } = useAppSelector((state) => state.master)

    return (
        <section className="teacher-section py-40">
            <div className="container-fluid">
                <div className="heading mb-48">
                    <h2 className="black fw-700 mb-8">Our Experienced Mentors</h2>
                    <div className="d-sm-flex align-items-center justify-content-between">
                        <p>Our Experienced IMentors: Leaders in Education Bringing Knowledge to Life.</p>
                        {pathname === "/mentors" ?
                            <a onClick={() => navigate("/")} className="cus-btn-3 mt-sm-0 mt-48">
                                <span className="btn-text">
                                    <i className='fa-regular fa-arrow-left me-2' />
                                    Back to Home
                                </span>
                                <span>
                                    <i className='fa-regular fa-arrow-left me-2' />
                                    Back to Home
                                </span>
                            </a>
                            : <a onClick={() => navigate("/mentors")} className="cus-btn-3 mt-sm-0 mt-48">
                                <span className="btn-text">See All Instructors</span>
                                <span>See All Instructors</span>
                            </a>}
                    </div>
                </div>
                {health && instructors.loading && <MentorsLoader />}
                {(!health || (!instructors.loading && instructors.data.length === 0)) && <Common.EmptyData />}
                {health && !instructors.loading && instructors.data.length > 0 && (
                    <div className="row row-gap-4">
                        {instructors.data?.map((instructor: MentorType, index: any) => {
                            return <MentorCard mentor={instructor} key={index} />
                        })}
                    </div>
                )}
            </div>
        </section>
    )
}