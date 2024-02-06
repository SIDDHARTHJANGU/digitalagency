import React, { useReducer } from "react";

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
};

const Hero = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className=" d-flex flex-column justify-content-center align-items-center min-vh-100 ">
      <div className="bg_card">
        <p className=" text-center fw_500 fs_48  ff_Dm_sans text-white">
          Count: {state.count}
        </p>
        <button
          className=" first_btn fw_400 fs_16 ff_Dm_sans"
          onClick={() => dispatch({ type: "INCREMENT" })}
        >
          Increment
        </button>
        <button
          className=" second_btn fw_400 fs_16 ff_Dm_sans"
          onClick={() => dispatch({ type: "DECREMENT" })}
        >
          Decrement
        </button>
        <button
          className=" third_btn fw_400 fs_16 ff_Dm_sans"
          onClick={() => dispatch({ type: "RESET" })}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Hero;
