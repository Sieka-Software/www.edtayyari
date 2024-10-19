import TitleBannerImg from "../../assets/media/backgrounds/title-banner.png";

export const Breadcrum = (props: any) => {
    return (
        <section className='title-banner mb-5'>
            <div className='container-fluid'>
                <div className='row justify-content-center'>
                    <div className='col-lg-10 col-md-11'>
                        <div className='title-wrapper'>
                            <div className='row align-items-center'>
                                <div className='col-lg-6 col-sm-6'>
                                    <div className='title-content'>
                                        <h1 className='white fw-700'>{props.title}</h1>
                                    </div>
                                </div>
                                <div className={`col-lg-6 col-sm-6  ${!props.title && 'my-3'}`}>
                                    {props.title && <div className='title-image'>
                                        <img src={TitleBannerImg} alt='' />
                                    </div>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
