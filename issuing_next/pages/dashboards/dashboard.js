import NavBar from "../../components/nav-bar"
import Image from 'next/image'
import { useEffect, useState } from "react"


export default function Dashboard() {


    const [dashboardData, setDashboardData] = useState({})
    useEffect(() => {
        async function fetchDashboardData() {
          const response = await fetch("/api/user")
          const data = await response.json()
          setDashboardData(data)
        
        }
        fetchDashboardData()
      }, [])

    

    return (
        <div className="flex flex-row min-h-full">
            <NavBar/>
            <div className="flex flex-col bg-[#FAF9F5] w-full">
                <div className="mx-[80px]">
                    <div className="mt-8">
                        <h1 className="font-rightgrotesk dashboard-header relative poppins prose"> Welcome, {dashboardData.given_name}!</h1>
                        <div className="mt-2 absolute top-[100px] left-[550px] hidden xl:block ">
                            <Image
                                src="/images/orange-underline.png"
                                alt="organge-underline"
                                width={350}
                                height={60}
                            />
                        </div>
                    </div>
                    <div className="mt-12 font-rustica font-normal text-[#074746] text-xl">
                    Intro company, something about not sharing info.....Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a eros maximus, imperdiet lorem in, pretium enim. Curabitur semper arcu vel interdum malesuada. Maecenas diam tortor, ornare a eleifend quis, sodales vitae massa.
                    </div>
                    <div className="mt-12 rounded-[30px] min-h-[180px] border-2 border-[#7ED4EC] h-20">
                        <div className="mt-[43px] ml-[41px]">
                            <h2 className="font-rusticabold text-[30px] text-[#074746]">Sandbox IP address</h2>
                            <p><a className="font-rustica font-normal text-[#074746] text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a eros maximus, imperdiet lorem in, pretium </a></p>
                        </div>
                    </div>
                    <div className="mt-5 rounded-[30px] min-h-[180px] border-2 border-[#7ED4EC] h-20">
                        <div className="mt-[43px] ml-[41px]">
                            <h2 className="font-rusticabold text-[30px] text-[#074746]">Unique IP</h2>
                            <p><a className="font-rustica font-normal text-[#074746] text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a eros maximus, imperdiet lorem in, pretium </a></p>
                        </div>
                    </div>
                    <div className="mt-5 rounded-[30px] min-h-[180px] border-2 border-[#7ED4EC] h-20">
                        <div className="mt-[43px] ml-[41px]">
                            <h2 className="font-rusticabold font-bold text-[30px] text-[#074746]">Sandbox Endpoint</h2>
                            <p><a className="font-rustica font-normal text-[#074746] text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a eros maximus, imperdiet lorem in, pretium </a></p>
                        </div>
                    </div>
                    <button onClick={() => handleGetUser()}> User </button>
                </div>
            </div>
        </div>
       
      
    )
}
