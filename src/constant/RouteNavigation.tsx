import Dashboard from "@/pages/dashboard";
import EmployeeIndex from "@/pages/employee";
import CreateEmployee from "@/pages/employee/create";
import JobTitleIndex from "@/pages/job-title";
import JobTitleCreate from "@/pages/job-title/create";

export const protectedRoutes = [
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/attendance", element: <div>Attendance Page</div> },
    { path: "/employee", element: <EmployeeIndex /> },
    { path: "/employee/create", element: <CreateEmployee /> },
    { path: "/evaluation", element: <div>Evaluation Page</div> },
    { path: "/training", element: <div>Training Page</div> },
    { path: "/job-title", element: <JobTitleIndex /> },
    { path: "/job-title/create", element: <JobTitleCreate /> },
    { path: "/salary", element: <div>Salary Page</div> },
    { path: "/recruitment", element: <div>Recruitment Page</div> },
]