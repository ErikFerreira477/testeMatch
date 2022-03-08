import "./Style.css";
import "antd/dist/antd.min.css";
import axios from "axios";
import { List, Card } from "antd";
import { useEffect, useState } from "react";

const App = () => {
  const [poke, setPoke] = useState<Array<String>>([]);

  useEffect(() => {
    getPokes();
  }, []);

  const getPokes = () => {
    axios({
      method: "get",
      url: "https://pokeapi.co/api/v2/pokemon?limit=40",
    }).then(function (response) {
      response.data.results.forEach(function (poke: any) {
        setPoke((oldPokes: any) => [...oldPokes, poke.name]);
      });
    });
  };

  console.log(poke);

  return (
    <div className="center">
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={poke}
        pagination={{ pageSize: 4 }}
        renderItem={(item) => (
          <List.Item>
            <Card>{item}</Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default App;
