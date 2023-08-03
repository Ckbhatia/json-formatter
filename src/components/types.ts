type FormatterInputProps = {
  value: string;
  handleChange: (e: any) => void;
};

type FormatterOutputProps = {
  json: any;
  children: any;
};

type JsonTreeProps = {
  elements: any;
};

type ValidationProps = {
  validationErrorMessage: string;
};

export type FormatterInputType = ({
  value,
  handleChange,
}: FormatterInputProps) => JSX.Element;

export type FormatterOutputType = ({
  json,
  children,
}: FormatterOutputProps) => JSX.Element;


export type JsonTreeType = ({ elements }: JsonTreeProps) => JSX.Element;

export type ValidationType = ({ validationErrorMessage }: ValidationProps) => JSX.Element;