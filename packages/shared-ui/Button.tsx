import { ReactDOM } from "react";

function Button(props: any) {
  return (
    <button
      {...props}
      style={{
        padding: "10px 20px",
        borderRadius: "4px",
        border: "none",
        backgroundColor: "#db8282",
        color: "#333",
      }}
    >
      {props.children}
    </button>
  );
}

export default Button;
