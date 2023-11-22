import React, { useState } from 'react';
import Header from '../../components/header/Header';
import HeadBottom from '../../components/headBottom/HeadBottom';
import Login from '../../components/login/Login';
import Register from '../../components/register/Register';


function Home() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);


  const openLoginModal = ()=> {
    setIsLoginModalOpen(true);
  };

  const openRegisterModal =()=> {
    setIsRegisterModalOpen(true);
  };

  const closeLoginModal = ()=> {
    setIsLoginModalOpen(false);
  };

  const closeRegisterModal =()=> {
    setIsRegisterModalOpen(false);
  }

  return (
    <>
    <Header onLoginClick={openLoginModal} onRegisterClick={openRegisterModal}/>
    <HeadBottom />
    <div>
        
    </div>
    {isLoginModalOpen && <Login onClose={closeLoginModal} />}
    {isRegisterModalOpen && <Register onClose={closeRegisterModal} />}
    </>
  )
}

export default Home;