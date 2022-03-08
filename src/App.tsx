import "./Style.css";
import "antd/dist/antd.min.css";
import { List, Card } from "antd";

const App = () => {
  const data = [
    {
      title: "Title 1",
    },
    {
      title: "Title 2",
    },
    {
      title: "Title 3",
    },
    {
      title: "Title 4",
    },
    {
      title: "Title 5",
    },
    {
      title: "Title 6",
    },
    {
      title: "Title 7",
    },
    {
      title: "Title 8",
    },
  ];

  return (
    <div className="center">
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={data}
        pagination={{ pageSize: 4 }}
        renderItem={(item) => (
          <List.Item>
            <Card title={item.title}>Card content</Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default App;
