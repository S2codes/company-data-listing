import React,{useState} from 'react';
import AdminSidebar from './AdminSidebar';
import Dashboard from './Dashboard';
import Companies from './Companies';

const AdminPanel = (props) => {
    
    const [activePage, setActivePage] = useState("dashboard");

    const activePageHandler = (page) => {
        setActivePage(page);
    }
  
    return (
        <>
        <AdminSidebar getActivePage={activePageHandler} logoutTimer={props.logoutTimer}/>
        {activePage === "dashboard" && <Dashboard />}
        {activePage === "company" && <Companies companies={props.companies}/>}
        </>
    )
};

export default AdminPanel;
