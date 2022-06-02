import React from "react";
import { Dropdown } from "react-bootstrap";
import Title from "./Title";
import SubTitle from "./SubTitle";
import TitleRange from "./TitleRange";
import style from "../css/style.module.css";
export default function DropDownContainer({
  children,
  type,
  subtitle,
  rangeF,
  rangeT,
}) {
  return (
    <Dropdown style={{ minWidth: "100%" }}>
      <Dropdown.Toggle
        id="dropdown-basic"
        className={style.dropdown_toggle_fix}
      >
        <Title title={type} />
        <br />
        {type == "AREA" || type == "PRICE" ? (
          <TitleRange rangeF={rangeF} rangeT={rangeT} />
        ) : (
          <SubTitle title={subtitle} />
        )}
      </Dropdown.Toggle>

      {children}
    </Dropdown>
  );
}
