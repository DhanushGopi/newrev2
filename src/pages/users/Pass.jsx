import { useSelector } from "react-redux";
import Header from "../../components/Header";
import BottomNav from "../../components/BottomNav";

export default function Pass(){
    const getNewreUser = useSelector((state)=>state.newreUserData);
        
        return(
            <div className="page pass-page">
                    <Header/>
                    <p>Pass</p>
                    <h1> hi, {getNewreUser.userName}</h1>
                    <BottomNav/>
    
            </div>
        )
}