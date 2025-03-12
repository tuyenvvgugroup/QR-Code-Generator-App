import "./generator.css";
import InputField from "../InputField/input";
import Download from "../Download/download";
import { useEffect, useRef, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

const Generator = () => {
  const [text, setText] = useState("");
  const qrRef = useRef(null);
  const [isAnimation, setIsAnimation] = useState(false);

  useEffect(() => {
    if (text) {
      setIsAnimation(true);
    } else {
      setIsAnimation(false);
    }
  }, [text]);

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
          <QRCodeCanvas value={text} size={100}></QRCodeCanvas>
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
