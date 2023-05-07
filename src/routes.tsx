import { RouteObject } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import CandidateEmailVerification from "./components/Pages/candidates/CandidateEmailVerification";
import CandidateLogin from "./components/Pages/candidates/CandidateLogin";
import CandidateOptions from "./components/Pages/candidates/CandidateOptions";
import CookiesPolicies from "./components/Pages/candidates/CookiesPolicies";
import ForgotPassword from "./components/Pages/candidates/ForgotPassword";
import SetPassword from "./components/Pages/candidates/SetPassword";
import UploadResume from "./components/Pages/candidates/UploadResume";
import Choose from "./components/Pages/Choose/Choose";

import Courses from "./components/Pages/Courses";
import Home from "./components/Pages/Home";
import MainCourse from "./components/Pages/MainCourse";
import Candidates from "./components/Pages/main_candidate/Candidates";
import CandidatesEducations from "./components/Pages/main_candidate/CandidatesEducations";
import CandidateHome from "./components/Pages/main_candidate/candidates_pages/CandidatesHome";
import NoPage from "./components/Pages/NoPage";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "/main_candidates",
        element: <Candidates />,
        children: [
          {
            index: true,
            element: <CandidateHome />,
          },
          {
            path: "resume",
            element: <UploadResume />,
          },
          {
            path: "education",
            element: <CandidatesEducations />,
          },
        ],
      },
      {
        element: <Choose />,
        path: "/choose",
      },
      {
        path: "/candidates/options",
        element: <CandidateOptions />,
      },
      {
        path: "/candidates/login",
        element: <CandidateLogin />,
      },

      {
        path: "/candidates/email_verification",
        element: <CandidateEmailVerification />,
      },
      {
        path: "/candidates/set_password",
        element: <SetPassword />,
      },
      {
        path: "/candidates/forgot_password",
        element: <ForgotPassword />,
      },
      {
        path: "/cookies",
        element: <CookiesPolicies />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/courses/:id",
        element: <MainCourse />,
      },
      {
        path: "*",
        element: <NoPage />,
      },
    ],
  },
];
