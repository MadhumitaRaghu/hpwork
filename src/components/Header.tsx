import {useState,useEffect} from 'react';
// import * as TbIcons from "react-icons/tb"
import TextField from "@mui/material/TextField";
// import List from "./List";
import "../styles/Header.css";
import { IconContext } from "react-icons/lib";
import logo from "../components/logohp.png";
import * as BiIcons from "react-icons/bi";
import { Link } from "react-router-dom";
import { SidebarData } from './SidebarData'
const Header = () => {

  const closeModal=()=>{
    let modal = document.getElementById("myModal");
    
    if(modal!=null){
      modal.style.display="none"
    }
  
  }
  const showModal=()=>{
    let modal = document.getElementById("myModal");
  
    if(modal!=null){
      modal.style.display="block"
    }

  }
  const [recentArr, setrecentArr] = useState<any>([])
  const [overview, setoverview] = useState<any>([])
  useEffect(() => {
    if(localStorage.getItem("recents")!==null){
      let a = JSON.parse(localStorage.getItem('recents') || '{}');
      setrecentArr(a);
    }
  
 
  }, [])
  
  
  
  const filterSearch=(e:any)=>{
    let input = (document.getElementById("outlined-basic") as any).value;
  
    input=input.toLowerCase();
    // input=input.toLowerCase();
    let y = (document.getElementsByClassName('searchbar') as any);
    let x = (document.getElementsByClassName('search_list') as any);

    // console.log(x[0].innerHTML)
    // y[0].style.display="none"
    
   console.log(x[1].innerHTML)
    for (let i = 0; i < x.length; i++) { 
      let z=Math.floor(i/4);
      
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
        x[i].style.display="none";
    
        // y[z].style.display="none"
      }
      else {
        x[i].style.display="list-item";
     
          
          y[z].style.display="flex"
            
                           
      }
  }
  if(e.keyCode===13){
    if(input!==null){
      let x=[...recentArr];
      x.push(input)
      localStorage.setItem("recents",JSON.stringify(x))
      setrecentArr(x)
      
    }

  }

  }
 
  return (
    <div className="header">
      <h1 className="logo">
        <img src={logo} width="60px" height="30px"></img>HPE Cray EX Console
      </h1>
      <div className="search">
        <div>
          <TextField
            id="outlined-basic"
            variant="outlined"
            fullWidth
            label="Search "
            onClick={showModal}
            onKeyUp={filterSearch}
          />
         
         
        </div>

        <div className="icon1">

          <IconContext.Provider value={{ className: "top-react-icons" }}>
            <BiIcons.BiSearchAlt />
          </IconContext.Provider>
        </div>
        

  
  
   

          <div id="myModal" className="modal">
            {/* <!-- Modal content --> */}
            <div className="modal-content">
              <span className="close" onClick={closeModal}>&times;</span>
              <div className="searchbar">
                <div className="sideContent">
                <div className="side search_list">Recents</div>
                  <ul style={{"listStyle":"none"}}>
                    {recentArr.map((e:any)=>{
                      
                      return <li className="search_list" key={e}><Link to={"/overview"}>{e}</Link></li>
                    })}
                  
                  {/* <li className="search_list"><Link to={"/overview"}>Upgrade CSM-Stage-0</Link></li>
                  <li className="search_list"><Link to={"/overview"}>Upgrade CSM-Stage-0</Link></li> 
                  <li className="search_list"><Link to={"/overview"}>Upgrade CSM-Stage-0</Link></li> 
                  <li className="search_list"><Link to={"/overview"}>Upgrade CSM-Stage-0</Link></li> */}
                  </ul>
                </div>
              </div>
                <hr></hr>
                <div className="searchbar">
                
                <div className="sideContent">
                <div className="side search_list">Install</div>
                  <ul style={{"listStyle":"none"}}>
                  
                  <li className="search_list"><Link to={"/overview"}>Install CSM-Stage-0</Link></li>
                  <li className="search_list"><Link to={"/overview"}>Install CSM-Stage-0</Link></li>
                  <li className="search_list"><Link to={"/overview"}>Install CSM-Stage-0</Link></li> 
                  <li className="search_list"><Link to={"/overview"}>Install CSM-Stage-0</Link></li></ul>
                </div>
              </div>
                <hr></hr>
                <div className="searchbar">
                <div className="sideContent">
                <div className="side search_list">Upgrade</div>
                  <ul style={{"listStyle":"none"}}>
                  <li className="search_list"><Link to={"/overview"}>NCN CSM-Stage-0</Link></li>
                  <li className="search_list"><Link to={"/overview"}>NCN CSM-Stage-0</Link></li>
                  <li className="search_list"><Link to={"/overview"}>NCN CSM-Stage-0</Link></li>
                  <li className="search_list"><Link to={"/overview"}>NCN CSM-Stage-0</Link></li></ul>
                </div>
              </div>
                <hr></hr>
                <div className="searchbar">
                <div className="sideContent">
                <div className="side search_list"><span style={{"lineHeight":"2px"}}>NCN</span></div>
                  <ul style={{"listStyle":"none"}}>
                  <li className="search_list"><Link to={"/overview"}>checking CSM-Stage-0</Link></li>
                  <li className="search_list"><Link to={"/overview"}>checking CSM-Stage-0</Link></li>
                  <li className="search_list"><Link to={"/overview"}>checking CSM-Stage-0</Link></li>
                  <li className="search_list"><Link to={"/overview"}>checking CSM-Stage-0</Link></li></ul>
                </div>
              </div>
                <hr></hr>

              


            </div>
          </div>
          </div>

</div>
   

    /*
        <div className="headerheader">
           
                <span className="logo"><img src={logo} width="60px" height="30px" ></img></span>
                <span><h2>HPE Cray EX Concole</h2></span>
                
                <span className="extra">
                <span className="main">
      
      <div className="search">
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search            "
        />
      </div>
     
    </span>

                </span>
            
        </div>*/
  );
};

export default Header;
