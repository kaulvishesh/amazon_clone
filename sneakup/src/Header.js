import React from "react";
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom";
import{ UseStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {

  const [{ basket , user}, dispatch] = UseStateValue();
  const handleAuthentication = () => {
    if (user){
      auth.signOut();
    }
  }
  return (
    <div className="header">
      <Link to ="/">
      <img src="https://www.nicepng.com/png/full/70-704731_sneakers-png-picture-adidas-running-course-a-pied.png" className="header__logo" alt="pp" />
      </Link>
      <div className="header__search">
            <input className="header__searchInput" type="text" placeholder="What are you looking for?"/>
            <SearchIcon className="header__searchIcon"/>
      </div>
      <div className="header__nav">
        <Link to= { !user && '/login'}>
            <div onClick={handleAuthentication} className="header__option">
                <span className="header__optionLineOne">Hello, {!user ? 'Guest': user?.email.split("@")[0] }</span>
                <span className="header__optionLineTwo">{ user ?
                 'Sign Out' : 'Sign In' }</span>
            </div>
        </Link>
            <div  className="header__option">
                <span className="header__optionLineOne">Returns</span>
                <span className="header__optionLineTwo">& Orders</span>
            </div>
            <Link to='/checkout'>
              <div className="header__optionBasket">
                  <ShoppingBasketIcon/>
                  <span className="header__optionLineTwo header__basketCount">{ basket?.length }</span>
              </div>
            </Link>
      </div>
    </div>
  );
}

export default Header;
