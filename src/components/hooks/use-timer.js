import { useEffect, useState } from "react";
import { loadTimer, saveTimer } from "../../utils/timer";
import { useBeforeUnload } from "./usebeforeunload";

export const useTimer = (getNumberOfTasks) => {
  const [timeInSeconds, setCurrentTimeInSeconds] = useState(loadTimer());
  const [isTimerPaused, setIsTimerPaused] = useState(false);

  useEffect(() => {
    const timer = setTimeout(
      () =>
        timeInSeconds > 0 &&
        getNumberOfTasks() > 0 &&
        !isTimerPaused &&
        setCurrentTimeInSeconds(timeInSeconds - 1),
      1000
    );

    return () => clearTimeout(timer);
  });

  const saveCurrentTime = () => saveTimer(timeInSeconds);
  useBeforeUnload(saveCurrentTime);

  const onPauseResume = () => {
    setIsTimerPaused(!isTimerPaused);
  };

  const resetTimer = () => setCurrentTimeInSeconds(1800);

  return {
    timeInSeconds,
    isTimerPaused,
    onPauseResume,
    resetTimer,
  };
};
