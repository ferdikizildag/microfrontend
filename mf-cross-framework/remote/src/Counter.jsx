import { createSignal } from "solid-js";
import './index.css';
export default () => {
  const [count, setCount] = createSignal(0);

  return (
    <div class="counter">
      <div>Count = {count()}</div>
      <button onClick={() => setCount(count() + 1)}>Add One</button>
    </div>
  );
};
