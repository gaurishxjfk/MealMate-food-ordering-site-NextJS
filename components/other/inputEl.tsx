import React from "react";

const InputEl = ({ name, type, value, setName }) => {
  return (
    <div className="bg-[#ffffff] p-2 rounded-lg w-full">
      <div className="relative bg-inherit">
        <input
          type={type}
          name={name}
          value={value}
          className="peer bg-transparent h-[2.3em] w-full rounded-lg text-[#00412B] placeholder-transparent ring-[.1em] px-2 ring-[#488A74] focus:ring-[#00412B] focus:outline-none focus:border-rose-600"
          placeholder={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label
          htmlFor={name}
          className="absolute cursor-text left-0 -top-3 text-sm text-[#00412B] bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-1 peer-focus:-top-3 peer-focus:text-[#00412B] peer-focus:text-sm transition-all"
        >
          {name}
        </label>
        <label
          htmlFor={name}
          className="absolute cursor-text left-0 -top-3 text-sm text-[#00412B] bg-inherit mx-1 px-1 
                      peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-1 
                      peer-focus:-top-3 peer-focus:text-[#00412B] peer-focus:text-sm transition-all"
        >
          {name}
        </label>
      </div>
    </div>
  );
};

export default InputEl;
