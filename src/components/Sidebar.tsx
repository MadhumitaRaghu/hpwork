
import React,{useState,useEffect} from 'react'
import { SidebarData } from './SidebarData'
import * as FaIcons from 'react-icons/fa';
import {AiFillCloseCircle} from 'react-icons/ai'
import {AiFillCaretDown} from 'react-icons/ai'
import {AiFillCaretUp} from 'react-icons/ai'
import {BiGitBranch} from 'react-icons/bi'
import {BiTerminal} from 'react-icons/bi'
import "../styles/sidebar.css"
import SidebarItem from './SidebarItem'
const Sidebar = () => {
    const [sidebar, setSidebar] = useState(true);
    // const [dropdown, setDropdown] = useState(false);
   
  
  const showSidebar = () => setSidebar(!sidebar);
  // const showDropdown = () => setDropdown(!dropdown);

  const showTerminal=()=>{
   let c= document.getElementById('terminal')
   if(c!=null){
    if(c.style.display==="none"){
      c.style.display="block";
    }
    else{
      c.style.display="none"
    }
   }
  //  if(c){
  //   document.getElementById('terminal').style.display="none"
  //  }
  //  console.log(c)
   
  }
  
  return (
    <>
    <div className="container">
      <div className="sidebar" style={{width:sidebar?"15rem":"2rem"}}>
        <div className="top_section">
          <h1 className="logo">{sidebar?"HPE":""}</h1>
          
          <div style={{marginLeft:sidebar?"5rem":"1rem"}} className="bars"> 
          
          <div style={{"marginRight":"5px","cursor":"pointer"}}>{sidebar?<BiGitBranch/>:""}</div>
            <div style={{"marginRight":"5px","cursor":"pointer"}}>{sidebar?<BiTerminal onClick={showTerminal}/>:""}</div>
           <div >{ sidebar?< AiFillCloseCircle onClick={showSidebar}/>:<FaIcons.FaBars  onClick={showSidebar}/>}</div>
          </div>
          
        </div>
        { SidebarData.map((item,index)=>{return <SidebarItem key={index} item={item} sidebar={sidebar}></SidebarItem>})}
      </div>
    </div>
    
</>
  )
}

export default Sidebar