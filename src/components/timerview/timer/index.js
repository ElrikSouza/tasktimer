import "./timer.css";

const padNumberWithZeros = (number, numZeros = 2) => {
  return number.toString().padStart(numZeros, 0);
};

const secondsToTimeString = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds - hours * 3600) / 60);
  const remainingSeconds = seconds - hours * 3600 - minutes * 60;

  return `${padNumberWithZeros(hours)}:${padNumberWithZeros(
    minutes
  )}:${padNumberWithZeros(remainingSeconds)}`;
};

export default function Timer({ currentTimeInSeconds }) {
  return (
    <div className="timer timer_view__timer">
      <div className="timer_value">
        {secondsToTimeString(currentTimeInSeconds)}
      </div>
    </div>
  );
}
