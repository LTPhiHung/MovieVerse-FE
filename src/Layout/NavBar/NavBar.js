import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CgUser } from 'react-icons/cg'
import { FaHeart, FaSearch } from 'react-icons/fa'
import { useSelector } from 'react-redux'


function NavBar() {
    const { userInfo } = useSelector((state) => state.userLogin);
    const { likedMovies } = useSelector((state) => state.userGetFavoriteMovies);


    const hover = 'hover:text-subMain transitions text-white'
    const Hover = ({isActive}) => (isActive ? 'text-subMain' : hover);
  return (
    <>
        <div className='bg-main shadow-md sticky top-0 z-20'>
            <div className='container mx-auto py-6 px-2 lg:grid gap-10 grid-cols-7 justify-between items-center'>
                {/* Logo */}
                <div className='col-span-1 lg:block hidden'>
                    <Link to="/">
                        <img 
                            src='/images/logo.png' 
                            alt='logo' 
                            className='w-full h-12 object-contain'
                        />
                    </Link>
                </div>
                {/* Search */}
                <div className='col-span-3'>
                    <form className='w-full text-sm bg-dryGray rounded flex-btn  gap-4'>
                        <button type="submit" className='bg-subMain w-12 flex-colo h-12 rounded text-white'>
                            <FaSearch/>
                        </button>
                        <input type='text' placeholder='Search Movie Name from here' className='font-medium placeholder:text-border text-sm w-11/12 h-12 bg-transparent border-none px-2 text-black' />
                    </form>
                </div>    
                {/* menus */}
                <div className='col-span-3 font-medium text-sm hidden xl:gap-14 2xl:gap-20 justify-between lg:flex xl:justify-end items-center'>
                    <NavLink to="/movies" className={Hover}>
                        Movies
                    </NavLink>
                    <NavLink to="/about-us" className={Hover}>
                        ABout Us
                    </NavLink>
                    <NavLink to="/contact-us" className={Hover}>
                        Contact Us
                    </NavLink>
                    <NavLink 
                        to={
                            userInfo?.isAdmin 
                                ? "/dashboard" 
                                : userInfo 
                                ? "/profile" 
                                : "/login"
                        } 
                        className={Hover}
                    >
                        {
                            userInfo ? (
                                <img 
                                    src={userInfo?.image ? userInfo?.image : "/images/user.png"} 
                                    alt={userInfo?.fullName} 
                                    className='w-8 h-8 rounded-full border object-cover border-subMain' 
                                />
                            )
                            : (
                                <CgUser className="w-8 h-8" />
                            )
                        }
                    </NavLink>
                    <NavLink to="/favorite" className={`${Hover} relative`}>
                        <FaHeart className='w-6 h-6' />
                        <div className='w-5 h-5 flex-colo rounded-full text-xs bg-subMain text-white absolute -top-5 -right-1'>
                            {likedMovies?.length}
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    </>
  )
}

export default NavBar