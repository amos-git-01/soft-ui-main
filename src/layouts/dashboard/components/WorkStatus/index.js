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
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Images
import plant1 from "assets/images/plant/plant1.jpg";

function WorkWithTheRockets() {
  return (
    <Card sx={{ height: "100%" }}>
      <SoftBox position="relative" height="100%" p={2}>
        <SoftBox
          display="flex"
          flexDirection="column"
          height="100%"
          py={2}
          px={2}
          borderRadius="lg"
          sx={{
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.8),
                rgba(gradients.dark.state, 0.8)
              )}, url(${plant1})`,
            backgroundSize: "cover",
          }}
        >
          {/* 주요 작업 Title */}
          <SoftBox mb={2} pt={1}>
            <SoftTypography variant="h5" color="white" fontWeight="bold">
              현장 주요 작업 현황
            </SoftTypography>
          </SoftBox>
          {/* 주요 작업 내용 */}
          <SoftBox mb={2}>
            <SoftTypography variant="body2" color="white">
              <Grid container spacing={0}>
                {/* 작업현황 */}
                <Grid item xs={12} lg={6} mb={2}>
                  <div>
                    <b>공종별 주요작업 현황</b>
                  </div>
                  <div>토목: 반응기 기초 타설</div>
                  <div>배관: UG CW 배관 착수</div>
                  <div></div>
                  <div></div>
                  <div></div>
                </Grid>
                {/* 검측현황 */}
                <Grid item xs={12} lg={6}>
                  <div>
                    <b>Field Inspection Notice</b>
                  </div>
                  <div>토목: 파이프랙 기초 검측</div>
                  <div>배관: UG배관 RT</div>
                  <div></div>
                </Grid>
              </Grid>
            </SoftTypography>
          </SoftBox>
          {/* 작업일보 바로가기 */}
          <SoftTypography
            component="a"
            href="#"
            variant="button"
            color="white"
            fontWeight="medium"
            sx={{
              mt: "auto",
              mr: "auto",
              display: "inline-flex",
              alignItems: "center",
              cursor: "pointer",

              "& .material-icons-round": {
                fontSize: "1.125rem",
                transform: `translate(2px, -0.5px)`,
                transition: "transform 0.2s cubic-bezier(0.34,1.61,0.7,1.3)",
              },

              "&:hover .material-icons-round, &:focus  .material-icons-round": {
                transform: `translate(6px, -0.5px)`,
              },
            }}
          >
            작업일보 바로가기
            <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
          </SoftTypography>
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

export default WorkWithTheRockets;
