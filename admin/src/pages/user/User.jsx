import {
  LocationSearching,
  MailOutline,
  PermIdentity,
  Publish,
} from "@material-ui/icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getUserById, updateUser } from "../../redux/apiCalls";
import "./user.css";

export default function User() {
  const location = useLocation();
  const dispatch = useDispatch();
  const userId = location.pathname.split("/")[2];
  const [inputs, setInputs] = useState({});
  const user = useSelector((state) => state.user.userById);
  const updatedUser = useSelector((state) => state.user);
  console.log(updatedUser);
  useEffect(() => {
    if (userId) {
      getUserById(userId, dispatch);
    }
  }, [userId]);

  useEffect(() => {
    if (user) {
      setInputs({
        username: user.username,
        email: user.email,
        isAdmin: user.isAdmin,
        name: user.name,
      });
    }
  }, [user]);

  const updateUserClick = (e) => {
    e.preventDefault();
    updateUser(userId, inputs, dispatch);
  };

  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{user?.name}</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{user?.username}</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">{user?.email}</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">Nepal, KTM</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  defaultValue={user?.username}
                  placeholder="Username.."
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  defaultValue={user?.name}
                  placeholder="Full Name"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  defaultValue={user?.email}
                  placeholder="Email.."
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton" onClick={updateUserClick}>
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
