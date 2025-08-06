import { useState, useEffect } from "react";
import "./effect.css";
function useEffectExp() {
  const [turkola, setTurkola] = useState(0);
  const [imran, setImran] = useState(0);
  useEffect(() => {
    console.log("Work every time");
  });
  useEffect(() => {
    console.log("Work first render");
  }, []);
  useEffect(() => {
    console.log("Work every turkola value change time");
  }, [turkola]);

  useEffect(() => {
    console.log("Work every imran value change time");
  }, [imran]);

  useEffect(() => {
    console.log("Work every turkola or imran value change time");
  }, [turkola, imran]);

  return (
    <div className="firstEffect">
      <div className="firstDiv">
        <button
          onClick={() => {
            setTurkola(turkola + 1);
          }}
        >
          Turkola ++
        </button>
        <div>Turkola: {turkola}</div>
      </div>
      <div>
        <button
          onClick={() => {
            setImran(imran + 1);
          }}
        >
          Imran ++
        </button>
        <div>Imran: {imran}</div>
      </div>
    </div>
  );
}

export default useEffectExp;
