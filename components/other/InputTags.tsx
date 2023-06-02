import React, { useEffect as appEffect, useRef as appRef, useState as appState } from "react";
import InputEl from "./inputEl";


function handleClick(ref: React.RefObject<HTMLDivElement>, e: MouseEvent) {
  return ref?.current?.contains(e.target as Node);
}
interface props {
  suggestions: string[]
  tagsArr: string[]
  setTagsArr: React.Dispatch<React.SetStateAction<any[]>>
}

const InputTags: React.FC<props> = ({suggestions,tagsArr, setTagsArr}) => {
  const tagsWrapper = appRef<HTMLDivElement>(null);
  const [toggleSuggetions, setToggleSuggetions] = appState(false);
  const [tagInp, setTagInp] = appState("");
  const [suggetionsArr, setSuggetionsArr] = appState([...suggestions]);

  const detectClick = (ref: React.RefObject<HTMLDivElement>) => {
    appEffect(() => {
      document.addEventListener("mousedown", (e: MouseEvent) => {
        setToggleSuggetions(handleClick(ref, e));
      });
      return () => {
        document.removeEventListener("mousedown", (e: MouseEvent) =>
          handleClick(ref, e)
        );
      };
    }, [ref]);
  };
  detectClick(tagsWrapper);

  appEffect(() => {
    setSuggetionsArr(suggestions.filter((i) => !tagsArr.includes(i)));
  }, [tagsArr]);

  const removeTag = (tag: string) => {
    setTagsArr(tagsArr.filter((i) => i.toLowerCase() !== tag.toLowerCase()));
  };

  return (
    <div className="relative" ref={tagsWrapper}>
      <InputEl
        name="Add Tags"
        value={tagInp}
        type={"text"}
        setName={setTagInp}
      />
      <div className="flex flex-wrap gap-3 px-2">
        {tagsArr.map((i) => (
          <span key={i} className="bg-[#7adebd] px-3 rounded-lg">
            {i}{" "}
            <button
              type="button"
              className="ml-1 hover:font-bold"
              onClick={() => removeTag(i)}
            >
              x
            </button>
          </span>
        ))}
      </div>

      {suggetionsArr.length > 0 && (
        <div
          className={`flex flex-col border-[#488A74] border-[.11em] left-0 rounded-lg absolute bg-[#ffffff] w-[96%] mx-[2%] mt-1 ${
            toggleSuggetions ? "block" : "hidden"
          } transition-all shadow-[rgba(0,_0,_0,_0.4)_0px_0px_10px] z-40`}
        >
          {suggetionsArr
            .filter((i) => i.toLowerCase().includes(tagInp.toLowerCase()))
            .map((i) => (
              <span
                key={i}
                className="  cursor-pointer hover:font-bold mb-[.1em]"
                onClick={() => {
                  setTagInp("");
                  setTagsArr([...tagsArr, i]);
                }}
              >
                {i}
              </span>
            ))}
        </div>
      )}
    </div>
  );
};

export default InputTags;
