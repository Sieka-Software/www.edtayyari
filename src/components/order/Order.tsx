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
                <div className="row">
                    <div className="col-md-8 col-12 order-md-1 order-2">
                        {!courseData.loading && <OrderDetail />}
                    </div>
                    <div className="col-md-4 col-12 order-md-2 order-1">
                        {!courseData.loading && <OrderSummary />}
                    </div>
                </div>
            </div>
        </section>

    )
}