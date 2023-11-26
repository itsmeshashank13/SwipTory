import React, { useState } from 'react';
import Header from '../../components/header/Header';
import HeadBottom from '../../components/headBottom/HeadBottom';
import Login from '../../components/login/Login';
import Register from '../../components/register/Register';
import NewStory from '../../components/newStory/NewStory';
import YourStories from '../../components/yourStories/YourStories';


function Home() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);


  const openLoginModal = ()=> {
    setIsLoginModalOpen(true);
  };
  const openRegisterModal = ()=> {
    setIsRegisterModalOpen(true);
  };
  const openStoryModal = ()=> {
    setIsStoryModalOpen(true);
  };


  const closeLoginModal = ()=> {
    setIsLoginModalOpen(false);
  };
  const closeRegisterModal = ()=> {
    setIsRegisterModalOpen(false);
  };
  const closeStoryModal = ()=> {
    setIsStoryModalOpen(false);
  };
  

  return (
    <>
      <Header onLoginClick={openLoginModal} onRegisterClick={openRegisterModal} onStoryClick={openStoryModal}/>
      <HeadBottom />
      <YourStories />
      
      
      {isLoginModalOpen && <Login onClose={closeLoginModal} />}
      {isRegisterModalOpen && <Register onClose={closeRegisterModal} />}
      {isStoryModalOpen && <NewStory onClose={closeStoryModal} />}
    </>
  )
}

export default Home;