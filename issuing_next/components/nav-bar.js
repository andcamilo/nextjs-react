import Link from "next/link"
import Image from 'next/image'
import LogOutButtom from "./logout-buttom"

const NavBar = () => {
    return (
        <div className="flex flex-col min-h-screen bg-[#074746] w-[80px] min-w-[80px]">
            <div className="w-[30px] mt-[22px] mx-auto">
                <Image
                    src="/images/logo-badge.png"
                    alt="logo-badge"
                    width={440}
                    height={500}
                />
            </div>
            <div className="w-[30px] mt-[44px] mx-auto ">
                <Link href="/dashboards/dashboard">
                    <Image
                        src="/images/home.png"
                        alt="home"
                        width={440}
                        height={500}
                    />
                </Link>
            </div>
            <div className="w-[35px] mt-[50px] mx-auto ">
                <Link  href="/dashboards/dashboard-user-tab">
                    <Image
                        src="/images/User.png"
                        alt="user"
                        width={440}
                        height={500}
                    />
                </Link>
            </div>
            <div className="mt-auto mx-auto mb-[22px] w-[30px] ">
                <LogOutButtom />
            </div>
        </div>

    )
}

export default NavBar