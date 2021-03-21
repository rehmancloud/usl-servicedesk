import moment from "moment";

export const data1 = [
  {
    year: moment().subtract(0, "days").format("DD/MM"),
    value: Math.floor(Math.random() * 400),
    category: "Manual Scheduled",
  },
  {
    year: moment().subtract(0, "days").format("DD/MM"),
    value: Math.floor(Math.random() * 400),
    category: "Retrieve Scheduled",
  },
  {
    year: moment().subtract(0, "days").format("DD/MM"),
    value: Math.floor(Math.random() * 400),
    category: "Import",
  },
  {
    year: moment().subtract(0, "days").format("DD/MM"),
    value: Math.floor(Math.random() * 400),
    category: "Push",
  },
  {
    year: moment().subtract(0, "days").format("DD/MM"),
    value: Math.floor(Math.random() * 400),
    category: "Export",
  },
  {
    year: moment().subtract(1, "days").format("DD/MM"),
    value: Math.floor(Math.random() * 300 + 200),
    category: "Manual Scheduled",
  },
  {
    year: moment().subtract(1, "days").format("DD/MM"),
    value: Math.floor(Math.random() * 300 + 200),
    category: "Retrieve Scheduled",
  },
  {
    year: moment().subtract(1, "days").format("DD/MM"),
    value: Math.floor(Math.random() * 300 + 200),
    category: "Import",
  },
  {
    year: moment().subtract(1, "days").format("DD/MM"),
    value: Math.floor(Math.random() * 300 + 200),
    category: "Push",
  },
  {
    year: moment().subtract(1, "days").format("DD/MM"),
    value: Math.floor(Math.random() * 300 + 200),
    category: "Export",
  },

  {
    year: moment().subtract(2, "days").format("DD/MM"),
    value: Math.floor(Math.random() * 300 + 400),
    category: "Manual Scheduled",
  },
  {
    year: moment().subtract(2, "days").format("DD/MM"),
    value: Math.floor(Math.random() * 300 + 400),
    category: "Retrieve Scheduled",
  },
  {
    year: moment().subtract(2, "days").format("DD/MM"),
    value: Math.floor(Math.random() * 300 + 400),
    category: "Import",
  },
  {
    year: moment().subtract(2, "days").format("DD/MM"),
    value: Math.floor(Math.random() * 300 + 400),
    category: "Push",
  },
  {
    year: moment().subtract(2, "days").format("DD/MM"),
    value: Math.floor(Math.random() * 300 + 400),
    category: "Export",
  },
  {
    year: moment().subtract(3, "days").format("DD/MM"),
    value: Math.floor(Math.random() * 400 + 200),
    category: "Manual Scheduled",
  },
  {
    year: moment().subtract(3, "days").format("DD/MM"),
    value: Math.floor(Math.random() * 400 + 200),
    category: "Retrieve Scheduled",
  },
  {
    year: moment().subtract(3, "days").format("DD/MM"),
    value: Math.floor(Math.random() * 400 + 200),
    category: "Import",
  },
  {
    year: moment().subtract(3, "days").format("DD/MM"),
    value: Math.floor(Math.random() * 400 + 200),
    category: "Push",
  },
  {
    year: moment().subtract(3, "days").format("DD/MM"),
    value: Math.floor(Math.random() * 400 + 200),
    category: "Export",
  },
  {
    year: moment().subtract(4, "days").format("DD/MM"),
    value: Math.floor(Math.random() * 200 + 500),
    category: "Manual Scheduled",
  },
  {
    year: moment().subtract(4, "days").format("DD/MM"),
    value: Math.floor(Math.random() * 200 + 500),
    category: "Retrieve Scheduled",
  },
  {
    year: moment().subtract(4, "days").format("DD/MM"),
    value: Math.floor(Math.random() * 200 + 500),
    category: "Import",
  },
  {
    year: moment().subtract(4, "days").format("DD/MM"),
    value: Math.floor(Math.random() * 200 + 500),
    category: "Push",
  },
  {
    year: moment().subtract(4, "days").format("DD/MM"),
    value: Math.floor(Math.random() * 200 + 500),
    category: "Export",
  },
  {
    year: moment().subtract(5, "days").format("DD/MM"),
    value: Math.floor(Math.random() * 200 + 300),
    category: "Manual Scheduled",
  },
  {
    year: moment().subtract(5, "days").format("DD/MM"),
    value: Math.floor(Math.random() * 200 + 300),
    category: "Retrieve Scheduled",
  },
  {
    year: moment().subtract(5, "days").format("DD/MM"),
    value: Math.floor(Math.random() * 200 + 300),
    category: "Import",
  },
  {
    year: moment().subtract(5, "days").format("DD/MM"),
    value: Math.floor(Math.random() * 200 + 300),
    category: "Push",
  },
  {
    year: moment().subtract(5, "days").format("DD/MM"),
    value: Math.floor(Math.random() * 200 + 300),
    category: "Export",
  },
];

