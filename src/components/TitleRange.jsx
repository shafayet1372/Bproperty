import React from "react";

export default function TitleRange({ rangeF, rangeT }) {
  return (
    <>
      {rangeF} <small>to</small> {rangeT}
    </>
  );
}
