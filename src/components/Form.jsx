import React, { useEffect } from "react";
import _ from "lodash";
import axios from "axios";
import Dialog from "./common/dialog";
import Slider from "./common/SliderCardForComment";

const initialState = {
  position: "fixed",
  top: "77%",
  bottom: "235px",
  zIndex: "1050",
  right: "22%",
  margin: "auto",
  width: "50%",
  border: "solid",
  backgroundColor: "white",
  display: "none",
};
const initialForm = {
  username: "",
  comment: "",
  IP: "",
  errors: {},
  message: "",
};

function Form() {
  const [form, setForm] = React.useState(initialForm);

  const [response, setresponse] = React.useState([]);
  const [dialogStyle, setdialogStyle] = React.useState(initialState);

  const formStyle = {
    margin: "auto",
    width: "50%",

    padding: "14px",
  };
  var slides = [];
  for (var index = 0; index <= 5; index++) {
    slides.push(<Slider></Slider>);
  }

  useEffect(() => {
    axios
      .get("https://server-portfolio-react.herokuapp.com/allcomment", {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        setresponse(res.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  useEffect(() => {
    console.log(response);
  }, [response]);

  const validate = () => {
    var err = {};
    if (form.username.trim() === "") {
      err.username = "Please enter your name";
    }
    if (form.comment.trim() === "") {
      err.comment = "Please enter your comment";
    }
    return err;
  };

  const changeHandler = ({ currentTarget: input }) => {
    setForm({ ...form, [input.name]: input.value });
  };

  const Submit = (e) => {
    e.preventDefault();
    var error = { ...form.errors };
    const errors = validate();
    setForm({ ...form, errors: errors || {} });
    if (!_.isEmpty(errors)) return;

    // call server
    axios
      .post("https://server-portfolio-react.herokuapp.com/comment", form, {
        headers: { "Content-Type": "Application/Json" },
      })
      .then(({ data }) => {
        const { username, comments } = data.success;
        // const newElement = <Slider username={username} comment={comment} />;
        // console.log(newElement);
        // $("#active").append(`${newElement}`);
        setdialogStyle({ ...dialogStyle, display: "block" });
        setresponse([ ...response, {username : username,comments:comments}])
      })
      .catch((error) => {
        console.log(error);
        alert("sorry there is problem try in another time");
        setForm({
          ...form,
          message: error.response.message.error || "there is error",
        });
      });
  };

  const setdialogStyleMethod = () => {
    setdialogStyle({ ...dialogStyle, display: "none" });
  };

  return (
    <div>
      <div
        id="carouselExampleControls2"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{ minHeight: "214px" }}
      >
        <div className="carousel-inner">
          <div id="active" className="carousel-item active">
            <div className="col-md-4">
              <div className="card w-75">
                <div className="card-body">
                  <h5 className="card-title">Hamza - حمزة</h5>
                  <div className="card-text">
                    thank you for visit my portfolio pleas write comment for me
                    🥰
                    <div style={{ textAlign: "right" }}>
                      {" "}
                      شكرا لزيارتكم الموقع الرجاء ترك تعليق ان امكن
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {response.map((res) => (
            <Slider
              key={res.username}
              comment={res.comments}
              username={res.username}
            />
          ))}
        </div>
        <a
          style={{ color: "black" }}
          className="carousel-control-prev"
          href="#carouselExampleControls2"
          role="button"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a
          style={{ color: "black" }}
          className="carousel-control-next"
          href="#carouselExampleControls2"
          role="button"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </a>
      </div>

      <form style={formStyle} onSubmit={Submit}>
        <input
          style={{ width: "90%", marginBottom: "9px" }}
          onChange={changeHandler}
          name="username"
          value={form.username}
          placeholder="your name"
        />

        <input
          style={{ width: "90%", marginBottom: "9px" }}
          onChange={changeHandler}
          name="comment"
          placeholder="your comment"
          value={form.comment}
        />

        <div className="btn-submit-add">
          <Dialog style={dialogStyle} name={form.username} hideDialog={setdialogStyleMethod} />

          <button
            style={{
              color: "black",
              backgroundColor: "darkseagreen",
              borderColor: "#007bff",
            }}
            className="btn  m-auto"
            type="submit"
            id="opener-3"
          >
            send commit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
