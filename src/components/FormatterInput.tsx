import { FormatterInputType } from "./types";

const FormatterInput: FormatterInputType = ({ value, handleChange }) => {
  return (
    <div className="formatter-input">
      <textarea
        className="textarea"
        value={value}
        onChange={handleChange}
        placeholder="Paste JSON here or enter the URL of a JSON file."
      />
    </div>
  );
};

export default FormatterInput;
