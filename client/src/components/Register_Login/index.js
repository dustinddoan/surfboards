import React from 'react';
import MyButton from '../utils/button'
import Login from './login'

const RegisterLogin = () => {
    return (
        <div className="page_wrapper">
            <div className="container">
                <div className="register_login_container">
                    <div className="left">
                        <h1>New Customer</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus sed nibh non scelerisque. Sed odio ex, feugiat id lectus a, venenatis convallis lectus. Nam lobortis nibh quis consequat congue. Nunc lacinia condimentum nisi vitae vestibulum. Suspendisse ornare, ex vitae facilisis vulputate, arcu sapien sodales metus, eget feugiat elit justo sed lacus</p>
                        <MyButton
                            type="default"
                            title="Create an account"
                            linkTo="/register"
                            addStyles={{
                                margin: '10px 0 0 0'
                            }}
                        />
                    </div>
                    <div className="right">
                        <h2>Registered customers</h2>
                        <p>If you have an account please log in</p>
                        <Login/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterLogin;