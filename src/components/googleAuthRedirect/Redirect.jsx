import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function Redirect() {
  const token = useParams().token;
  const navigate = useNavigate();

  useEffect(() => {
    const getInfo = async () => {
      axios
        .post(`${import.meta.env.VITE_backend}/path/user/google/login`, {
          token,
        })
        .then((res) => {
          localStorage.setItem("user", JSON.stringify(res.data.info));
          localStorage.setItem("token", JSON.stringify(res.data.token));
          navigate("/learner");
        })
        .catch((err) => {
          console.log(err);
        });
    };
    if (!localStorage.getItem("user")) {
      getInfo();
    } else {
      navigate("/learner");
    }
  }, []);

  return <div>loading...</div>;
}

export default Redirect;
