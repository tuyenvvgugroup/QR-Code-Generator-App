import "./download.css";

const Download = ({ qrRef, className }) => {
  const handleClick = () => {
    const canvas = qrRef.current.querySelector("canvas");
    const url = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = url;
    link.download = "qrcode.png";
    link.click();
  };
  return (
    <button className={`button-download ${className}`} onClick={handleClick}>
      Download
    </button>
  );
};

export default Download;
