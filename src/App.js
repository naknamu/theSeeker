import Header from "./components/header";
import Main from "./components/main";
import { useEffect, useState } from "react";
import Gameover from "./components/gameover";
import Leaderboard from "./components/leaderboard";

function App() {
  const TARGET = { first: "Robot", second: "Ryuk", third: "Patrick" };
  const [status, setStatus] = useState({
    first: false,
    second: false,
    third: false,
  });
  const [count, setCount] = useState(Object.keys(TARGET).length);
  const [isGameOver, setIsGameOver] = useState(false);
  const [time, setTime] = useState("00:00:00");
  const [userDatabase, setUserDatabase] = useState([{name: "naknamu", time: "00:00:00"}]);
  const [leaderboard, setLeaderboard] = useState(false);

  useEffect(() => {
    if (count === 2) {
      setIsGameOver(true);
    }
  }, [count])

  return (
    <>
      <Header TARGET={TARGET} status={status} count={count} time={time} setTime={setTime} />
      <Main
        TARGET={TARGET}
        status={status}
        setStatus={setStatus}
        count={count}
        setCount={setCount}
      />
      {isGameOver && <Gameover time={time} userDatabase={userDatabase} setUserDatabase={setUserDatabase} setLeaderboard={setLeaderboard} setIsGameOver={setIsGameOver} />}
      {leaderboard && <Leaderboard userDatabase={userDatabase} />}
    </>
  );
}

export default App;
