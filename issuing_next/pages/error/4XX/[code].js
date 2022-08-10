import React from "react"
import HeaderAuth from "../../../components/header-auth";
import FooterAuth from "../../../components/footer-auth";
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'

const OtherErrorView = () => {
    const router = useRouter()

    return (
    <div className="h-max bg-[#FAF9F5]">
        <HeaderAuth title={"Ooops, page not found"}/>
        <div className="h-max text-center justify-center">
            <p className="text-[#074746] pt-[10px] pb-[40px]">Ah, the dreaded 404 page not found - we feel your pain. </p>
            <Link href="/login">
                <button  className="bg-[#F9D456] text-[#074746]  font-bold py-3 px-5 rounded focus:outline-none focus:shadow-outline" >
                    Back to home
                </button>
            </Link>

        </div>
        <div className="grid justify-items-center pt-[50px] pb-[100px]">
            <Image
                src="/images/404.png"
                alt="505"
                width={600}
                height={420}
            />
        </div>
        <FooterAuth/> 
    </div>)
};

export default OtherErrorView;