export const data2 = [
  {
    year: moment().subtract(0, "minutes").format("hh:mm"),
    value: Math.floor(Math.random() * 200),
    category: "Total",
  },
  {
    year: moment().subtract(0, "minutes").format("hh:mm"),
    value: Math.floor(Math.random() * 200),
    category: "Failed",
  },
  {
    year: moment().subtract(1, "minutes").format("hh:mm"),
    value: Math.floor(Math.random() * 300),
    category: "Total",
  },
  {
    year: moment().subtract(1, "minutes").format("hh:mm"),
    value: Math.floor(Math.random() * 300),
    category: "Failed",
  },
  {
    year: moment().subtract(2, "minutes").format("hh:mm"),
    value: Math.floor(Math.random() * 400),
    category: "Total",
  },
  {
    year: moment().subtract(2, "minutes").format("hh:mm"),
    value: Math.floor(Math.random() * 400),
    category: "Failed",
  },
  {
    year: moment().subtract(3, "minutes").format("hh:mm"),
    value: Math.floor(Math.random() * 500),
    category: "Total",
  },
  {
    year: moment().subtract(3, "minutes").format("hh:mm"),
    value: Math.floor(Math.random() * 500),
    category: "Failed",
  },
  {
    year: moment().subtract(4, "minutes").format("hh:mm"),
    value: Math.floor(Math.random() * 400),
    category: "Total",
  },
  {
    year: moment().subtract(4, "minutes").format("hh:mm"),
    value: Math.floor(Math.random() * 400),
    category: "Failed",
  },
  {
    year: moment().subtract(5, "minutes").format("hh:mm"),
    value: Math.floor(Math.random() * 400),
    category: "Total",
  },
  {
    year: moment().subtract(5, "minutes").format("hh:mm"),
    value: Math.floor(Math.random() * 400),
    category: "Failed",
  },
  {
    year: moment().subtract(6, "minutes").format("hh:mm"),
    value: Math.floor(Math.random() * 400),
    category: "Total",
  },
  {
    year: moment().subtract(6, "minutes").format("hh:mm"),
    value: Math.floor(Math.random() * 400),
    category: "Failed",
  },
];

