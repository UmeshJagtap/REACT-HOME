import React from 'react';
import '../header/header.css';
import Logo from '../../assets/images/vlogo.jpeg';
import SearchIcon from '@mui/icons-material/Search';
import Select from '../selectDrop/select';

const header = () => {
  return (
    <>
      {/* <div>header</div> */}
      <header>
        <div className="container-fluid d-flex">
          <div className="logo-image">
            <div className="col-sm-2">
              <img src={Logo} alt="logo" className="logo" />
            </div>
          </div>
          {/* headerSearch starts here */}
          <div className="col-sm-11">
            <div className="headerSearch d-flex align-items-center">
              <div className="selectDrop cursor">
                <Select className="drop" />
              </div>
              <div className="search">
                <input type="text" placeholder="Search for items..." />
                <SearchIcon className="searchIcon cursor" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default header;
