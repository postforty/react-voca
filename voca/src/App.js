import "./App.css";

function App() {
  const name = "Coco";
  const naver = {
    name: "네이버",
    url: "https://naver.com",
  };
  return (
    <div className="App">
      <h1
        style={{
          color: "#f0f",
          backgroundColor: "green",
        }}
      >
        Hello! {name}.<p>{1 + 1}</p>
      </h1>
      <a href={naver.url}>{naver.name}</a>
    </div>
  );
}

export default App;
