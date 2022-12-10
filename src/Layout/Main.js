import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/shared/Header/Header';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import FooterSection from '../components/shared/FooterPage/FooterPage';

const Main = () => {
    return (
        <div >
            <Header></Header>
            <Outlet></Outlet>
            <FooterSection></FooterSection>
            <ToastContainer></ToastContainer>
            
        </div>
    );
};

export default Main;