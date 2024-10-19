import { OrderSummary } from "./OrderSummary"
import { OrderDetail } from "./OrderDetail";
import { useAppSelector } from "../../store"
import { CourseDetailLoader } from "../courses/CourseDetailLoader";

export const Order = () => {
    const { courseData } = useAppSelector((state) => state.order);
    return (
        <section className="billing-detail pb-40">
            {courseData.loading && <CourseDetailLoader />}
            <div className="container-fluid">
                <div className="row row-gap-4">
                    <div className="col-xxl-8 col-xl-7">
                        {!courseData.loading && <OrderDetail />}
                    </div>
                    <div className="col-xxl-4 col-xl-5">
                        {!courseData.loading && <OrderSummary />}
                    </div>
                </div>
            </div>
        </section>

    )
}