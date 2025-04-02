import "./generator.css";
import InputField from "../InputField/input";
import Download from "../Download/download";
import { useCallback, useEffect, useRef, useState } from "react";
import QRCode from "qrcode";

const Generator = () => {
  const [text, setText] = useState("");
  const qrRef = useRef(null);
  const [isAnimation, setIsAnimation] = useState(false);

  const createQRCode = useCallback(() => {
    var canvas = document.getElementById("canvas");
    QRCode.toCanvas(canvas, text, function (error) {
      if (error) console.error("Error");
      console.log("Success");
    });
  }, [text]);

  const handleClick = () => {
    createQRCode();
  };

  useEffect(() => {
    if (text) {
      setIsAnimation(true);
    } else {
      setIsAnimation(false);
    }
  }, [text, createQRCode]);

  return (
    <div className="generator">
      <h1>QR Code Generator App</h1>
      <InputField setText={setText} />
      {text && (
        <h2 className={`fade-in ${isAnimation ? "show" : ""}`}>
          QR Code: {text}
        </h2>
      )}
      {text && (
        <div
          className={`qrcode fade-in ${isAnimation ? "show" : ""}`}
          ref={qrRef}
        >
          <canvas id="canvas" />
          <button className="qrcode-button" onClick={handleClick}>
            Generator
          </button>
        </div>
      )}
      {text && (
        <Download
          qrRef={qrRef}
          className={`fade-in ${isAnimation ? "show" : ""}`}
        />
      )}
    </div>
  );
};

export default Generator;
