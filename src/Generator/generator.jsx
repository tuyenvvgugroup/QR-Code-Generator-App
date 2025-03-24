import "./generator.css";
import InputField from "../InputField/input";
import Download from "../Download/download";
import { useCallback, useEffect, useRef, useState } from "react";
import QRCode from "qrcode";

const Generator = () => {
  const [text, setText] = useState("");
  const qrRef = useRef(null);
  const [isAnimation, setIsAnimation] = useState(false);
  const canvasRef = useRef(null);

  const createQRCode = useCallback(async () => {
    if (!canvasRef.current && !text) return;
    try {
      await QRCode.toCanvas(canvasRef.current, text, { width: 130 });
    } catch {
      console.error("Error");
    }
  }, [canvasRef, text]);

  useEffect(() => {
    if (text) {
      setIsAnimation(true);
      createQRCode();
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
          <canvas ref={canvasRef} />
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
