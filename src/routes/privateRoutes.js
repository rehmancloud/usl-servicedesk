import {
  MainDashboard,
  SupplierPage,
  CustomerPage,
  JobsListing,
} from "../pages";
export const privateRoutes = [
  {
    isExact: true,
    path: "/",
    component: MainDashboard,
  },
  {
    isExact: true,
    path: "/supplier",
    component: SupplierPage,
  },
  {
    isExact: true,
    path: "/customer",
    component: CustomerPage,
  },
  {
    isExact: true,
    path: "/job-listing",
    component: JobsListing,
  },
];
