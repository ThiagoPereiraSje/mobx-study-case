import Timer from "../../entities/Timer";

import { observer } from "mobx-react";

type Props = {
  timer: Timer;
};

export default observer(function Index({ timer }: Props) {
  return (
    <>
      <button onClick={() => timer.reset()}>
        Seconds passed: {timer.secondsPassed}
      </button>
    </>
  );
});
