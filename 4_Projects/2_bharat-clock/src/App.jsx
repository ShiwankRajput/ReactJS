import Head from "./components/head";
import Title from "./components/Title";
import Time from "./components/Time";
import "./App.css";

function App(){
  return (
    <center className="clockBox">

      <div className="bharat head">
        <Head></Head>
      </div>

      <div className="bharat title">
        <Title></Title>
      </div>

      <div className="bharat date">
        <Time></Time>
      </div>

    </center>
  );
}

export default App