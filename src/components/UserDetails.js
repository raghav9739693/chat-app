import { jsxAttribute } from "@babel/types";
import React from "react";
import "./style.css";
class UploadImages extends React.Component {
  state = {
    profileImg:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
  };
  imageHandler = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ profileImg: reader.result });
        console.log(reader, "<<<...........................");
      }
    };

    reader.readAsDataURL(e.target.files[0]);
    localStorage.setItem("images", JSON.stringify(e.target.value));

    console.log("<<<<<----canada--->>>>>>");
 
  
  };


  

  render() {
    const { profileImg } = this.state;

    return (
      <div className="page">
        <div className="container">
          <h1 className="heading">Add your Image</h1>
          <div className="img-holder">
            <img src={profileImg} alt="" id="img" className="img" />
          </div>
          {localStorage.getItem('reader')}
          <input
            type="file"
            accept="image/*"
            name="image-upload"
            id="input"
            onChange={this.imageHandler}
          />

          <div className="label">
            <label className="image-upload" htmlFor="input">
              <i className="material-icons">add_photo_alternate</i>
              Choose your Photo
            </label>
          </div>
          <div className="cs7raghav">
            <div className="card user-detail" style={{ width: "25rem" }}>
              <div className="card-body">
                <h5 className="card-title">User Details</h5>
                <h6 className="card-subtitle mb-2 text-muted">Profile</h6>
                <p className="card-text">FirstName : Raghav </p>
                <p className="card-text ">LastName : Jha </p>
                <p className="card-text">email:raghavjha31@gmail.com</p>
             
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UploadImages;
