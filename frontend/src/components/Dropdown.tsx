import React, { useState } from "react";
import Icon from "./Icon";

const Dropdown = () => {
  const [options, setOptions] = useState([
    { value: "1", text: "Option 1", selected: false },
    { value: "2", text: "Option 2", selected: false },
    { value: "3", text: "Option 3", selected: false },
    { value: "4", text: "Option 4", selected: false },
    { value: "5", text: "Option 5", selected: false },
    { value: "6", text: "Option 6", selected: false },
    { value: "7", text: "Option 7", selected: false },
    { value: "8", text: "Option 8", selected: false },
  ]);
  const [selected, setSelected] = useState<number[]>([]);
  const [showOptions, setShowOptions] = useState<boolean>(false);

  const open = (): void => {
    setShowOptions(true);
  };

  const close = (): void => {
    setShowOptions(false);
  };

  const select = (index: number): void => {
    const updatedOptions = [...options];
    updatedOptions[index].selected = true;
    setSelected((prevSelected) => [...prevSelected, index]);
    setOptions(updatedOptions);
  };

  const remove = (index: number, option: any): void => {
    const updatedOptions = [...options];
    updatedOptions[options.indexOf(option)].selected = false;
    const selectedIndex = selected.indexOf(index);
    if (selectedIndex !== -1) {
      setSelected((prevSelected) => [
        ...prevSelected.slice(0, selectedIndex),
        ...prevSelected.slice(selectedIndex + 1),
      ]);
    }
    setOptions(updatedOptions);
  };

  const selectedValues = (): string[] => {
    return selected.map((index) => options[index].value);
  };


  return (
    <div className="w-full flex flex-col items-center mx-auto">
      <input name="values" type="hidden" value={selectedValues()} />
      <div className="inline-block relative w-64">
        <div className="flex flex-col items-center relative">
          <div className="w-full">
            <div className="my-2 p-1 flex border border-foreground/25 bg-current rounded">
              <div className="flex flex-auto flex-wrap">
                {selected.map((index) => (
                  <div key={options[index].value} className="flex justify-center items-center m-1 font-medium py-1 px-1 rounded bg-gray-100 border">
                    <div className="mr-2 text-xs font-normal leading-none max-w-full flex-initial">
                      {options[index].text}
                    </div>
                    <div className="flex flex-auto flex-row-reverse cursor-pointer">
                      <div onClick={() => remove(index, options[index])}>
                        <Icon iconName="faClose" />
                      </div>
                    </div>
                  </div>
                ))}
                {selected.length === 0 && (
                  <input
                    placeholder="Select a option"
                    className="bg-transparent p-1 px-2 appearance-none outline-none h-full w-full text-foreground"
                    value={selectedValues()}
                  />
                )}
              </div>
              <div className="text-foreground py-1 pl-2 pr-1 border-l flex items-center border-gray-200">
                <button
                  onClick={showOptions ? close : open}
                  type="button"
                  className="cursor-pointer text-foreground outline-none focus:outline-none"
                >
                  {showOptions ? (
                    <Icon iconName="faArrowDown" />
                  ) : (
                    <Icon iconName="faArrowUp" />
                  )}
                </button>
              </div>
            </div>
          </div>
          {showOptions && (
            <div className="w-full px-4">
              <div className="absolute shadow top-100 bg-current z-40 w-full left-0 rounded max-h-select" onClick={close}>
                <div className="flex flex-col w-full overflow-y-auto h-64">
                  {options.map((option, index) => (
                    <div
                      key={option.value}
                      className="cursor-pointer w-full border-gray-100 rounded-t border-b hover:bg-gray-700"
                      onClick={() => select(index)}
                    >
                      <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative">
                        <div className="w-full items-center flex justify-between">
                          <div className="mx-2 leading-6">{option.text}</div>
                          {option.selected && (
                            <Icon iconName="faArrowUp" />
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dropdown;