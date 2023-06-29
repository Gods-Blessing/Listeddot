import './Dashboard.css';

// importing images
import dashboard from './images/dashboard_icon.svg';
import searchicon from './images/Search icon.svg';
import bell from './images/bell.svg';
import profile from './images/image 1.png';
import vector from './images/Vector.svg';
import totaltransactionicon from './images/total_transactions_icon.svg';
import likes from './images/Vectorlikes.svg';
import usericon from './images/user_icon.svg';
import manypeople from './images/Vectormaypeople.svg';
import sidearrow from './images/Vector_right.svg';
import transactionicon from './images/transaction_icon.svg';
import scheduleicon from './images/schedule_icon.svg';
import settingicon from './images/setting_icon.svg';
import navicon from '../../assets/hamburger.png';
 
// for main chart
import lightred from './images/lightredEllipse.svg';
import lightgreenEllipse from './images/lightgreenEllipse.svg'

// components
import PieeChart from './piechart/PieeChart';
import { ResponsiveContainer } from 'recharts';
import MainChart from './mainchart/MainChart';
import { useState } from 'react';


function Dashboard(){
    const [shownav, setShownav] = useState(true);

    return(
        <section className="dashboard-main-section">

            {
                shownav && (

            <nav className='dashboard-small-navigation'  >
                <div>
                <h2>
                    Board.
                </h2>

                <ul>
                    <li>
                        <img src={dashboard} alt="" />
                        <p>Dashboard</p>
                    </li>

                    <li>
                        <img src={transactionicon} alt="" />
                        <p>Transactions</p>
                    </li>
                    <li>
                        <img src={scheduleicon} alt="" />
                        <p>Schedules</p>
                    </li>
                    <li>
                        <img src={usericon} alt="" />
                        <p>Users</p>
                    </li>
                    <li>
                        <img src={settingicon} alt="" />
                        <p>Settings</p>
                    </li>
                    
                    
                </ul>
                </div>

                <div className='nav-last-div'>
                    <p>Help</p>
                    <p>Contact Us</p>
                </div>
            </nav>
                )
            }

            <nav className='dashboard-navigation'  >
                <div>
                <h2>
                    Board.
                </h2>

                <ul>
                    <li>
                        <img src={dashboard} alt="" />
                        <p>Dashboard</p>
                    </li>

                    <li>
                        <img src={transactionicon} alt="" />
                        <p>Transactions</p>
                    </li>
                    <li>
                        <img src={scheduleicon} alt="" />
                        <p>Schedules</p>
                    </li>
                    <li>
                        <img src={usericon} alt="" />
                        <p>Users</p>
                    </li>
                    <li>
                        <img src={settingicon} alt="" />
                        <p>Settings</p>
                    </li>
                    
                    
                </ul>
                </div>

                <div className='nav-last-div'>
                    <p>Help</p>
                    <p>Contact Us</p>
                </div>
            </nav>


            {/* dashboard */}
            <div className='dash-board'>

                {/* 1st div */}
                <div className='dash-1st-div'>
                    <h2>Dashboard</h2>

                    <div className='dash-1st-1st-div'>
                        <div className=' search-profile'>
                            <input type="text" placeholder='Search...' />
                            <img src={searchicon} alt="" />
                        </div>

                        <div>
                            <img src={bell} alt="" />
                        </div>

                        <div>
                            <img className='profile-img' src={profile} alt="" />
                        </div>

                        <div onClick={()=>setShownav(!shownav)} className='nav-icon'>
                            <img src={navicon} alt="" />
                        </div>
                    </div>
                </div>

                {/* 2nd div */}
                <div className='dash-2nd-div'>
                    <div className='vector'>
                        <img src={vector} alt="" />
                        <p className='card-title'>Total Revenue</p>
                        <p className='card-amount'>$2,129,430</p>
                    </div>

                    <div className='totaltransaction'>
                        <img src={totaltransactionicon} alt="" />
                        <p className='card-title'>Total Transactions</p>
                        <p className='card-amount'>$1,520</p>
                    </div>
                    
                    <div className='likes'>
                        <img src={likes} alt="" />
                        <p className='card-title'>Total Likes</p>
                        <p className='card-amount'>9,721</p>
                    </div>

                    <div className='total-users'>
                        <img src={manypeople} alt="" />
                        <p className='card-title'>Total Users</p>
                        <p className='card-amount'>892</p>
                    </div>
                </div>

                {/* chart */}
                <div className='chart'>
                    <div>
                        <div>
                            <p className='montserrat'>Activities</p>
                            <p>May-June 2021</p>
                        </div>

                        <div className='main-chart-indents'>
                            <div>
                                <img src={lightred} alt="" />
                                <p>Guest</p>
                            </div>

                            <div>
                                <img src={lightgreenEllipse} alt="" />
                                <p>User</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <MainChart />
                    </div>

                </div>

                {/* last div */}
                <div className='dash-4th-div'>
                    {/* <ResponsiveContainer width='auto' height='auto'> */}
                        <PieeChart/>
                    {/* </ResponsiveContainer> */}
                    <div className='schedule-div'>
                        <div>
                            <p>Today's schedule</p>
                            <div className='date-arrow'>
                                <p>See All</p>
                                <img src={sidearrow} alt="" />
                            </div>
                        </div>

                        <ul>
                            <li>
                                <div className='vertical-div vertical-green'></div>
                                <div>
                                    <p className='schedule-task'>Meeting with suppliers from Kuta Bali</p>
                                    <p className='time-place'>14.00-15.00</p>
                                    <p className='time-place'>at Sunset Road, Kuta Bali</p>
                                </div>
                            </li>

                            <li>
                                <div className='vertical-div vertical-purple'></div>
                                <div>
                                    <p className='schedule-task'>Meeting with suppliers from Kuta Bali</p>
                                    <p className='time-place'>14.00-15.00</p>
                                    <p className='time-place'>at Sunset Road, Kuta Bali</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Dashboard;