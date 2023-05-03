import React, {useState, useContext } from 'react'
import { Link,useLocation,useNavigate } from 'react-router-dom'
import ytLogo from '../images/yt-logo.png'
import ytLogoMobile from '../images/yt-logo-mobile.png'
import {SlMenu} from 'react-icons/sl'
import {IoIoSearch} from 'react-icons/io'
import {RiVIdeoAddLine} from 'react-icons/ri'
import {FiBell} from 'react-icons/fi'
import {CgClose} from 'react-icons/cg'
import { Context } from '../context/contextApi'
import Loader from '../shared/Loader'
 
function Header() {
  const [searchQuery, setSearchQuery] = useState('')
  const {loading,mobileMenu,setMobileMenu} = useContext(Context)
  const navigate = useNavigate()

  const searchQueryHandler = (e)=>{
    if((e?.key === 'Enter' || e === 'searchButton' ) && searchQuery?.length > 0 ) 
    {
      navigate(`/searchResult/${searchQuery}`)
    }
  }
  const mobileToggleMenu = ()=>{
      setMobileMenu(!mobileMenu)
  }
  return (
    <div>
      Header
    </div>
  )
}

export default Header
