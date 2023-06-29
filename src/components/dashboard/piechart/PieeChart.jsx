import downarrow from '../images/Vector_down.svg';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

// image
import greenelipse from '../images/greenEllipse.svg';
import yellowellipse from '../images/yellowEllipse.svg';
import redellipse from '../images/redEllipse.svg';



const data = [
    { name: 'Group A', value: 55 },
    { name: 'Group B', value: 31 },
    { name: 'Group C', value: 14 },
  ];


  const COLORS = ['rgba(152, 216, 158, 1)', 'rgba(246, 220, 125, 1)', 'rgba(238, 132, 132, 1)'];

function PieeChart(){

    return(
        <div className="piechart-div">
            <div>
                <p>Top products</p>
                <div className='date-arrow'>
                    <p>May-June 2021</p>
                    <img src={downarrow} alt="" />
                </div>
            </div>

            <div className='pie-chart-2nd-div'>
                <div className='piechart'>
                    <PieChart className='piee' width={240} height={240}>
                        <Pie data={data}
                            dataKey="value"
                            cx="50%" cy="50%" outerRadius={80}
                            labelLine={false}
                            >
                            {
                            data.map((entry, index) => (
                                <>
                                <Cell key={`cell-${index}`} fill={COLORS[index]}/>
                                </>
                            ))
                            }
                        </Pie>
                    </PieChart>
                </div>

                <div className='opposite-pie-chart'>
                    <div className='indents'>
                        <img src={greenelipse} alt="" />
                        <div>
                            <p>Basic Tees</p>
                            <p>55%</p>
                        </div>
                    </div>

                    <div className='indents'>
                        <img src={yellowellipse} alt="" />
                        <div>
                            <p>Custom Short Pants</p>
                            <p>31%</p>
                        </div>
                    </div>

                    <div className='indents'>
                        <img src={redellipse} alt="" />
                        <div>
                            <p>Super Hoodies</p>
                            <p>14%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default PieeChart;