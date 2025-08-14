import { useState } from "react";
import useTitle from "./useTitle";
function TitleOne() {
  const [num, setNum] = useState(0);
  //   useEffect(() => {
  //     document.title = `Count ${num}`;
  //   }, [num]);
  useTitle(num);
  return (
    <div>
      <button onClick={() => setNum(num + 1)}>Count - {num}</button>
    </div>
  );
}

export default TitleOne;
