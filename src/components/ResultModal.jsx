import { forwardRef } from "react";

const ResultModal =  forwardRef(function ResultModal({result, targetTime}, ref) {
  return (
      <dialog className="result-modal" ref={ref}>
        <h2>You {result}</h2>
        <p>Your target time was <strong>{targetTime} seconds.</strong></p>
        <p>You stopped the timer with X seconds left.</p>
        <form method="dialog">
          <button>Close</button>
        </form>
      </dialog>
  )
});

export default ResultModal;
