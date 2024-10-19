import HeroBanner from "../../assets/media/hero/hero-banner.png"

export const AboutUs = () => {

  return (
    <section className="about-section pt-80 pb-40">
      <div className="container-fluid">
        <div className="row align-items-center row-gap-4">
          <div className="col-xl-6 col-lg-5">
            <div className="about-image-block">
              <img src={HeroBanner} alt="" />
              <div className="online-course">
                <div className="icon-box">
                  <i className="fa-solid fa-chalkboard-user fa-lg" />
                </div>
                <div className="container-text">
                  <h5 className="white fw-700">20+</h5>
                  <p className="white fw-500">Experienced Guides</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-7">
            <div className="about-content-block">
              <div className="heading mb-24">
                <p className="eyebrow color-primary mb-8">ABOUT US</p>
                <h2 className="black fw-700">Explore an Innovative Method to Boost Your Skills</h2>
              </div>
              <p className="mb-16">EdTayyari is a dynamic educational platform dedicated to providing high-quality learning experiences for individuals of all backgrounds. Our mission is to make education accessible and affordable, empowering learners to reach their full potential. We offer a wide range of courses, covering various subjects and skills, all designed to fit into your busy lifestyle.</p>
              <p className="mb-24">With flexible learning options, you can study at your own pace and access resources anytime, anywhere. Our industry-recognized certifications enhance your credentials and boost your career prospects. At EdTayyari, we believe in nurturing talent, fostering innovation, and supporting personal growth, ensuring that every learner has the opportunity to succeed. Join us today and take the next step in your educational journey!</p>
              <ul className="skills-bar-container">
                <li className="mb-32">
                  <div className="progressbar-title">
                    <p className="dark-gray fw-600">Skill Mastery Levels</p>
                    <span className="percent" id="css-pourcent" />
                  </div>
                  <div className="bar-container">
                    <span className="progressbar " id="progress-css" />
                  </div>
                </li>
                <li className="mb-32">
                  <div className="progressbar-title">
                    <p className="dark-gray fw-600">Learning Milstones</p>
                    <span className="percent" id="javascript-pourcent" />
                  </div>
                  <div className="bar-container">
                    <span className="progressbar " id="progress-javascript" />
                  </div>
                </li>
                <li className="mb-32">
                  <div className="progressbar-title">
                    <p className="dark-gray fw-600">Digtal Proiciency Journey</p>
                    <span className="percent" id="angular-pourcent" />
                  </div>
                  <div className="bar-container">
                    <span className="progressbar " id="progress-angular" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
