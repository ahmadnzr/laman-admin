import React from 'react';
import "./sidebar.css"
import { AttachMoneyOutlined, ChatBubbleOutline, DynamicFeedOutlined, EmailOutlined, EqualizerOutlined, LineStyle, PersonOutline, ReportRounded, StorefrontOutlined, Timeline, TrendingUp, WorkOffOutlined } from '@material-ui/icons';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <LineStyle className="sidebarIcon" /> Home
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon" /> Analitics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon" /> Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <PersonOutline className="sidebarIcon" /> Users
                        </li>
                        <li className="sidebarListItem">
                            <StorefrontOutlined className="sidebarIcon" /> Products
                        </li>
                        <li className="sidebarListItem">
                            <AttachMoneyOutlined className="sidebarIcon" /> Transactions
                        </li>
                        <li className="sidebarListItem">
                            <EqualizerOutlined className="sidebarIcon" /> Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <EmailOutlined className="sidebarIcon" /> Mail
                        </li>
                        <li className="sidebarListItem">
                            <DynamicFeedOutlined className="sidebarIcon" /> FeedBack
                        </li>
                        <li className="sidebarListItem">
                            <ChatBubbleOutline className="sidebarIcon" /> Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <WorkOffOutlined className="sidebarIcon" /> Manage
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon" /> Analitics
                        </li>
                        <li className="sidebarListItem">
                            <ReportRounded className="sidebarIcon" /> Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
