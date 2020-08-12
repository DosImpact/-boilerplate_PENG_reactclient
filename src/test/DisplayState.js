import * as React from "react";

export default (props) => {
  return (
    <div>
      <pre
        style={{
          backgroundColor: "#f6f8fa",
          padding: ".5rem",
          fontSize: "1rem",
        }}
      >
        <strong>props </strong> = {JSON.stringify(props, null, 2)}
      </pre>
    </div>
  );
};
