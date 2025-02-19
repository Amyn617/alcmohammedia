import { lazy } from "react";

// Lazy load components
const Home = lazy(() => import("../pages/Home"));
const EnglishProgram = lazy(() => import("../pages/EnglishProgram"));
const FrenchProgram = lazy(() => import("../pages/FrenchProgram"));
const Join = lazy(() => import("../pages/Join"));
const Registration = lazy(() => import("../pages/Registration"));
const Clubs = lazy(() => import("../pages/Clubs"));
const NotFound = lazy(() => import("../pages/NotFound"));

export const routes = [
  {
    path: "/",
    element: Home,
    exact: true,
  },
  {
    path: "/english-program",
    element: EnglishProgram,
    sections: [
      "general-english",
      "business-english",
      "conversational-english",
      "skill-based-classes",
      "academic-english",
      "exam-preparation",
      "baccalaureat-program",
      "private-courses",
    ],
  },
  {
    path: "/french-program",
    element: FrenchProgram,
    sections: [
      "general-french",
      "professional-french",
      "communication-french",
      "exam-preparation-french",
      "regional-french",
      "french-middle-school",
    ],
  },
  {
    path: "/join",
    element: Join,
  },
  {
    path: "/registration",
    element: Registration,
  },
  {
    path: "/clubs",
    element: Clubs,
  },
  {
    path: "*",
    element: NotFound,
  },
];
