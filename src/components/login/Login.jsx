import './Login.css';

import googleicon from '../../assets/google-icon 1.svg';

import appleicon from '../../assets/apple 1.svg';
import { Link } from 'react-router-dom';


function Login(){

    return (
        <section className='login-main-section'>
            <div className="first-div flexing">
                <p>Board.</p>
            </div>

            <div className="second-div flexing">
                <div className="second-inner-div">

                    <div >
                        <p>Sign In</p>
                        <p>Sign in to your account</p>
                    </div>
                
                    <div className='signing-methods'>
                        <div>
                            <img src={googleicon} alt="" />
                            <span>Sign in with Google</span>
                        </div>
                        <div>
                            <img src={appleicon} alt="" />
                            <span>Sign in with Apple</span>
                        </div>
                    </div>

                    <form className='signing-form' action="">

                        <div>
                            <label htmlFor="">Email address</label>
                            <input type="text" value='johndoe@gmail.com' />
                        </div>

                        <div>
                            <label htmlFor="">Password</label>
                            <input type="password" value='55555'/>
                        </div>

                        <p className='forgot-password'>Forgot password?</p>

                            <button className='singin-btn'>
                                <Link className='to-signin' to='/home'>
                                        Sign In
                                        
                                </Link>
                            </button>

                    </form>

                    <p className='register-line'>Don't have an account? <span>Register here</span></p>

                </div>
            </div>

        </section>
    )
}

export default Login;