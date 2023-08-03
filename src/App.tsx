import React from "react";
import "./App.css";
import FormatterInput from "./components/FormatterInput";
import FormatterOutput from "./components/FormatterOutput";
import Validation from "./components/Validation";

function App() {
  const [inputValue, setInputValue] = React.useState("");
  const [jsonValue, setJsonValue] = React.useState("");
  const [validationErrorMessage, setValidationErrorMessage] =
    React.useState("");

  React.useEffect(() => {
    try {
      const parsed = JSON.parse(inputValue);
      setValidationErrorMessage("");
      setJsonValue(parsed);
    } catch (error: any) {
      setJsonValue("");
      setValidationErrorMessage(error.message);
    }
  }, [inputValue]);

  const handleChange = (e: any): void => {
    const { value } = e.target;
    setInputValue(value);
    setValidationErrorMessage("");
  };

  const handleCopy = (): void => {
    navigator.clipboard.writeText(JSON.stringify(jsonValue, null, 4));
  };

  return (
    <div className="App">
      <div className="info-container">
        <h1 className="heading">JSON Formatter</h1>
      </div>
      <div className="main-container">
        <div className="formatter-container">
          <FormatterInput value={inputValue} handleChange={handleChange} />
          <FormatterOutput json={jsonValue}>
            {!!inputValue ? (
              <Validation validationErrorMessage={validationErrorMessage} />
            ) : null}
          </FormatterOutput>
        </div>
        <div className="formatter-controllers">
          <button className="copy-button" onClick={handleCopy} disabled={!jsonValue}>
            Copy
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
