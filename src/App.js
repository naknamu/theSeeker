import Header from "./components/header";
import Main from "./components/main";
import { useEffect, useState } from "react";
import Gameover from "./components/gameover";
import Leaderboard from "./components/leaderboard";
import Start from "./components/start";
import { pageRefreshed } from "./components/firebase_get.js";

function App() {
  const TARGET = { first: "Ghost Rider", second: "Ryuk", third: "Ash" };
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
  const [activeTime, setActiveTime] = useState(false);

  const [start, setStart] = useState(false);

  useEffect(() => {
    if (count === 0) {
      setActiveTime(false);
      setIsGameOver(true);
    }
  }, [count]);

  useEffect(() => {
    const fetchDatabase = async () => {
      let databaseArray = await pageRefreshed();

      let userData = [];

      databaseArray.forEach((element) => {
        userData.push({ name: element.name, time: element.time });
      });

      setUserDatabase(userData);
    };

    fetchDatabase();
  }, []);

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
          setStatus={setStatus}
          setIsGameOver={setIsGameOver}
        />
      )}
      {!start && (
        <Start
          setStart={setStart}
          setActiveTime={setActiveTime}
          TARGET={TARGET}
        />
      )}
    </>
  );
}

export default App;
