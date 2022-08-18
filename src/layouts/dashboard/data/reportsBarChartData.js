/**
=========================================================
* Soft UI Dashboard React - v4.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

const reportsBarChartData = {
  chart: {
    labels: ["Dec-11", "Dec-12", "Dec-13", "Dec-14", "Dec-15", "Dec-16"],
    datasets: { label: "작업자", data: [900, 1000, 1100, 1220, 1150, 1300] },
  },
  items: [
    {
      icon: { color: "primary", component: "manageaccounts" },
      label: "롯데건설",
      progress: { content: "50", percentage: 60 },
    },
    {
      icon: { color: "info", component: "engineering" },
      label: "관리자",
      progress: { content: "150", percentage: 90 },
    },
    {
      icon: { color: "warning", component: "group" },
      label: "작업자",
      progress: { content: "1200", percentage: 30 },
    },
    {
      icon: { color: "error", component: "agriculture" },
      label: "주요장비",
      progress: { content: "43", percentage: 50 },
    },
  ],
};

export default reportsBarChartData;
