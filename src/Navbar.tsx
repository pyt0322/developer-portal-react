import { useState } from "react";
import logo from "./developer_logo.png";

type Props = {
  color?: string;
  callback: () => void
};

export const Navbar = (props: Props) => {
  const [type, setType] = useState("fire");

  return (
    <div className="navbar">
      <img src={logo} alt="handy dandy logo"></img>
      <div>{props.color}</div>
      <button onClick={props.callback}>change color</button>
      <div>
        <a href=".">Docs</a>
        <a href=".">Support</a>
        <a href=".">Gallery</a>
        <a href=".">Profile</a>
      </div>
    </div>
  );
};