export const data3 = [
  {
    year: moment().subtract(0, "days").format("DD/MM"),
    value: Math.floor(Math.random() * 400),
    category: "Failed Job",
  },
  {
    year: moment().subtract(0, "days").format("DD/MM"),
    value: Math.floor(Math.random() * 400),
    category: "Failed Data",
  },
  {
    year: moment().subtract(0, "days").format("DD/MM"),
    value: Math.floor(Math.random() * 400),
    category: "Failed Supplier Conn",
  },
  {
    year: moment().subtract(0, "days").format("DD/MM"),
    value: Math.floor(Math.random() * 400),
    category: "Failed Auth",
  },
  {
    year: moment().subtract(0, "days").format("DD/MM"),
    value: Math.floor(Math.random() * 400),
    category: "Bad Req",
  },
  {
    year: moment().subtract(0, "days").format("DD/MM"),
    value: Math.floor(Math.random() * 400),
    category: "Failed Export",
  },
  {
    year: moment().subtract(1, "days").format("DD/MM"),
    value: Math.floor(Math.random() * 200 + 200),
    category: "Failed Job",
  },
  {
    year: moment().subtract(1, "days").format("DD/MM"),
    value: Math.floor(Math.random() * 200 + 200),
    category: "Failed Data",
  },
  {
    year: moment().subtract(1, "days").format("DD/MM"),
    value: Math.floor(Math.random() * 200 + 200),
    category: "Failed Supplier Conn",
  },
  {
    year: moment().subtract(1, "days").format("DD/MM"),
    value: Math.floor(Math.random() * 200 + 200),
    category: "Failed Auth",
  },
  {
    year: moment().subtract(1, "days").format("DD/MM"),
    value: Math.floor(Math.random() * 200 + 200),
    category: "Bad Req",
  },
  {
    year: moment().subtract(1, "days").format("DD/MM"),
    value: Math.floor(Math.random() * 200 + 200),
    category: "Failed Export",
  },

  {
    year: moment().subtract(2, "days").format("DD/MM"),
    value: Math.floor(Math.random() * 300 + 400),
    category: "Failed Job",
  },
  {
    year: moment().subtract(2, "days").format("DD/MM"),
    value: Math.floor(Math.random() * 300 + 400),
    category: "Failed Data",
  },
  {
    year: moment().subtract(2, "days").format("DD/MM"),
    value: Math.floor(Math.random() * 300 + 400),
    category: "Failed Supplier Conn",
  },
  {
    year: moment().subtract(2, "days").format("DD/MM"),
    value: Math.floor(Math.random() * 300 + 400),
    category: "Failed Auth",
  },
  {
    year: moment().subtract(2, "days").format("DD/MM"),
    value: Math.floor(Math.random() * 300 + 400),
    category: "Bad Req",
  },
  {
    year: moment().subtract(2, "days").format("DD/MM"),
    value: Math.floor(Math.random() * 300 + 400),
    category: "Failed Export",
  },
  {
    year: moment().subtract(3, "days").format("DD/MM"),
    value: Math.floor(Math.random() * 400 + 200),
    category: "Failed Job",
  },
  {
    year: moment().subtract(3, "days").format("DD/MM"),
    value: Math.floor(Math.random() * 400 + 200),
    category: "Failed Data",
  },
  {
    year: moment().subtract(3, "days").format("DD/MM"),
    value: Math.floor(Math.random() * 400 + 200),
    category: "Failed Supplier Conn",
  },
  {
    year: moment().subtract(3, "days").format("DD/MM"),
    value: Math.floor(Math.random() * 400 + 200),
    category: "Failed Auth",
  },
  {
    year: moment().subtract(3, "days").format("DD/MM"),
    value: Math.floor(Math.random() * 400 + 200),
    category: "Bad Req",
  },
  {
    year: moment().subtract(3, "days").format("DD/MM"),
    value: Math.floor(Math.random() * 400 + 200),
    category: "Failed Export",
  },
  {
    year: moment().subtract(4, "days").format("DD/MM"),
    value: Math.floor(Math.random() * 200 + 500),
    category: "Failed Job",
  },
  {
    year: moment().subtract(4, "days").format("DD/MM"),
    value: Math.floor(Math.random() * 200 + 500),
    category: "Failed Data",
  },
  {
    year: moment().subtract(4, "days").format("DD/MM"),
    value: Math.floor(Math.random() * 200 + 500),
    category: "Failed Supplier Conn",
  },
  {
    year: moment().subtract(4, "days").format("DD/MM"),
    value: Math.floor(Math.random() * 200 + 500),
    category: "Failed Auth",
  },
  {
    year: moment().subtract(4, "days").format("DD/MM"),
    value: Math.floor(Math.random() * 200 + 500),
    category: "Bad Req",
  },
  {
    year: moment().subtract(4, "days").format("DD/MM"),
    value: Math.floor(Math.random() * 200 + 500),
    category: "Failed Export",
  },
  {
    year: moment().subtract(5, "days").format("DD/MM"),
    value: Math.floor(Math.random() * 200 + 300),
    category: "Failed Job",
  },
  {
    year: moment().subtract(5, "days").format("DD/MM"),
    value: Math.floor(Math.random() * 200 + 300),
    category: "Failed Data",
  },
  {
    year: moment().subtract(5, "days").format("DD/MM"),
    value: Math.floor(Math.random() * 200 + 300),
    category: "Failed Supplier Conn",
  },
  {
    year: moment().subtract(5, "days").format("DD/MM"),
    value: Math.floor(Math.random() * 200 + 300),
    category: "Failed Auth",
  },
  {
    year: moment().subtract(5, "days").format("DD/MM"),
    value: Math.floor(Math.random() * 200 + 300),
    category: "Bad Req",
  },
  {
    year: moment().subtract(5, "days").format("DD/MM"),
    value: Math.floor(Math.random() * 200 + 300),
    category: "Failed Export",
  },
];

