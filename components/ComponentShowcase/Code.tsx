import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Code = ({ code }: { code: string }) => {
  return (
    <SyntaxHighlighter
      language="typescript"
      style={atomOneDarkReasonable}
      customStyle={{
        padding: "25px",
        background: "#1a1a1a",
      }}
      showLineNumbers={true}
    >
      {code}
    </SyntaxHighlighter>
  );
};

export default Code;
