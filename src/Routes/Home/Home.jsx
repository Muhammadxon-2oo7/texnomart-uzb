import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Main from '../../components/Main/Main'
import Backtotop from '../../components/BacktoTop/Backtotop'
import Banner from '../../components/banner/Banner'
import c from "./Home.module.scss"
const Home = () => {
  const [isbacktotop, setIsbacktotop] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });
  const isSticky = (e) => {
    const scrollTop = window.scrollY;
    scrollTop >= 220 ? setIsbacktotop(true) : setIsbacktotop(false);
  };
  return (
    <div className={c.Home}>
      <Header />
      <Banner />
      <Main />
      {isbacktotop && (<Backtotop />)}
      <Footer />
    </div>

  )
}

export default Home