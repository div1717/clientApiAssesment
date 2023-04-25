import "./App.css";
import { useState, useEffect } from "react";
import Table from "./components/Table";
import logo from './assets/images/oruPhones logo.png'
import Button from './components/Button'
import Table2 from "./components/Table2";

function App() {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);
  const [data5, setData5] = useState([]);

  const [data, setData] = useState([]);

  const handleTask1 = async () => {
    // const res = await fetch("/users/task3");
    // const data = await res.json();
    // setData1(data.result);
    console.log(data1);
    console.log(data2);
    console.log(data3);
    console.log(data4);
    console.log(data5);
  };

  useEffect(() => {
    const Fetch = async () => {
      const res1 = await fetch("https://backend-api-t58t.onrender.com/users/task1");
      const data1 = await res1.json();
      setData1(data1.result);

      const res2 = await fetch("https://backend-api-t58t.onrender.com/users/task2");
      const data2 = await res2.json();
      setData2(data2.result);

      const res3 = await fetch("https://backend-api-t58t.onrender.com/users/task3");
      const data3 = await res3.json();
      setData3(data3.result);

      const res4 = await fetch("https://backend-api-t58t.onrender.com/users/task4");
      const data4 = await res4.json();
      setData4(data4.result);

      const res5 = await fetch("https://backend-api-t58t.onrender.com/users/task5");
      const data5 = await res5.json();
      setData5(data5.result);
    };
    Fetch();
  }, []);

  return (
    <>
      <div className="rootContainer">
        <img className="logo" src={logo} alt="logo"/>
        <div className="buttonContainer">
          <Button data={data1} setData={setData} task={"Task 1"}/>
          <Button data={data2} setData={setData} task={"Task 2"}/>
          <Button data={data3} setData={setData} task={"Task 3"}/>
          <Button data={data4} setData={setData} task={"Task 4"}/>
          <Button data={data5} setData={setData} task={"Task 5"}/>
        </div>
        {data==data1 && <h1>Task 1</h1>}
        {data==data2 && <h1>Task 2</h1>}
        {data==data3 && <h1>Task 3</h1>}
        {data==data4 && <h1>Task 4</h1>}
        {data==data5 && <h1>Task 5</h1>}
        <div className="tables">
          {data.length!=0 && data!=data5 && <Table arr={data} />}
          {data.length!=0 && data==data5 && <Table2 arr={data} />}
        </div>
      </div>
    </>
  );
}

export default App;
