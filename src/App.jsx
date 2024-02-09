import { useState } from "react";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/userRegistration/Home";
import Dashboard from "./components/dashboard/Dashboard";
import Root_dash_prog from "./components/dashboard/Root_dash_prog";
import RootLayout from "./components/root/RootLayout";
import ProgrameHome from "./components/myOneCourse/Home/ProgrameHome";
import Study from "./components/myOneCourse/allRightComponents/study/Study";
import Session from "./components/myOneCourse/allRightComponents/session/Session";
import Video from "./components/myOneCourse/allRightComponents/study/subs/Video";
import SkillReport from "./components/myOneCourse/allRightComponents/skillReport/SkillReport";
import Notes from "./components/myOneCourse/allRightComponents/notes/Notes";
import Resources from "./components/myOneCourse/allRightComponents/resources/Resources";
import Account from "./components/userInfo/account/Account";
import Purchase from "./components/userInfo/purchase/Purchase";
import Help from "./components/userInfo/help/Help";
import Refer from "./components/userInfo/refer/Refer";
import Calender from "./components/navbarLinks/calender/Calender";
import AllCourses from "./components/navbarLinks/courses/AllCourses";
import Library from "./components/navbarLinks/library/Library";
import GameContent from "./components/gamifiedZone/gameContent/GameContent";
import BookClass from "./components/upcomingEvents/subs/BookClass";
import WrongPath from "./components/wrongPath/WrongPath";

const ProtectedRoute = ({ children }) => {
  const findToken = localStorage.getItem("token");
  if (!findToken) {
    return <Navigate to="/" replace />;
  }
  return children;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route
        path="/learner"
        element={
          <ProtectedRoute>
            <Root_dash_prog />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="program-detail/:id" element={<ProgrameHome />}>
          <Route path="study" element={<Study />} />
          <Route path="session" element={<Session />} />
          <Route path="report" element={<SkillReport />} />
          <Route path="notes" element={<Notes />} />
          <Route path="resources" element={<Resources />} />
        </Route>
        <Route path="courses" element={<AllCourses />} />
        <Route path="calender" element={<Calender />} />
        <Route path="library" element={<Library />} />
        <Route path="video" element={<Video />} />
        <Route path="account" element={<Account />} />
        <Route path="purchase" element={<Purchase />} />
        <Route path="help-support" element={<Help />} />
        <Route path="refer" element={<Refer />} />
        <Route path="gamified" element={<GameContent />} />
        <Route path="bookclass" element={<BookClass />} />
      </Route>
      <Route path="*" element={<WrongPath />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
