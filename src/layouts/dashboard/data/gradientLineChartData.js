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

const gradientLineChartData = {
  labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Planned",
      color: "info",
      data: [3, 8, 12, 15, 18, 24, 28, 34, 45],
    },
    {
      label: "Actual",
      color: "dark",
      data: [6, 8, 17, 22, 24, 31, 34, 40, 44],
    },
  ],
};

export default gradientLineChartData;
