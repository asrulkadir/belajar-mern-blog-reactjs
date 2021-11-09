import React from 'react';
import { RegisterBg } from '../../assets';
import { Button, Gap, Input, Link } from '../../components';
import "./register.scss";
import { useHistory } from 'react-router';

const Register = () => {
    const history = useHistory();
    return (
        <div className="main-page">
            <div className="left">
                <img src={RegisterBg} alt="ImageBg" className="bg-image" />
            </div>
            <div className="right">
                <p className="title">Register</p>
                <Input label="Full Name" placeholder="Full Name" />
                <Gap height={18} />
                <Input label="Email" placeholder="Email" />
                <Gap height={18} />
                <Input label="Password" placeholder="Password" />
                <Gap height={50} />
                <Button title="Register" onClick={() => history.push("/login")} />
                <Gap height={100} />
                <Link title="Kembali ke Login" onClick={() => history.push("/login")} />
            </div>
        </div>
    )
}

export default Register
