import { useNavigate } from "react-router-dom";
import PrimaryBtn from "../components/PrimaryBtn";

export default function Landingpage(){

    const navigate = useNavigate();
    const goToLogin = () =>{
        navigate('/login')
    }
    const goToConLogin = () =>{
        navigate('/conductor/login')
    }
    const goToAdminLogin = () =>{
        navigate('/admin/login')
    }

    return(
        <div className="landing-page">
        <PrimaryBtn  funcact={goToLogin} btntext="User Login"/>
        <PrimaryBtn  funcact={goToConLogin} btntext="Conductor Login"/>
        <PrimaryBtn  funcact={goToAdminLogin} btntext="Admin Login"/>
        </div>
    )
}