import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  // const [Name, setName] = useState("Arman");
  const [form, setform] = useState({ email: "", phone: "" });

  const handleclick = () => {
    alert("hey i am clicked");
  };
  // const handleMouseOver=()=>{
  //   alert("hey i am a mouse over")
  // }
  const HandleChange = (e) => {
    // setName(e.target.value);
    setform({ ...form , [e.target.name] : e.target.value });
  };
  return (
    <>
      <div className="button">
        <button onClick={handleclick}>Click me !</button>
      </div>
      {/* <div className="red" onMouseOver={handleMouseOver}>
      I am a red div</div> */}
      <input
        type="text"
        name="email"
        value={form.email}
        onChange={HandleChange}
      />
      <input
        type="text"
        name="phone"
        value={form.phone}
        onChange={HandleChange}
      />
    </>
  );
}
export default App;