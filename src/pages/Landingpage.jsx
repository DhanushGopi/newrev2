import { useNavigate } from "react-router-dom";
import PrimaryBtn from "../components/PrimaryBtn";

export default function Landingpage(){

    const navigate = useNavigate();
    const goToLogin = () =>{
        navigate('/login')
    }

    return(
        <div className="landing-page">
        <PrimaryBtn  funcact={goToLogin} btntext="Login"/>
        </div>
    )
}