import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

<mySidebar>
    <Menu>
        <MenuItem routerLink={<Link to="/documentation" />}> Documentation</MenuItem>
        <MenuItem routerLink={<Link to="/calendar" />}> Calendar</MenuItem>
        <MenuItem routerLink={<Link to="/e-commerce" />}> E-commerce</MenuItem>
    </Menu>
</mySidebar>;