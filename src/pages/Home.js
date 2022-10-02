import React, {useState, useEffect} from 'react';
import MainBanner from '../components/MainBanner';
import Header from '../layout/Header';
import PortfolioSection from '../components/PortfolioSection';
import ResumeSection from '../components/ResumeSection';
import AboutMe from '../components/AboutMe';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../layout/Footer';
import Modal from '../components/Modal';
import Testing from '../layout/Testing';

export default function Home() {
  const [modal, setModal] = useState(false)
  const [info, setInfo] = useState([])
  const display = () =>{
    setModal(!modal)
  }
  useEffect(()=>{
    fetch('https://179.61.219.130:8090/preview/fpz-server.com/fetch')
      .then(res => res.json())
      .then(data => setInfo(data))
      .then(err => console.error(err))
  },[])
  console.log(info);
  return (
    <>
      {modal &&
        <Modal display={display} />
      }
      <Header />
      <MainBanner />
      <PortfolioSection />
      <ResumeSection />
      <AboutMe />
      <Services />
      <Contact display={display} />
      <Footer />
      <Testing arr={info} />
    </>
  )
}
