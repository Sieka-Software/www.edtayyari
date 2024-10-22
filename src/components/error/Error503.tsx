import { useState, useEffect } from "react";
import LogoDark from "../../assets/media/logo-dark.svg";
import { useAppSelector, useAppDispatch } from "../../store";
import * as MasterActions from "../../store/slices/masterSlice";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Error503 = () => {
  const dispatch = useAppDispatch();
  const { config } = useAppSelector(state => state.master)
  const [currentTime, setCurrentTime] = useState(new Date(config!.serverTimestamp));
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const maintenanceBypass = () => {
    dispatch(MasterActions.setMasterChildState({ parent: "config", key: "isUnderMaintenance", value: 'false' }))
  }

  useEffect(() => {
    const maintenanceDate = new Date(config!.isUnderMaintenanceTill);

    const calculateTimeLeft = () => {
      const difference = maintenanceDate.getTime() - currentTime.getTime();

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      setTimeLeft({ days, hours, minutes, seconds });
    };

    calculateTimeLeft();

    const timerId = setInterval(() => {
      setCurrentTime(prevTime => new Date(prevTime.getTime() + 1000));
      calculateTimeLeft();
    }, 1000);

    return () => clearInterval(timerId);
  }, [config!.isUnderMaintenanceTill, currentTime]);

  return (
    <div className='scroll-content'>
      <section className='coming-soon-page py-40'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='title-area text-center'>
              <a>
                <img src={LogoDark} alt='' className='mb-24' />
              </a>
              <h3 className="black mb-16 fw-700"> <span className="color-primary">Opps! </span> We are Under Maintenance</h3>
              <p className="mb-32">&nbsp;</p>
            </div>
            <div className='newsletter-text'>
              <h3 className='coming-soon-text color-primary mb-32'>Coming Soon</h3>
              <div className='coming-soon-wrapper mb-40'>
                <ul className='unstyled countdown'>
                  <li>
                    <h2>{timeLeft.days}</h2>
                    <h6>Days</h6>
                  </li>
                  <li>
                    <h2>{timeLeft.hours}</h2>
                    <h6>Hrs</h6>
                  </li>
                  <li>
                    <h2>{timeLeft.minutes}</h2>
                    <h6>Mins</h6>
                  </li>
                  <li>
                    <h2>{timeLeft.seconds}</h2>
                    <h6>Secs</h6>
                  </li>
                </ul>
              </div>
              <div className='newsletter-heading justify-content-center mb-24'>
                <div className='text text-center'>
                  <h6 className='mb-8 medium-black fw-700'>For more Info Contact us at<a onClick={maintenanceBypass}>:</a></h6>
                  <p className='medium-gray'>info@edtayyari.com | +91 8595894937</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
