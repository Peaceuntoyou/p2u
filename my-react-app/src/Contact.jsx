import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaGlassCheers } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import robot2 from './assets/robot2.png'; 
import { useNavigate } from 'react-router-dom';

const Contact = () => {

    const navigate = useNavigate();

    const toHeader = () => {
      navigate('/');
    };

  return (
    <>

    <div className="bg-slate-950 min-h-screen flex 
      justify-between p-20">
        <div onClick={toHeader} className="bg-auto bg-blue-600 w-5 h-5
         text-slate-400 rounded-full flex justify-center 
         items-center mt-52">
            <FaAngleLeft/>
        </div>
        <div className="w-[280px] mt-6">
        <div className="flex">
             <img src={robot2} className="w-[30px] h-[30px]
             bg-slate-200 rounded-full" alt="" />
             <h1 className="text-slate-200 text-3xl ml-2 font-serif"><span 
             className="text-blue-700">TUTOR</span>REACTIVE</h1>
            </div>
        
        <div>
        <p className="text-12px text-slate-200 
        mb-4 font-sans mt-5">Lorem ipsum dolor sit amet, consectetur 
            adipisicing elit. Voluptatem quam debitis, 
            quia amet saepe eius error magnam totam 
            veniam ueligendi sunt exped itallam  pariatur 
            iure mollitia aspernatur molestiae excepturi
            eligendi sunt exped itallam 
            </p>
        </div>
        <div className="w-[50px] h-[2px] bg-blue-700 mt-5"></div>
        <div className="mt-6">
            <p className="text-slate-200 text-12px">OUR LOCATION</p>
        </div>
        <div className="flex mt-4">
         <p className="text-slate-200 text-10px">< FaMapMarkerAlt /></p>
         <p className="text-slate-200 text-10px ml-2">
            Federal housing nyanyan</p>
        </div>
        <div className="flex mt-1">
         <p className="text-slate-200 text-10px"><FaPhoneAlt /></p>
         <p className="text-slate-200 text-10px ml-2">
            +234 8069430449</p>
        </div>
        <div className="flex mt-1">
         <p className="text-slate-200 text-10px"><FaGlassCheers /></p>
         <p className="text-blue-900 text-10px ml-2">
            You deserve a cup of wine when you subscribe with us</p>
        </div>
        <div className="w-[50px] h-[2px] bg-blue-700 mt-4"></div>
        <div className="mt-6">
            <p className="text-slate-200 text-12px ">FIND US ON</p>
        </div>
        <div className="flex mt-5">
            <p className="text-slate-200 text-10px"><FaFacebookF /></p>
            <p className="text-slate-200 text-10px ml-2"><FaTwitter /></p>
            <p className="text-slate-200 text-10px ml-2"><FaInstagram /></p>
        </div>
        
        {/* form */}
        </div>
        <div className="w-[390px] h-[500px] 
        bg-gray-200 rounded-xl mt-2 px-10 py-6">
            <h2 className="font-serif text-blue-500 text-xl font-semibold">Join Us</h2>
            <div className="w-[30px] h-[2px] bg-blue-500 mt-1"></div>
            <p className="text-10px w-[200px] mb-4 
         font-sans mt-3 font-semibold">Lorem ipsum dolor sit amet, consectetur 
            adipisicing elit. Voluptatem quam debitis, 
            quia amet saepe eius error   
            </p>
                <label className="text-10px font-semibold">Name</label>
                <div className="flex">
                <input type="text"  
                placeholder="First" 
                className="w-[150px] h-[17px] rounded-md placeholder-gray-300"></input>
                <input type="text"  
                placeholder="last" 
                className="w-[150px] h-[17px] rounded-md ml-1 
                placeholder-gray-300 placeholder-text-sm"></input>
            </div>
            <label className="text-10px font-semibold">Create Password</label>
            <input type="text" className="w-[300px] h-[17px] rounded-md"/>
                <label className="text-10px font-semibold">Confirm Password</label>
            <input type="text" className="w-[300px] h-[17px] rounded-md"/>
            <label className="text-10px font-semibold">Birthday</label>
                <div className="flex">
                <input type="text"  
                placeholder="year" 
                className="w-[130px] h-[17px] rounded-md placeholder-gray-300"></input>
                <input type="text"  
                placeholder="month" 
                className="w-[85px] h-[17px] rounded-md ml-1 
                placeholder-gray-300 placeholder-text-sm"></input>
                <input type="text"  
                placeholder="day" 
                className="w-[85px] h-[17px] rounded-md ml-1 
                placeholder-gray-300 placeholder-text-sm"></input>
            </div>
            <label className="text-10px font-semibold">Gender</label>
            <input type="text" className="w-[300px] h-[17px] 
            rounded-md"/>
                <div className="flex">
                
                <div>
                <label className="text-10px font-semibold">Email</label>
                <input type="text"  
                placeholder="First" 
                className="w-[150px] h-[17px] rounded-md 
                placeholder-gray-300"></input>
                </div>
                <div>
                <label className="text-10px font-semibold">Mobile</label> <br />
                <input type="text"  
                placeholder="last" 
                className="w-[150px] h-[17px] rounded-md ml-1 
                placeholder-gray-300 placeholder-text-sm"></input>
                </div>
                 
            </div>
            <div className="ml-44 mt-3">
                <button className="bg-blue-600 text-slate-200 
                rounded-lg w-[140px] text-10px font-sans py-3">Register</button>
            </div>
            
        </div>
        <div className="bg-auto bg-blue-600 w-5 h-5
         text-slate-200 rounded-full flex justify-center 
         items-center mt-52">
            <FaAngleRight/>
        </div>
        
    
    </div>
   


    </>
  )
}

export default Contact