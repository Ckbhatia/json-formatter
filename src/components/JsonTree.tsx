import { JsonTreeType } from "./types";

const JsonTree: JsonTreeType = ({ elements }) => {
  const keys = Object.keys(elements);

  const list = keys.map((key, index) => {
    const elementValue = elements[key];
    const elementValueType = typeof elementValue;

    return (
      <div className="parent" key={index}>
        {elementValueType === "object" ? (
          <div className="child">
            <span>"{key}": </span>
            {Array.isArray(elementValue) ? (
              <>
                {" ["}
                {elementValue.map((item: any, index: number, elements: any) => (
                  <div key={index}>
                    {" {"}
                    <JsonTree elements={item} />
                    {elements.length - 1 !== index ? " }," : "}"}
                  </div>
                ))}
                {" ]"}
              </>
            ) : (
              <>
                {" {"}
                <JsonTree elements={elementValue} />
                {" },"}
              </>
            )}
          </div>
        ) : (
          <>
            <span>"{key}"</span>
            <span>
              :{" "}
              {elementValueType === "string"
                ? `"${elementValue}"`
                : elementValue}
              {keys?.length - 1 === index ? "" : " ,"}
            </span>
          </>
        )}
      </div>
    );
  });

  return <div>{list}</div>;
};

export default JsonTree;
