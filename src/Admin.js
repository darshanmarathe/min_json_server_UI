import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Navigate, Route, Routes} from 'react-router-dom';
import ListAltIcon from '@material-ui/icons/ListAlt';
import SettingsIcon from '@material-ui/icons/Settings';
import PersonIcon from '@material-ui/icons/Person';
import Settings from './Settings';
import Users from './Users';
import Collection from './Collection';


const Admin = ({authenticated}) => {
  let user = useSelector((state) => state.setUser);
 if(authenticated === false){
   return <Navigate to = '/'></Navigate>
 }
  else{
  return(
      <>
      <div className='DashboardMain'>
        <header className='header'>
        <div className='profile'>
          <div className='userImage'>

          </div>
          <div className='username'>
            <strong>{user.userName}</strong>
          </div>
        </div>
        </header>
        <div className='sideMenu'>
        <ul>
       
      
          <li>
            <div className='option' >
              <label htmlFor='collection'>
              <ListAltIcon />
              </label>
              <Link to = 'collection' className='link'>
              <strong id = "collection">Collection</strong>
              </Link>
            </div>
          </li>
          <li>
            <div className='option'>
              <label htmlFor='settings'>
                <SettingsIcon/>
              </label>
              <Link to = 'settings' className='link'>
              <strong id = "settings">Settings</strong>
              </Link>
            </div>
          </li>

          <li>
            <div className='option'>
              <label htmlFor='user'>
                <PersonIcon/>
              </label>
              <Link to = 'users' className='link'>
              <strong id = "users">Users</strong>
              </Link>
            </div>
          </li>
        </ul>
        </div>

        <div className='activityGround'>
        <Routes>
          <Route path = 'users' element = {<Users/>}></Route>
          <Route path = 'collection/*' element = {<Collection/>}>
            
          </Route>
          <Route path = 'settings' element = {<Settings/>}></Route>
        </Routes>

        </div>
      </div>
      
      </>
  );
  }
};

export default Admin;