export const ActiveJobs = [
  {
    action: "Retrieve",
    Name: "Shaheer",
    status: "Warning",
  },
  {
    action: "Import",
    Name: "Rehman",
    status: "Error",
  },
  {
    action: "Export",
    Name: "Asad",
    status: "OK",
  },
  {
    action: "Import",
    Name: "Danial",
    status: "In Progress",
  },
  {
    action: "Retrieve",
    Name: "Shaheer",
    status: "Warning",
  },
];

export const RecentAddedSuppliers = [
  {
    Time: moment().format("MM/DD - hh:mm:ss"),
    ID: "s001",
    Name: `BOOKER`,
    Schedule: "Disable",
  },
  {
    Time: moment().format("MM/DD - hh:mm:ss"),
    ID: "s002",
    Name: `BESTWAY`,
    Schedule: "Disable",
  },
  {
    Time: moment().format("MM/DD - hh:mm:ss"),
    ID: "s003",
    Name: `LONDIS`,
    Schedule: "Disable",
  },
  {
    Time: moment().format("MM/DD - hh:mm:ss"),
    ID: "s004",
    Name: `NISA`,
    Schedule: "Disable",
  },
  {
    Time: moment().format("MM/DD - hh:mm:ss"),
    ID: "s005",
    Name: `COSTCUTTER`,
    Schedule: "Disable",
  },
];

export const RecentAddedCustomers = [
  {
    Time: moment().format("MM/DD - hh:mm:ss"),
    ID: "c001",
    Name: `Customer 01`,
    Schedule: "Disable",
  },
  {
    Time: moment().format("MM/DD - hh:mm:ss"),
    ID: "c002",
    Name: `Customer 02`,
    Schedule: "Disable",
  },
  {
    Time: moment().format("MM/DD - hh:mm:ss"),
    ID: "c003",
    Name: `Customer 03`,
    Schedule: "Disable",
  },
  {
    Time: moment().format("MM/DD - hh:mm:ss"),
    ID: "c004",
    Name: `Customer 04`,
    Schedule: "Disable",
  },
  {
    Time: moment().format("MM/DD - hh:mm:ss"),
    ID: "c005",
    Name: `Customer 05`,
    Schedule: "Disable",
  },
];

export const FailedConnections = [
  {
    Time: moment().format("MM/DD - hh:mm:ss"),
    Supplier: `Customer 01`,
    Customer: `BOOKER`,
  },
  {
    Time: moment().format("MM/DD - hh:mm:ss"),
    Supplier: `Customer 02`,
    Customer: `BESTWAY`,
  },
  {
    Time: moment().format("MM/DD - hh:mm:ss"),
    Supplier: `Customer 03`,
    Customer: `LONDIS`,
  },
  {
    Time: moment().format("MM/DD - hh:mm:ss"),
    Supplier: `Customer 04`,
    Customer: `NISA`,
  },
  {
    Time: moment().format("MM/DD - hh:mm:ss"),
    Supplier: `Customer 05`,
    Customer: `COSTCUTTER`,
  },
];

export const RecentAlarms = [
  {
    severity: `Severity 01`,
    type: `Failed Job`,
    description: `Description 01`,
    Time: moment().format("MM/DD - hh:mm:ss"),
  },
  {
    severity: `Severity 02`,
    type: `Failed Data Record`,
    description: `Description 02`,
    Time: moment().format("MM/DD - hh:mm:ss"),
  },
  {
    severity: `Severity 03`,
    type: `Failed Supplier`,
    description: `Description 03`,
    Time: moment().format("MM/DD - hh:mm:ss"),
  },
  {
    severity: `Severity 04`,
    type: `Failed Authentication`,
    description: `Description 04`,
    Time: moment().format("MM/DD - hh:mm:ss"),
  },
  {
    severity: `Severity 05`,
    type: `Bad Request`,
    description: `Description 05`,
    Time: moment().format("MM/DD - hh:mm:ss"),
  },
];
