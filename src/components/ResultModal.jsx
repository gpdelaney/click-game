import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal =
    forwardRef(function ResultModal({targetTime, remainingTime, onReset}, ref) {

  const dialog = useRef();

  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open (){
        dialog.current.showModal();
      }
    };
  });

  return (
      <dialog  className="result-modal" ref={dialog} onClose={onReset}>
        {userLost && <h2>You lost</h2>}
        {!userLost && <h2>Your Score {score}!</h2>}
        <p>Your target time was <strong>{targetTime} seconds.</strong></p>
        <p>You stopped the timer with {formattedRemainingTime} seconds left.</p>
        <form method="dialog" onSubmit={onReset}>
          <button>Close</button>
        </form>
      </dialog>
  )
});

export default ResultModal;
