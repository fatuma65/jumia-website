import { useEffect, useState } from "react";

const DiscountTimer = () => {
  // store the current time in state
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // update the current time every second
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // clear the interval when the time exipires
    return () => clearInterval(timerId);
  }, []); // [] run once only when the component mounts

  // set expiration time for the timer
  const expirationTime = new Date();
  expirationTime.setHours(23);
  expirationTime.setMinutes(0);
  expirationTime.setSeconds(0);

  // calculate remaining time until expiration of discount
  // math.max ensures that the remaining time is not negative
  const remainingTime = Math.max(
    0,
    expirationTime.getTime() - currentTime.getTime()
  );

  // convert the remaining hours to hours, minutes and seconds
  // math.floor converts the remaining milli seconds into whole numbers of hours, min, secs.
  const hoursLeft = Math.floor(remainingTime / (1000 * 60 * 60));
  const minutesLeft = Math.floor(
    (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
  );
  const secondsLeft = Math.floor((remainingTime % (1000 * 60)) / 1000);
  return (
    <>
      <h5 style={{ display: "flex", fontWeight: "bold", marginTop:'3px' }} >
        {hoursLeft}h: {minutesLeft}m :{secondsLeft}s
      </h5>
    </>
  );
};

export default DiscountTimer;
