import Image from 'next/image'

const HeaderAuth = (props) => {
    return (
        <div className="bg-[#FAF9F5] w-1017">
            <div className="pl-[38px] pt-[38px]">
                <Image
                src="/images/Harmonic_logo1x.png"
                alt="Logo"
                width={300}
                height={65}
                />
            </div>
            <div className="flex font-medium pt-[30px] text-[#074746] text-[50px] justify-center">
                <div>
                    <h1>{props.title}</h1>
                </div>
            </div>
        </div>

      
    )
}


export default HeaderAuth