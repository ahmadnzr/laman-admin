import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./user.css";

export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
        <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src="/img/avatar.png" alt="" className="userShowImg" />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Ahmad Nizar</span>
              <span className="userShowUserTitle">Backend Engineer</span>
            </div>
          </div>
          <div className="userShowButton">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">ahmadrpl</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">10.02.2000</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+62 9998 887 332 11</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">ahmadrpl@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">Yogyakarta | Indonesia</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form action="" className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="ahmadrpl"
                />
              </div>
              <div className="userUpdateItem">
                <label htmlFor="fullname">Fullname</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="Ahmad Nizar"
                />
              </div>
              <div className="userUpdateItem">
                <label htmlFor="email">email</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="ahmadrpl@gmail.com"
                />
              </div>
              <div className="userUpdateItem">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="+62 9998 887 332 11"
                />
              </div>
              <div className="userUpdateItem">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="Yogyakarta | Indonesia"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img src="/img/avatar.png" alt="" className="userUpdateImg" />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
