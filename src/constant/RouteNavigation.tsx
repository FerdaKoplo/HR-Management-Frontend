import Dashboard from "@/pages/dashboard";
import Index from "@/pages/employee";
import Create from "@/pages/employee/create";

export const protectedRoutes = [
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/attendance", element: <div>Attendance Page</div> },
    { path: "/employee", element: <Index /> },
    { path: "/employee/create", element: <Create /> },
    { path: "/evaluation", element: <div>Evaluation Page</div> },
    { path: "/training", element: <div>Training Page</div> },
    { path: "/job-title", element: <div>Job Title Page</div> },
    { path: "/salary", element: <div>Salary Page</div> },
    { path: "/recruitment", element: <div>Recruitment Page</div> },
]