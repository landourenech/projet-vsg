import Image from 'next/image'

export  const Header =() =>{

    return(
        <>
            <header className=" flex flex-row justify-between px-[100px] my-[25px]">

    <a href="#" class="logo"><i class="fas fa-book"></i> 
    Vison Science Gabon
    </a>

<nav className=" flex flex-row gap-[30px]">
    <a href="#home" class="hover-underline">Accueil</a>
    <a href="#about" class="hover-underline">A propos</a>
    <a href="#courses" class="hover-underline">Contact</a>
</nav>

<div class="icons">
    <div id="login-btn" class="">
        <a href='' className=''>
        <Image src="\user-fill.svg"
                width={30}
                height={30}
                className="hover:bg-[#12c2b9]"
                alt="user"
                /> 
        </a>
    </div>
    <div id="menu-btn" class="fas fa-bars"></div>
</div>


{/* <form action="" class="login-form">
    <h3>login form</h3>
    <input type="email" placeholder="enter your email" class="box"/>
    <input type="password" placeholder="enter your password" class="box"/>
    <div class="remember">
        <input type="checkbox" name="" id="remember"/>
        <label for="remember-me">remember me</label>
    </div>
    <a href="#" class="btn">
        <span class="text text-1">login now</span>
        <span class="text text-2" aria-hidden="true">login now</span>
    </a>
</form> */}

</header>
        </>
    )
}
export default Header;