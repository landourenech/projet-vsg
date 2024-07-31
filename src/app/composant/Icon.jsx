import Image from 'next/image'

export function Icon ({image}){
    return(
        <>
             <Image src={image}
                width={25}
                height={25}
                className="hover:bg-[#fff]"
                alt="icons"
                />

            
        </>
    )
}