import LogoDark from "../../assets/media/logo-dark.svg";

export const Error500 = () => {

  const handleRefresh = () => {
    window.location.reload()
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
              <h3 className="black mb-16 fw-700"> <span className="color-primary">Opps! </span> Something Went Wrong</h3>
              <p className="mb-32">We are unable to connect with the host. Please try again later.</p>
            </div>
            <div className='newsletter-text'>
              <h3 className='coming-soon-text color-primary mb-32'>Error 500</h3>
              <div className='newsletter-heading justify-content-center my-5'>
                <div className='text text-center'>
                  <h6 className='mb-8 medium-black fw-700'>For more Info Contact us at :</h6>
                  <p className='medium-gray'>info@edtayyari.com | +91 9084950475</p>
                </div>
              </div>
              <div className="text-center">
                <a href="javascript:void(0)" onClick={handleRefresh} className="cus-btn-3 m-auto">
                  <span>Try Refresh</span>
                  <span>Try Refresh</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
