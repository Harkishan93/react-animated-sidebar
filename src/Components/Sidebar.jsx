import React, { useEffect, useState } from "react";
import {} from 'react-bootstrap';
import { motion,AnimatePresence } from "framer-motion";
import { MdDashboard, MdOutlineContactMail, MdOutlineSettings } from "react-icons/md"
import { FcAbout } from "react-icons/fc"
import { } from "react-icons/bs"
import { FaUserAlt, FaInfoCircle, FaComment, FaBars, FaSearch } from "react-icons/fa"
import { NavLink, Outlet } from "react-router-dom"
function Sidebar({ children }) {
    const [icon, setIcon] = useState(true)
    const Route = [
        {
            path: "/",
            name: "Dashboard",
            icon: <MdDashboard />
        },
        {
            path: "/user",
            name: "User",
            icon: <FaUserAlt />
        }
        ,
        {
            path: "/about",
            name: "About",
            icon: <FaInfoCircle />
        }
        ,
        {
            path: "/contact",
            name: "Contact",
            icon: <MdOutlineContactMail />
        }
        ,
        {
            path: "/messages",
            name: "Message",
            icon: <FaComment />
        },
        {
            path: "/setting",
            name: "Setting",
            icon: <MdOutlineSettings />
        }
    ]
    const animateApi = {
        hidden: {
            x: -40,
            opacity: 0,
        },
        show: {
            x: 0,
            opacity: .8,
            transition: {
                delay: .5,
            }
        },
        exits: {
            x: -100,
            opacity: 0,
        }

    }
    return (
        <>
            <div className="main">
                <motion.div animate={{ width: icon ? "200px" : "40px"  }} transition={{ type: "spring", damping: "8" }} className="sideBar">
                    <div className="top_section ">
                        <AnimatePresence exitBeforeEnter>
                            {icon && <motion.h1 variants={animateApi} initial="hidden" animate="show" exit="exits" className="logo">
                                Harkishan
                            </motion.h1>}
                        </AnimatePresence>
                        <AnimatePresence exitBeforeEnter>
                            <motion.div variants={animateApi} initial="hidden" animate="show" exit="exits" className="bars">
                                <FaBars style={{ fontSize: "24px" }} onClick={() => { setIcon(!icon) }} />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                    <div className="search">
                        <FaSearch style={{ fontSize: "20px", marginLeft: "4px" }} />
                        <AnimatePresence exitBeforeEnter>
                            {icon && <motion.div variants={animateApi} initial="hidden" animate="show" exit="exits"><input type="search" placeholder="search" style={{ width: "120px" }} /></motion.div>}
                        </AnimatePresence>

                    </div>
                    <section className="rout">
                        {Route.map((value, index) => {
                            return <NavLink className="ma" to={value.path} key={index} >
                               <motion.div  className="icon">{value.icon}</motion.div>
                                <AnimatePresence exitBeforeEnter>
                                    {icon && <motion.div whileHover={{x:[0,-4,0]}}  variants={animateApi} initial="hidden" animate="show" exit="exits" className="name">{value.name}</motion.div>}
                                </AnimatePresence>
                            </NavLink>
                        })}
                    </section>
                </motion.div>
                <div className="home">
                    {children}
                </div>
            </div>
        </>
    )
}

export default Sidebar;