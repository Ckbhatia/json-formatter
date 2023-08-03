import { ValidationType } from "./types";

const Validation: ValidationType = ({ validationErrorMessage }) => {
  return (
    <div
      className={`validation-container ${
        validationErrorMessage ? "error" : "success"
      }`}
    >
      {validationErrorMessage ? (
        <p className="text error">{validationErrorMessage}</p>
      ) : (
        <p className="text success">JSON is valid!</p>
      )}
    </div>
  );
};
export default Validation;
