import React, { useState, useEffect } from "react";
import { ContainerStyled } from "./style";

function Timer() {
  const [totalTimeInseconds, setTotalTimeInSeconds] = useState(60 * 60);

  const minutes = Math.floor(totalTimeInseconds / 60);
  const seconds = totalTimeInseconds % 60;

  useEffect(() => {
    if (totalTimeInseconds === 0) {
      alert("O tempo acabou!");
      return;
    } else {
      setTimeout(() => {
        setTotalTimeInSeconds(totalTimeInseconds - 1);
      }, 1000);
    }
  }, [totalTimeInseconds]);

  return (
    <ContainerStyled>
      <span>{minutes.toString().padStart(2, "0")}</span>
      <span>:</span>
      <span>{seconds.toString().padStart(2, "0")}</span>
    </ContainerStyled>
  );
}

export default Timer;
