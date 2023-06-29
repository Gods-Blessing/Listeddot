import { LineChart, XAxis, YAxis, CartesianGrid,Tooltip,Legend, Line} from "recharts";

const data = [
    {
      "name": "0",
      "User": 100,
      "Guest": 200,
      "amt": 2400
    },
    {
      "name": "Week 1",
      "User": 400,
      "Guest": 390,
      "amt": 2210
    },
    {
      "name": "Week 2",
      "User": 160,
      "Guest": 200,
      "amt": 2290
    },
    {
      "name": "Week 3",
      "User": 430,
      "Guest": 300,
      "amt": 2000
    },
    {
      "name": "Week 4",
      "User": 180,
      "Guest": 240,
      "amt": 2181
    },
    {
      "name": "",
      "User": 260,
      "Guest": 440,
      "amt": 2500
    },
    
  ]


function MainChart(){

    return(
        <LineChart width={730} height={250} data={data}
        margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
            {/* <CartesianGrid /> */}
            <XAxis dataKey="name" />
            <YAxis interval={"preserveEnd"} />
            <Tooltip />
            {/* <Legend /> */}
            <Line type="monotone" dataKey="Guest" stroke="rgba(233, 160, 160, 1)" />
            <Line type="monotone" dataKey="User" stroke="rgba(155, 221, 124, 1)" />
        </LineChart>
    )
}

export default MainChart;