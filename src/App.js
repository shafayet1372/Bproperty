import { useEffect, useState } from "react";
import EmptyData from "./components/EmptyData";
import Master from "./components/Master";

function App() {
  let [width, setWidth] = useState()

  let handler = () => {
    setWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', handler)
    setWidth(window.innerWidth)
  }, [])

  return <>
    {width >= 768 ? <Master /> : <EmptyData title=' Please use Desktop Version(or >=768px)' />}

  </>
}

export default App;
