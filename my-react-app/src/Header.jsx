import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import robot2 from './assets/robot2.png'; 
import { useNavigate } from 'react-router-dom';


function Header(){

    const navigate = useNavigate();

    const toContact = () => {
      navigate('/Contact');
    };

    return(
        <>

        <div className="bg-slate-950 min-h-screen flex items-center
          justify-between p-9">
            <div className="bg-auto bg-blue-600 w-5 h-5
             text-slate-400 rounded-full flex justify-center items-center">
                <FaAngleLeft/>
            </div>
            <div className="w-[400px]">
            <div>
            <h3 className="text-slate-200 text-4xl font-sans">HELLO, WE ARE
                <span className="text-blue-700 text-60px">.</span> </h3>
            </div>
            <div className="text-slate-200 text-60px font-sans">
            <h1><span className="text-blue-700">TUTOR</span>REACTIVE</h1>
            </div>
            <div className="w-[50px] h-[2px] bg-blue-700 my-3"></div>
            <div>
            <p className="text-8px text-slate-200 mb-4 font-sans">Lorem ipsum dolor sit amet, consectetur 
                adipisicing elit. Voluptatem quam debitis, 
                quia amet saepe eius error magnam totam 
                veniam ullam eligendi sunt expedita pariatur 
                iure mollitia aspernatur molestiae excepturi 
                </p>
            </div>
            <div>
                <button onClick={toContact} className="bg-blue-600 text-slate-200 
                rounded-md px-5 font-sans">EXPLORE COURSES</button>
            </div>
            </div>
            <div>
                <img src={robot2} className="w-[150px] h-[150px]
                 bg-slate-200 rounded-full" alt="" />
            </div>
            <div onClick={toContact} className="bg-auto bg-blue-600 w-5 h-5
             text-slate-200 rounded-full flex justify-center items-center">
                <FaAngleRight/>
            </div>
            
        
        </div>
       


        </>
    );
}
export default Header