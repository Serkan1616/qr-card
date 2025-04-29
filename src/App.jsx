import "./App.css";
import image_qr_code from "./assets/image-qr-code.png";

function App() {
  return (
    <div className="flex min-h-screen bg-[hsl(212,45%,89%)] font-sora justify-center items-center ">
      <div className="w-[320px] rounded-xl p-3 h-[499px] flex flex-col gap-2 bg-[hsl(0,0%,100%)]">
        <img className="rounded-lg" src={image_qr_code} alt="" />
        <h1 className="text-center text-[hsl(218,44%,22%)] font-extrabold mt-4 px-5">
          Improve your front-end skills by building projects
        </h1>
        <p className="text-[13px] px-5 text-center text-[hsl(216,15%,48%)]">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}

export default App;
