// --------------------------------------------------------------

// Zustand -(global state management in React)

// Install zustand
// npm install zustand

// Zustand Style 1 ( Easy ) ----------------------V--

// Create a store to manage your state
// import { create } from 'zustand';

// const useStore = create((set) => ({
//   count: 1,
//   inc: () => set((state) => ({ count: state.count + 1 })),
//   dec: () => set((state) => ({ count: state.count - 1 })),
// }));

// export default function Counter() {
//   const { count, inc, dec } = useStore();

//   return (
//     <div>
//       <span>{count}</span>
//       <br />
//       <button onClick={inc}>one up</button>
//       <button onClick={dec}>one down</button>
//     </div>
//   );
// }

// --------------------------------------------------------------

// Zustand Style 2 ( Seems optimized )  ----------------------V--

// Zustand helps developers focus more on building features and less on managing state intricacies.
// Ref :- https://docs.pmnd.rs/zustand/getting-started/introduction

// Create a store to manage your state
import { create } from 'zustand';

const useCountStore = create((set) => ({
  firstCount: 0,
  secondCount: 0,
  incrementFirstCount: () =>
    set((state) => ({ firstCount: state.firstCount + 1 })),
  decrementFirstCount: () =>
    set((state) => ({ firstCount: state.firstCount - 1 })),
  incrementSecondCount: () =>
    set((state) => ({ secondCount: state.secondCount + 1 })),
  decrementSecondCount: () =>
    set((state) => ({ secondCount: state.secondCount - 1 })),
}));

// Create a custom hook, useFirstCount
export const useFirstCount = () => useCountStore((state) => state.firstCount);
export const useSecondCount = () => useCountStore((state) => state.secondCount);
export const useIncrementFirstCount = () =>
  useCountStore((state) => state.incrementFirstCount);
export const useDecrementFirstCount = () =>
  useCountStore((state) => state.decrementFirstCount);
export const useIncrementSecondCount = () =>
  useCountStore((state) => state.incrementSecondCount);
export const useDecrementSecondCount = () =>
  useCountStore((state) => state.decrementSecondCount);

// avoid using below, -can cause unnecessary renders
// const { firstCount } = useCountStore();

export default function Counter() {
  //   const { firstCount, incrementFirstCount, decrementFirstCount } =
  //     useCountStore();

  // using the use custom hook
  const firstCount = useFirstCount();
  const secondCount = useSecondCount();
  const incrementFirstCount = useIncrementFirstCount();
  const decrementFirstCount = useDecrementFirstCount();
  const incrementSecondCount = useIncrementSecondCount();
  const decrementSecondCount = useDecrementSecondCount();

  return (
    <div>
      <span>First Count : {firstCount}</span>
      <br />
      <button onClick={incrementFirstCount}>one up</button>
      <button onClick={decrementFirstCount}>one down</button>
      <br />
      <span>Second Count : {secondCount}</span>
      <br />
      <button onClick={incrementSecondCount}>one up</button>
      <button onClick={decrementSecondCount}>one down</button>
    </div>
  );
}
