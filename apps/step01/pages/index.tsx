import Timer from "../src/models/Timer";
import TimerView from "../src/views/Timer";

const myTimer = new Timer();

export default function Index() {
  return (
    <div>
      <h1>Setp 01</h1>
      <TimerView timer={myTimer} />
    </div>
  );
}

setInterval(() => {
  myTimer.increase();
}, 1000);
