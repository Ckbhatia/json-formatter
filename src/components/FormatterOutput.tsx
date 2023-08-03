import JsonTree from "./JsonTree";
import { FormatterOutputType } from "./types";

const FormatterOutput: FormatterOutputType = ({ json, children }) => {
  return (
    <div className="formatter-output">
      <div className={`inner ${!json ? 'full-height': ''}`}>
        {"{"}
        {json && <JsonTree elements={json} />}
        {"}"}
      </div>
      {children}
    </div>
  );
};

export default FormatterOutput;
