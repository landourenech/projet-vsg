import {Icon} from"./Icon";



export const Footer =() =>{
    return(
        <>
             <section className="bg-[#dbfffe] text-center">

<div className="flex flex-row gap-8 justify-around pt-[20px] border-b-4 border-[#12c2b9] min-w-full">

    <div className=" justify-start text-start">
        <h3 className="text-2xl text-[#12c2b9] py-[12px]">Trouvez-nous ici</h3>
        <p className="text-[14px] text-black-custom leading-8">Lorem, ipsum dolor sit amet<br/> consectetur adipisicing elit. Illum beatae.</p>
        <div className="flex flex-row gap-[5px] items-center my-[30px]">
            <a href="#" class="h-4.5rem w-4.5rem leading-4.5rem rounded-[10%] text-[1.5rem] border  border-[#12c2b9] text-primary-color mr-[0.3rem] text-center hover:bg-[#12c2b9] hover:text-custom-white"> <Icon image="\facebook-fill.svg"/> </a>
            <a href="#" class="h-4.5rem w-4.5rem leading-4.5rem rounded-[10%] text-[1.5rem] border  border-[#12c2b9] text-primary-color mr-[0.3rem] text-center hover:bg-[#12c2b9] hover:text-custom-white"> <Icon image="\instagram-fill.svg"/> </a>
            <a href="#" class="h-4.5rem w-4.5rem leading-4.5rem rounded-[10%] text-[1.5rem] border  border-[#12c2b9] text-primary-color mr-[0.3rem] text-center hover:bg-[#12c2b9] hover:text-custom-white"> <Icon image="\linkedin-fill.svg"/> </a>
            <a href="#" class="h-4.5rem w-4.5rem leading-4.5rem rounded-[10%] text-[1.5rem] border border-[#12c2b9] text-white mr-[0.3rem] text-center hover:bg-[#12c2b9] hover:text-custom-white"> <Icon image="\twitter-fill.svg"/> </a>
        </div>
    </div>

    <div class="">
        <h3 className="text-[1.5rem] text-[#12c2b9] py-[12px]">contacte nous</h3>
        <p>+241 0740462514</p>
        <a href="#" class="  leading-8 text-black-custom py-2 block hover:text-[#12c2b9] hover:underline">ninjashub@gmail.com</a>
    </div>

    <div class="">
        <h3 className="text-[1.5rem] text-[#12c2b9] py-[12px]">localisation</h3>
        <p>Lorem ipsum dolor sit amet<br/> consectetur
         adipisicing elit. <br/>
         Consequuntur, consectetur!
        </p>
    </div>
</div>
<div class="py-[25px] ">created by <span> Ecole 241 </span>| all rights are reserved!</div>
</section>

        </>
    )
}
export default Footer;