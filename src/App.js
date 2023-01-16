import Header from "./components/header";
import Main from "./components/main";
import { useEffect, useState } from "react";
import Gameover from "./components/gameover";
import Leaderboard from "./components/leaderboard";

function App() {
  const TARGET = { first: "Robot", second: "Ryuk", third: "Patrick" };
  const TARGET_COUNT = Object.keys(TARGET).length;
  const [status, setStatus] = useState({
    first: false,
    second: false,
    third: false,
  });
  const [count, setCount] = useState(TARGET_COUNT);
  const [isGameOver, setIsGameOver] = useState(false);
  const [time, setTime] = useState("00:00:00");
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [userDatabase, setUserDatabase] = useState([]);
  const [leaderboard, setLeaderboard] = useState(false);

  const [activeTime, setActiveTime] = useState(true);

  useEffect(() => {
    if (count === 2) {
      setActiveTime(false);
      setIsGameOver(true);
    }
  }, [count]);

  return (
    <>
      <Header
        TARGET={TARGET}
        status={status}
        count={count}
        time={time}
        setTime={setTime}
        activeTime={activeTime}
        seconds={seconds}
        setSeconds={setSeconds}
        minutes={minutes}
        setMinutes={setMinutes}
        hours={hours}
        setHours={setHours}
      />
      <Main
        TARGET={TARGET}
        status={status}
        setStatus={setStatus}
        count={count}
        setCount={setCount}
      />
      {isGameOver && (
        <Gameover
          time={time}
          userDatabase={userDatabase}
          setUserDatabase={setUserDatabase}
          setLeaderboard={setLeaderboard}
          setIsGameOver={setIsGameOver}
        />
      )}
      {leaderboard && (
        <Leaderboard
          userDatabase={userDatabase}
          setLeaderboard={setLeaderboard}
          setCount={setCount}
          TARGET_COUNT={TARGET_COUNT}
          setActiveTime={setActiveTime}
          setSeconds={setSeconds}
          setMinutes={setMinutes}
          setHours={setHours}
        />
      )}
    </>
  );
}

export default App;
