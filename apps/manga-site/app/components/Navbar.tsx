"use client"
import Search from "./Search"
import Link from "next/link"
import Image from "next/image"

function Navbar() {
    function handleLogout() {
        //  TODO: Implement your logout logic here
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link
                            href="/popular"
                        >
                            popular
                        </Link></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">

                <Link
                    href="/"
                    className="btn btn-ghost normal-case text-xl"  >
                    Animevariant Manga
                </Link>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">

                    <button className="btn btn-ghost btn-circle m-1" tabIndex={0} >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>

                    <ul tabIndex={0} className=" p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52 mr-20">
                        <Search />
                    </ul>
                </div>





                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">

                            <Image src="https://daisyui.com//images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Picture of the user" width={500} height={500} />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <Link href={`/profile/juma-musa`} className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </Link>
                        </li>
                        <li><Link href="/settings" >Settings</Link></li>
                        <li><button onClick={handleLogout} >Logout</button></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar