import React, { useState } from 'react'
import "./Home.scss"

import bg1 from "./../Assets/1.5x/bg1.png";
import bg2 from "./../Assets/1.5x/bg2.png";
import bg3 from "./../Assets/1.5x/bg3.png";
import bg4 from "./../Assets/1.5x/bg4.png";

import navbrand from "./../Assets/1.5x/logo.png"
import { motion } from "framer-motion"
import { FiSearch } from "react-icons/fi";
import { IoBagOutline, IoMenu } from "react-icons/io5";

import green from "./../Assets/1.5x/Dolph popcorn design 1.png"
import g1 from "./../Assets/1.5x/a3.png"
import g2 from "./../Assets/1.5x/a1.webp"

import red from "./../Assets/1.5x/Dolph popcorn design 1-1.png"
import r1 from "./../Assets/1.5x/s1.png"
import r2 from "./../Assets/1.5x/s1.png"

import yello from "./../Assets/1.5x/Dolph popcorn design 1-2.png"
import y1 from "./../Assets/1.5x/b2.png"
import y2 from "./../Assets/1.5x/b1.webp"

import blue from "./../Assets/1.5x/Dolph popcorn design 1-3.png"
import b1 from "./../Assets/1.5x/bb1.png"
import b2 from "./../Assets/1.5x/bb2.png"

export const Home = () => {

    const [color, setcolor] = useState("green");
    const handleColor = (c) => {
        document.getElementById(c).click()
    }

    const handlebg = (c) => {
        setcolor(c)
    }

    return (
        <>
            <div className='drink-div'>
                <div className="navbar-div">
                    <div className='me-5'>
                        <img src={navbrand} alt="" />
                    </div>

                    <div className='navbar-item-div'>
                        <div className="navbar-item">Home</div>
                        <div className="navbar-item">Product</div>
                        <div className="navbar-item">Orders</div>
                        <div className="navbar-item">About</div>

                        <FiSearch className='navbar-item-icon' />
                        <IoBagOutline className='navbar-item-icon mx-3' />

                        <IoMenu className='navbar-item-icon menu' />
                    </div>
                </div>


                < img src={bg1} className={`${color == "green" ? "bg-animation" : "bg"}`} alt="" style={{ zIndex: color == "green" ? 1 : 0, opacity: color == "green" ? 1 : 0 }} />


                < img src={bg2} className={`${color == "red" ? "bg-animation" : "bg"}`} alt="" style={{ zIndex: color == "red" ? 1 : 0, opacity: color == "red" ? 1 : 0 }} />


                < img src={bg3} className={`${color == "yellow" ? "bg-animation" : "bg"}`} alt="" style={{ zIndex: color == "yellow" ? 1 : 0, opacity: color == "yellow" ? 1 : 0 }} />


                < img src={bg4} className={`${color == "blue" ? "bg-animation" : "bg"}`} alt="" style={{ zIndex: color == "blue" ? 1 : 0, opacity: color == "blue" ? 1 : 0 }} />


                <div className="product-container">

                    {color == "green" ?
                        <motion.div
                            initial={{ y: -90 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="product-one">
                            <img src={green} className='product-img' alt="" />
                            <img src={g1} className='product-g1' alt="" />
                            <img src={g2} className='product-g2' alt="" />
                        </motion.div>

                        :
                        null}


                    {color == "red" ?
                        <motion.div
                            initial={{ y: -90 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="product-one">
                            <img src={red} className='product-img' alt="" />
                            <img src={r1} className='product-r1' alt="" />
                            <img src={r2} className='product-r2' alt="" />
                        </motion.div>
                        :
                        null}


                    {color == "yellow" ?
                        <motion.div
                            initial={{ y: -90 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="product-one">
                            <img src={yello} className='product-img' alt="" />
                            <img src={y1} className='product-r1' alt="" />
                            <img src={y2} className='product-r2' alt="" />
                        </motion.div>
                        : null}


                    {color == "blue" ?
                        <motion.div
                            initial={{ y: -90 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="product-one">
                            <img src={blue} className='product-img' alt="" />
                            <img src={b1} className='product-r1' alt="" />
                            <img src={b2} className='product-r2' alt="" />
                        </motion.div>
                        :
                        null}

                    <div className="product-two">
                        <div className="bg-container">
                            <a href="#one" className='link'>
                                <motion.div
                                    id='one'
                                    onClick={() => { handleColor("one"); handlebg("green"); }}
                                    className="bg-card green" >
                                    <h2>Apple Flavored</h2>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis corrupti facilis optio fugiat quisquam vitae tempora labore harum magni deserunt, unde deleniti ipsum sit, ex similique, distinctio porro voluptatibus modi!
                                    <br />
                                    <button className='btn mt-2 green-btn'>Buy now</button>
                                </motion.div>
                            </a>

                            <a href="#two" className='link'>
                                <motion.div
                                    id='two'
                                    onClick={() => { handleColor("two"); handlebg("red"); }}
                                    className="bg-card red" >
                                    <h2>Strawberry Flavored</h2>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis corrupti facilis optio fugiat quisquam vitae tempora labore harum magni deserunt, unde deleniti ipsum sit, ex similique, distinctio porro voluptatibus modi!
                                    <br />
                                    <button className='btn mt-2  red-btn'>Buy now</button>
                                </motion.div>
                            </a>

                            <a href="#three" className='link'>
                                <motion.div
                                    id='three'
                                    onClick={() => { handleColor("three"); handlebg("yellow"); }}
                                    className="bg-card yello" >
                                    <h2>Bananna Flavored</h2>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis corrupti facilis optio fugiat quisquam vitae tempora labore harum magni deserunt, unde deleniti ipsum sit, ex similique, distinctio porro voluptatibus modi!
                                    <br />
                                    <button className='btn mt-2  yello-btn'>Buy now</button>
                                </motion.div>
                            </a>
                            <a href="#four" className='link'>
                                <motion.div
                                    id='four'
                                    onClick={() => { handleColor("four"); handlebg("blue"); }}
                                    className="bg-card blue" >
                                    <h2>Blueberry Flavored</h2>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis corrupti facilis optio fugiat quisquam vitae tempora labore harum magni deserunt, unde deleniti ipsum sit, ex similique, distinctio porro voluptatibus modi!
                                    <br />
                                    <button className='btn mt-2  blue-btn'>Buy now</button>
                                </motion.div>
                            </a>
                        </div>
                    </div>

                    <div className="btn-div">
                        <div className='btn-circle ms-3 btn-color-1' onClick={() => { handleColor("one"); handlebg("green"); }} ></div>
                        <div className='btn-circle mx-3 btn-color-2' onClick={() => { handleColor("two"); handlebg("red"); }}></div>
                        <div className='btn-circle btn-color-3' onClick={() => { handleColor("three"); handlebg("yellow"); }}></div>
                        <div className='btn-circle mx-3 btn-color-4' onClick={() => { handleColor("four"); handlebg("blue"); }}></div>
                    </div>

                </div>



            </div >
        </>
    )
}
