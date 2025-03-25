import { useSelector } from "react-redux";
import Header from "../../components/Header";
import BottomNav from "../../components/BottomNav";
import { Dashboard, LocalActivity, Person, Restore } from "@mui/icons-material";

export default function History(){
    const getNewreUser = useSelector((state)=>state.newreUserData);
    
    return(
        <div className="page history-page">
                <Header/>
                <p>History</p>
                <h1> hi, {getNewreUser.userName}</h1>
                <BottomNav 
                     navPaths={["/home", "/passhome", "/history", "/profile"]}
                     navLabels={["Home", "Pass", "History", "Profile"]}
                     navIcons = {[<Dashboard/>, <LocalActivity/>,<Restore/>, <Person/>]}
                />

        </div>
    )
}