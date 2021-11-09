import React from 'react'
import { Facebook, Github, Instagram, LinkedIn, LogoMern, Whatsapp } from '../../../assets';
import "./footer.scss";

const Icon = ({img}) => {
    return (
        <div className="icon-wrapper">
             <img className="icon-medsos" src={img} alt="icon" />
        </div>
    )
}
const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div>
                    <img className="logo" src={LogoMern} alt="Logo Mern" />
                </div>
                <div className="social-wrapper">
                    <Icon img={Facebook} />
                    <Icon img={Instagram} />
                    <Icon img={LinkedIn} />
                    <Icon img={Github} />
                    <Icon img={Whatsapp} />
                </div>
            </div>
            <div className="copyright">
                <p>Copyright</p>
            </div>
        </div>
    )
}

export default Footer;
