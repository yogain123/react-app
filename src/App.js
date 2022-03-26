import "./App.css";
import { folderData } from "./data";
import { useState } from "react";

function App({ data }) {
  if (!data) {
    data = folderData;
  }
  const [expand, setExpand] = useState(false);

  if (data.isFolder) {
    return (
      <>
        {
          <div>
            <span onClick={() => setExpand(!expand)}>{data.name}</span>
            <br />
            <div style={{ display: expand ? "block" : "none", marginLeft: 30 }}>
              {data.child.map((item) => (
                <App key={item.name} data={item} />
              ))}
            </div>
          </div>
        }
      </>
    );
  } else {
    return (
      <span>
        {data.name} <br />
      </span>
    );
  }
}

export default App;
