import { useRoutes } from "react-router-dom";
import LandingPage from "../Landing/LandingPage";
import TeacherSignup from "../Auth/teacherAuth/TeacherSignup";
import EmployerSignup from "../Auth/employerAuth/EmployerSignup";
import EmployerLogin from "../Auth/employerAuth/EmployerLogin";
import TeacherLogin from "../Auth/teacherAuth/TeacherLogin";
import Homeroom from "../page/home/Homeroom";
import CreateResume from "../page/CreateResume";

function AppNavigation() {
  let element = useRoutes([
    {
      path: "app",
      // element: 
      children: [
        {
          path: "homeroom",
          element: <Homeroom />
        }
      ]
    },
    {
      path: "resume",
      element: <CreateResume />
    },
    {
      path: "/",
      element: <LandingPage />,
      children: [{ index: true }],
    },
    {
      path: "/teacher",
      // element: ,
      children: [
        {
          path: "sign-up",
          element: <TeacherSignup />
        },
        {
          path: "sign-in",
          element: <TeacherLogin />
        }
      ]
    },
    {
      path: "/employer",
      children: [
        {
          path: "sign-up",
          element: <EmployerSignup />,
        },
        {
          path: "sign-in",
          element: <EmployerLogin />,
        }
      ]
    },
    // {
    //   path: "/employer/creating/profile",
    //   element: <CreatingProfile />,
    // },
    // {
    //   path: "/sign-up",
    //   element: <Signup />,
    // },
    // {
    //   path: "forgot-password",
    //   element: <ForgotPassword />,
    // },
    // {
    //   path: "email-sent",
    //   element: <EmailSent />,
    // },
    // {
    //   path: "create-new-password",
    //   element: <CreateNewPassword />,
    // },
  ]);
  return element;
}
export default AppNavigation;
