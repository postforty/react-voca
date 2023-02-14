import World from "./World";
import styles from "./Hello.module.css";

function showName() {
  console.log("Mike");
}
function showAge(age) {
  console.log(age);
}
function showText(txt) {
  console.log(txt);
}

const Hello = () => (
  <>
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
  </>
);
export default Hello;
