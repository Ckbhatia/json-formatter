import JsonTree from "./JsonTree";
import { FormatterOutputType } from "./types";

const FormatterOutput: FormatterOutputType = ({ json, children }) => {
  return (
    <div className="formatter-output">
      <div className="root-tree-container">
        {json && (
          <div className="tree-container">
            {"{"}
            <JsonTree elements={json} />
            {"}"}
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

export default FormatterOutput;
