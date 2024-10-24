import C2FO from "../../assets/media/brands/c2fo.png";
import NucleusSoftware from "../../assets/media/brands/nucleus_software.png";
import Amazon from "../../assets/media/brands/amazon.png";
import Inference from "../../assets/media/brands/inference.png";
import WesternUnion from "../../assets/media/brands/western-union.png";
import GlobalLogic from "../../assets/media/brands/global-logic.png";
import Samsung from "../../assets/media/brands/samsung.png";
import Accenture from "../../assets/media/brands/accenture.png";
import TCS from "../../assets/media/brands/tcs.png";
import TechMahindra from "../../assets/media/brands/tech-mahindra.png";
import Atlassian from "../../assets/media/brands/atlassian.png";
import Zomoto from "../../assets/media/brands/zomoto.png";
import PwC from "../../assets/media/brands/pwc.png";
import Deloitte from "../../assets/media/brands/deloitte.png";
import Volkswagen from "../../assets/media/brands/volkswagen.jpg";

export const MentorsWorked = () => {

    const mentorsWorked = [C2FO, NucleusSoftware, Amazon, Inference, WesternUnion, GlobalLogic, Samsung, Accenture, TCS, TechMahindra, Atlassian, Zomoto, PwC, Deloitte, Volkswagen]

    return (
        <section className="py-40">
            <div className="container-fluid">
                <div className="heading mb-5">
                    <h2 className="black fw-700">Our Mentors Worked at:</h2>
                </div>
                <div className="row g-2">
                    {mentorsWorked && mentorsWorked.map((logo, index) => {
                        return (
                            <div className="col-3 brand-section" key={index}>
                                <div className="brand-block">
                                    <img src={logo} alt="" />
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </section>
    )
}