import { useSelector } from "react-redux";
import BottomNav from "../../components/BottomNav";
import Header from "../../components/Header";
import { Dashboard, LocalActivity, Person, Restore } from "@mui/icons-material";

export default function Profile(){
    const getNewreUser = useSelector((state)=>state.newreUserData);
    
    return(
        <div className="page profile-page">
                <Header/>
                <h1> hi, {getNewreUser.userName}</h1>
                <BottomNav 
                                                  navPaths={["/home", "/passhome", "/history", "/profile"]}
                                                  navLabels={["Home", "Pass", "History", "Profile"]}
                                                  navIcons = {[<Dashboard/>, <LocalActivity/>,<Restore/>, <Person/>]}
                                             />

        </div>
    )
}