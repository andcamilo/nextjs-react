import React from "react"
import HeaderAuth from "../../../components/header-auth";
import FooterAuth from "../../../components/footer-auth";
import Image from 'next/image'
import { useRouter } from 'next/router'

const ErrorView = () => {
    const router = useRouter()

    return (
    <div className="h-max bg-[#FAF9F5]">
        <HeaderAuth title={"505 Error"}/>
        <div className="h-max text-center justify-center">
            <p className="text-[#074746]">Grrrrrrr......there seems to be a glitch of some sort. We are working on it, please</p>
            <p className="text-[#074746]">check back later. And in the meantime, if you have a dog go walk him and if you</p>
            <p className="text-[#074746]">don’t, make yourself a cup of delicious coffee and take a break, you deserve it!</p>
        </div>
        <div className="grid justify-items-center pt-[50px] pb-[100px]">
            <Image
                src="/images/505.png"
                alt="505"
                width={600}
                height={420}
            />
        </div>
        <FooterAuth/> 
    </div>)
};

export default ErrorView;