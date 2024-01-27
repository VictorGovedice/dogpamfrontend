import React,{useState} from "react";
import Header from "../../components/Header";
import Services from '../../components/Services';
import HeroSection from "../../components/HeroSection";
import InfoSection from "../../components/InfoSection";
import { homeObjOne, homeObjThree, homeObjTwo } from "../../components/InfoSection/Data";
import Sidebar from "../../components/SideBar";
import Footer from '../../components/Footer';


export default function Home(){

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () =>{
        setIsOpen(!isOpen);
    };


    return(
        <>    
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Header toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <Services />
            <InfoSection {...homeObjThree} />
            <Footer />
        </>
    )
}