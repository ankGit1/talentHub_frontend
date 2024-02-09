import { useState } from "react";
import Button from "react-bootstrap/Button";
import { Card, Modal } from "react-bootstrap";
import { MdAccessTime } from "react-icons/md";
import axios from "axios";

function CourseCard({ info, btn }) {
  const { cId, cName, cType, cTime, cImage } = info;
  const [show, setShow] = useState(false);
  const [err, setErr] = useState(false);
  const userId = JSON.parse(localStorage.getItem("user"))?.id;

  const updateLocaleStorage = async () => {
    await axios
      .get(`${import.meta.env.VITE_backend}/path/user/get/localstorage/courses/${userId}`)
      .then((res) => {
        const localData = JSON.parse(localStorage.getItem("user"));
        localData.courseArr = res.data;
        localStorage.setItem("user", JSON.stringify(localData));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const cardBtnClicked = async (e, id) => {
    if (e.target.innerText === "Add Course" && userId) {
      await axios
        .post(`${import.meta.env.VITE_backend}/path/course/push/user/course/`, {
          courseId: id,
          user: userId,
        })
        .then((res) => {
          setErr(false);
          setShow(true);
          setTimeout(() => {
            setShow(false);
          }, 4000);
          updateLocaleStorage();
        })
        .catch((err) => {
          setShow(false);
          setErr(true);
          setTimeout(() => {
            setErr(false);
          }, 4000);
        });
    }
  };
  return (
    <>
      <Card className="p-2">
        <Card.Img
          variant="top"
          className="courseImg"
          src={cImage || info.image}
        />
        <Card.Body className="py-3 px-1">
          <span className="small-p courseType">{cType || info.type}</span>
          <Card.Text className="my-3">{cName || info.name}</Card.Text>
          <p className="pb-2 small-p">
            <MdAccessTime size={18} />
            <span className="mx-1">{cTime || info.duration}</span>
          </p>
          <Button
            className="resumeLearnBtn"
            onClick={(e) => cardBtnClicked(e, info._id || cId)}
          >
            {btn}
          </Button>
        </Card.Body>
      </Card>
      <Modal show={show} centered>
        <Modal.Body>
          Course added sussessfully..check it out in Courses section!
        </Modal.Body>
      </Modal>
      <Modal show={err} centered>
        <Modal.Body>
          We are facing difficulty while adding course.Please try in some time!
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CourseCard;
