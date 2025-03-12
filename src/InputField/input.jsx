import { useCallback, useEffect, useState } from "react";
import "./input.css";

const InputField = ({ setText }) => {
  const [saveInput, setSaveInput] = useState("");
  const handleClick = useCallback(() => {
    setText(saveInput);
  }, [setText, saveInput]);

  const handleKeyPress = useCallback(
    (event) => {
      const key = event.key;
      if (key === "Enter") {
        handleClick();
      }
    },
    [handleClick]
  );

  useEffect(() => {
    if (saveInput === "") {
      setText("");
    }
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress, saveInput, setText]);
  return (
    <div className="input">
      <input
        value={saveInput}
        placeholder="Input text or URL..."
        onChange={(e) => setSaveInput(e.target.value)}
        className="input-text"
      />
      <button className="button-input" onClick={handleClick}>
        Create
      </button>
    </div>
  );
};

export default InputField;
