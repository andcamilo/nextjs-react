import NavBar from "../../components/nav-bar"
import Image from 'next/image'

const DashboardUserTab = () => {
    return (
        <div className="flex flex-row min-h-full">
            <NavBar/>
            <div className="flex flex-col bg-[#FAF9F5] w-full">
                <div className="mx-[80px]">
                    <div className="mt-8">
                        <h1 className="font-intersemibold dashboard-header relative poppins prose"> Users</h1>
                        <div className="absolute top-[100px] hidden xl:block ">
                            <Image
                                src="/images/orange-underline.png"
                                alt="organge-underline"
                                width={350}
                                height={60}
                            />
                        </div>
                    </div>
                    <div className="mt-6 font-intersemibold text-[#074746] text-[22px]">
                        Here you can view all of users associated with your Harmonic program!
                    </div>
                </div>
            </div>
        </div>
       
      
    )
}


export default DashboardUserTab