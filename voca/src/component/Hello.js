import World from "./World";
import styles from "./Hello.module.css";
import { useState } from "react";

export default function Hello({ age }) {
  const msg = age > 19 ? "성인 입니다." : "미성년자 입니다.";
  function showName() {
    console.log("Mike");
  }
  function showAge(age) {
    console.log(age);
  }
  function showText(txt) {
    console.log(txt);
  }
  // let name = "Mike";
  const [name, setName] = useState("Mike");

  function changeName() {
    const newName = name === "Mike" ? "Jane" : "Mike";
    console.log(name);
    // document.getElementById("name").innerText = name;
    setName(newName);
  }

  return (
    <div>
      <p
        style={{
          color: "#f00",
          borderRight: "12px solid #000",
          marginBottom: "50px",
          opacity: 0.1,
        }}
      >
        Hello
      </p>
      <button onClick={showName}>Show name</button>
      <button
        onClick={() => {
          showAge(40);
        }}
      >
        {/* <button
      onClick={() => {
        console.log(40);
      }}
    > */}
        Show age
      </button>
      <input
        type="text"
        onChange={(e) => {
          const txt = e.target.value;
          showText(txt);
        }}
      />
      {/* <input
      type="text"
      onChange={(e) => {
        console.log(e.target.value);
      }}
    /> */}
      {/* <input type="text" onChange={showText} /> */}
      <World />
      <div className={styles.box}>Hello</div>
      <div>
        <h1 id="name">state</h1>
        <h2>
          {name}({age}) : {msg}
        </h2>
        <button onClick={changeName}>Change</button>
      </div>
    </div>
  );
}
