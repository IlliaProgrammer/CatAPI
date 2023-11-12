import React from 'react';
import PetsPaw from "../../assets/svg/PetsPaw.svg"
import Group from "../../assets/svg/Group.svg"
import nav1 from "../../assets/images/nav1.png"
import nav2 from "../../assets/images/nav2.png"
import nav3 from "../../assets/images/nav3.png"
import styles from "../Navbar/Navbar.module.css"
import { NavLink } from 'react-router-dom';
import { BREEDS_ROUTE, GALLERY_ROUTE, VOTING_ROUTE } from '../../utils/consts';

const Navbar = () => {
    return (
        <div>
            <div className={styles.logo}>
                <img src={Group} alt="err" className={styles.pow}/>
                <img src={PetsPaw} alt="err" className={styles.title}/>
            </div>
            <div>
                <p className={styles.greet}>Hi!👋</p>
                <p className={styles.info}>Let's start using CatAPI together!</p>
            </div>
            <div className={styles.navigation}>
                <p className={styles.navigation_title}>Lets start using The Cat API</p>
                <ul className={styles.navigation_buttons}>
                    <li className={styles.navigation_button}>
                        <NavLink to={VOTING_ROUTE} className={styles.router_link}>
                            <div className={styles.navigation_img1}>
                                <img src={nav1} alt="" className={styles.img1}/>
                            </div>
                            <p className={styles.link}>Voting</p>
                        </NavLink> 
                    </li>
                    <li className={styles.navigation_button}>
                        <NavLink to={BREEDS_ROUTE} className={styles.router_link}>
                            <div className={styles.navigation_img2}>
                                <img src={nav2} alt="" className={styles.img2}/>
                            </div>
                            <p className={styles.link}>breeds</p>
                        </NavLink>
                    </li>
                    <li className={styles.navigation_button}>
                        <NavLink to={GALLERY_ROUTE} className={styles.router_link}>
                            <div className={styles.navigation_img3}>
                                <img src={nav3} alt="" className={styles.img3}/>
                            </div>
                            <p className={styles.link}>GALLERY</p>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;