"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../public/assets/images/logo.jpg";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import Provider from "./Provider";

const Nav = () => {

  //handle the signOut
  const handleSignOut = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // Prevent default button behavior if necessary
    signOut(); // Call the sign-out function from next-auth
  };

  {/* Initializing the providers */}
  const [providers, setProviders] = useState(null);
  

  //hook
  useEffect(()=>{
    const setProviders = async () => {
      const response = await getProviders();

      setProviders(response)
    }

    setProviders();
  }, [])

  const isUserLoggedIn = false;
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image src={logo} alt={"Prompterest logo"} width={30} height={30} className="object-contain"/>
        <p className="logo_text">Prompterest</p>
      </Link>


      {/* Mobile Navigation */}
      <div className="sm:flex hidden">
        {isUserLoggedIn ? 
        ( 
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn"> Create Post </Link>

            <button type="button" onClick={handleSignOut} className="outline_btn">
              Sign Out
            </button>

            <Link href="/profile">
                <Image src="/assets/images/logo.jpg" alt="profile" width={37} height={37} className="rounded-full"/>
            </Link>
          </div>
        ): 
        (<> {
          providers && Object.values(providers).map((Provider)=>(
            <button type="button" key={provider.name} onClick={()=> signIn(provider.id)} className="black_btn">
              Sign In
            </button>

          )
        )
        }
        </>)}
      </div>
    </nav>
  )
}

export default Nav