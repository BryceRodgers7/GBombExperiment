import * as React from "react";
import { InputHTMLAttributes } from "react";

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

export function TextInput(props: Props) {
  return <input type={"text"} style={{ fontSize: "18px" }} {...props} />;
}
