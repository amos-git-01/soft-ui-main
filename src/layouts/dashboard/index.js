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

// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";

// Soft UI Dashboard React base styles
import typography from "assets/theme/base/typography";

// Dashboard layout components
import ProjectOverview from "layouts/dashboard/components/ProjectOverview";
import WorkStatus from "layouts/dashboard/components/WorkStatus";
import ProjectMilestone from "layouts/dashboard/components/ProjectMilestone";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import gradientLineChartData from "layouts/dashboard/data/gradientLineChartData";
import ProcurementStatus from "./components/ProcurementStatus";

function Dashboard() {
  const { size } = typography;
  const { chart, items } = reportsBarChartData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        {/* 첫번째 줄 */}
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4} xl={2}>
              <MiniStatisticsCard
                title={{ text: "계획공정률" }}
                count="15%"
                percentage={{ color: "success", text: "+1%" }}
                icon={{ color: "info", component: "timeline" }}
              />
            </Grid>
            <Grid item xs={12} sm={4} xl={2}>
              <MiniStatisticsCard
                title={{ text: "실행공정률" }}
                count="16%"
                percentage={{ color: "success", text: "+3%" }}
                icon={{ color: "info", component: "insights" }}
              />
            </Grid>
            <Grid item xs={12} sm={4} xl={2}>
              <MiniStatisticsCard
                title={{ text: "무해재달성일" }}
                count="120일"
                percentage={{ color: "error", text: "" }}
                icon={{ color: "info", component: "event" }}
              />
            </Grid>
            <Grid item xs={12} sm={4} xl={2}>
              <MiniStatisticsCard
                title={{ text: "검측완료현황" }}
                count="270"
                percentage={{ color: "success", text: "+11" }}
                icon={{
                  color: "info",
                  component: "task",
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4} xl={2}>
              <MiniStatisticsCard
                title={{ text: "검측완료현황" }}
                count="270"
                percentage={{ color: "success", text: "+11" }}
                icon={{
                  color: "info",
                  component: "task",
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4} xl={2}>
              <MiniStatisticsCard
                title={{ text: "검측완료현황" }}
                count="270"
                percentage={{ color: "success", text: "+11" }}
                icon={{
                  color: "info",
                  component: "task",
                }}
              />
            </Grid>
          </Grid>
        </SoftBox>
        {/* 두번째 줄 */}
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={7}>
              {/* 프로젝트 개요 자리 */}
              <ProjectOverview />
            </Grid>
            <Grid item xs={12} lg={5}>
              {/* 더보기 자리 */}
              <WorkStatus />
            </Grid>
          </Grid>
        </SoftBox>
        {/* 세번째 줄 */}
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            {/* 출역인원 관리 */}
            <Grid item xs={12} lg={4}>
              <ReportsBarChart
                title="출역인원 관리"
                description={
                  <>
                    (<strong>+23%</strong>) than last week
                  </>
                }
                chart={chart}
                items={items}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              {/* 공정률 추세선 확인 */}
              <GradientLineChart
                title="Progress Overview"
                description={
                  <SoftBox display="flex" alignItems="center">
                    <SoftBox fontSize={size.lg} color="success" mb={0.3} mr={0.5} lineHeight={0}>
                      <Icon className="font-bold">arrow_upward</Icon>
                    </SoftBox>
                    <SoftTypography variant="button" color="text" fontWeight="medium">
                      4% more{" "}
                      <SoftTypography variant="button" color="text" fontWeight="regular">
                        in 2021
                      </SoftTypography>
                    </SoftTypography>
                  </SoftBox>
                }
                height="24.25rem"
                chart={gradientLineChartData}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <ProjectMilestone />
            </Grid>
          </Grid>
        </SoftBox>
        {/* 네번째 줄 */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={6}>
            <ProcurementStatus />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <ProcurementStatus />
          </Grid>
        </Grid>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
