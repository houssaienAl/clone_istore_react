import React, { useCallback, useEffect, useState } from 'react'
import './Navbar.css';
import { FaHome, FaSearch, FaUser, FaShoppingBag } from 'react-icons/fa';

export const Navbar = (props) => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <img src="https://itechstore.tn/img/logo-1675717383.jpg" alt="iTech Store" className="logo" />
                <span className="reseller-text">Revendeur Agréé</span>
            </div>

            <div className="navbar-center">
                <a href="#"><FaHome /></a>
                <a href="#">MAC</a>
                <a href="#">IPAD</a>
                <a href="#">IPHONE</a>
                <a href="#">WATCH</a>
                <a href="#">MUSIC</a>
                <a href="#">ACCESSOIRES</a>
                <a href="#">PLUS</a>
            </div>

            <div className="navbar-right">
                <div className="icon-text">
                    <FaSearch />
                    <span>Rechercher</span>
                </div>
                <div className="icon-text">
                    <FaUser />
                    <span>Connexion</span>
                </div>
                <div className="icon-text">
                    <FaShoppingBag />
                    <span>Panier</span>
                </div>
            </div>
        </nav>
    );
};

