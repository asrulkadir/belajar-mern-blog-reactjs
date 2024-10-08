import React from 'react';
import { LoginBg } from '../../assets';
import { Button, Gap, Input, Link } from '../../components';
import { useHistory } from 'react-router';

const Login = () => {
    const history = useHistory();
    return (
        <div className="main-page">
            <div className="left">
                <img src={LoginBg} alt="ImageBg" className="bg-image" />
            </div>
            <div className="right">
                <p className="title">Login</p>
                <Input label="Email" placeholder="Email" />
                <Gap height={18} />
                <Input label="Password" placeholder="Password" />
                <Gap height={50} />
                <Button title="Login" onClick={() => history.push("/")} />
                <Gap height={100} />
                <Link title="Belum punya akun? Silahkan daftar" onClick={() => history.push("/register")} />
            </div>
        </div>
    )
}

export default Login;
