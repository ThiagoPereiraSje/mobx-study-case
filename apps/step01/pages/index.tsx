import TimerView from "../src/components/Timer";
import Timer from "../src/entities/Timer";

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
