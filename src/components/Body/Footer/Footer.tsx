import React from "react";
import "./styles.scss";
import { linksCompanyMenu, linksFeaturesMenu, linksResourcesMenu, linksSocial } from "@data";
function Footer() {
    return (
        <footer className="footer">
            <div className="footer-info">
                <div className="footer-info-block">
                    <h3 className="footer-info-block__title">Get In Touch</h3>
                    <p className="footer-info-block__subtitle">
                        the quick fox jumps over the <br /> lazy dog
                    </p>
                    <ul className="footer-info-block-social">
                        {linksSocial.map((item, key: number) => (
                            <li
                                className="footer-info-block-social-item"
                                key={key}
                            >
                                <a
                                    target="_blank"
                                    href={`https://${item.href}`}
                                >
                                    <img alt={item.title} src={item.SvgImage} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="footer-info-block">
                    <h3 className="footer-info-block__title">Company info</h3>
                    <ul className="footer-info-block-menu">
                        {linksCompanyMenu.map((item, key: number) => (
                            <li
                                className="footer-info-block-menu__item"
                                key={key}
                            >
                                <a href={item.href}>{item.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="footer-info-block">
                    <h3 className="footer-info-block__title">Features</h3>
                    <ul className="footer-info-block-menu">
                        {linksFeaturesMenu.map((item, key: number) => 
                        <li key={key} className="footer-info-block-menu__item">
                            <a href={item.href}>{item.title}</a>
                        </li>
                        )}
                    </ul>
                </div>
                <div className="footer-info-block">
                    <h3 className="footer-info-block__title">Resources</h3>
                    <ul className="footer-info-block-menu">
                        {linksResourcesMenu.map((item, key: number) => 
                        <li key={key} className="footer-info-block-menu__item">
                            <a href={item.href}>{item.title}</a>
                        </li>
                        )}
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
