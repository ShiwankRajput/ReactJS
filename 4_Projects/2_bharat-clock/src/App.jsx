import Head from "./components/head";
import Title from "./components/Title";
import Time from "./components/Time";
import "./App.css";

function App(){
  return (
    <center classNameName="clockBox">

      <div classNameName="bharat head">
        <Head></Head>
      </div>

      <div classNameName="bharat title">
        <Title></Title>
      </div>

      <div classNameName="bharat date">
        <Time></Time>
      </div>

    </center>
  );
}

export default App