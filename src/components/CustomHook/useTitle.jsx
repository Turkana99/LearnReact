import { useEffect } from "react";
function useTitle(num) {
  useEffect(() => {
    document.title = `Count ${num}`;
  }, [num]);
  return <div></div>;
}

export default useTitle;
