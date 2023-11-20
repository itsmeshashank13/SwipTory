import React, { useState } from 'react';
import Header from '../../components/header/Header';
import HeadBottom from '../../components/headBottom/HeadBottom';
import Login from '../../components/login/Login';

function Home() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openLoginModal = ()=> {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = ()=> {
    setIsLoginModalOpen(false);
  }

  return (
    <>
    <Header onLoginClick={openLoginModal} />
    <HeadBottom />
    <div>
        
    </div>
    {isLoginModalOpen && <Login onClose={closeLoginModal} />}
    </>
  )
}

export default Home;