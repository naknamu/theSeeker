import Header from "./components/header";
import Main from "./components/main";
import { useState } from "react";

function App() {
  const TARGET = { first: "Robot", second: "Ryuk", third: "Patrick" };
  const [status, setStatus] = useState({
    first: false,
    second: false,
    third: false,
  });
  const [count, setCount] = useState(Object.keys(TARGET).length);

  return (
    <>
      <Header TARGET={TARGET} status={status} count={count} />
      <Main
        TARGET={TARGET}
        status={status}
        setStatus={setStatus}
        count={count}
        setCount={setCount}
      />
    </>
  );
}

export default App;
