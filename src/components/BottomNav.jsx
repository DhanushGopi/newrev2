import { History, Home, LocalActivity, Person} from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BottomNav(){

    const [value,setValue] = useState();
    const navigate = useNavigate();

    return(
        <Paper className="bottom-nav-cont" sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
        <BottomNavigation className="bottom-nav"
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            const paths = ["/home", "/pass", "/history", "/profile"];
            navigate(paths[newValue]);
          }}
        >
          <BottomNavigationAction className="bottom-nav-btn" label="Home" icon={<Home/>} />
          <BottomNavigationAction className="bottom-nav-btn" label="Pass" icon={<LocalActivity/>} />
          <BottomNavigationAction className="bottom-nav-btn" label="History" icon={<History />} />
          <BottomNavigationAction className="bottom-nav-btn" label="Profile" icon={<Person />} />
        </BottomNavigation>
      </Paper>
    )
}