import React from "react"
import { Visibility } from "@material-ui/icons"
import "./widgetSm.css"

export default function WidgetSm() {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="img/avatar.png" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Ahmad Nizar</span>
                        <span className="widgetSmUserTitle">DevOps Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" /> Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="img/avatar.png" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Ahmad Nizar</span>
                        <span className="widgetSmUserTitle">DevOps Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" /> Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="img/avatar.png" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Ahmad Nizar</span>
                        <span className="widgetSmUserTitle">DevOps Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" /> Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="img/avatar.png" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Ahmad Nizar</span>
                        <span className="widgetSmUserTitle">DevOps Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" /> Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="img/avatar.png" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Ahmad Nizar</span>
                        <span className="widgetSmUserTitle">DevOps Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" /> Display
                    </button>
                </li>
            </ul>
        </div>
    )
}
