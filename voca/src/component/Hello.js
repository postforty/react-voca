import World from "./World";
import styles from "./Hello.module.css";

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
    <World />
    <div className={styles.box}>Hello</div>
  </>
);
export default Hello;
