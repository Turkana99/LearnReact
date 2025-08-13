import { useRef } from "react";
function RefDom() {
  const inputRef = useRef(null); 

  const focusInput = () => {
    inputRef.current.focus(); 
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Adınızı yazın" />
      <button onClick={focusInput}>Fokus et</button>
    </div>
  );
}

export default RefDom;





