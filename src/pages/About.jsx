import { useStore } from "../Store.js";

const About = () => {
  const count = useStore((state) => state.count);

  const increase = useStore((state) => state.increase);
  const reset = useStore((state) => state.removeAll);
  const test = useStore((state) => state.test);

  return (
    <div>
      <p>{count}</p>
      <p>
        <button onClick={increase}>Increase</button>
        <button onClick={reset}>Reset</button>
        <button
          onClick={() => {
            test(7 * count);
          }}
        >
          Test
        </button>
      </p>
      About page
    </div>
  );
};

export default About;
