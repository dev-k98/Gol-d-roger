import grid from "./roger";

function App() {
  return (
    <div className="App">
      {grid.map((row) => {
        return (
          <>
            <div
              className="App"
              style={{ display: "flex", flexDirection: "row" }}
            >
              {row.map((number) => {
                setTimeout(1000);
                return (
                  <label
                    style={{
                      backgroundColor:
                        number === 1
                          ? "black"
                          : number === 2
                          ? "#a0a0b0"
                          : "white",
                      padding: 0,
                      margin: 0,
                      height: "5px",
                      width: "5px",
                    }}
                  />
                );
              })}
            </div>
          </>
        );
      })}
    </div>
  );
}

export default App;
