import { useEffect, useState } from "react";

export default function Progress({ timer }) {
  const [remainingTime, setRemainingTime] = useState(timer);
  useEffect(() => {
    const removeTimer = setInterval(() => {
      setRemainingTime((prev) => prev - 10);
    }, 10);

    return () => {
      clearInterval(removeTimer);
    };
  }, []);

  return <progress value={remainingTime} max={timer}></progress>;
}
