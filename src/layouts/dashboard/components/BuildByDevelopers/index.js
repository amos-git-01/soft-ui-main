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
import wavesWhite from "assets/images/shapes/waves-white.svg";
import rocketWhite from "assets/images/illustrations/rocket-white.png";
import team1 from "assets/images/team-1.jpg";

function BuildByDevelopers() {
  return (
    <Card>
      <SoftBox p={2}>
        <Grid container spacing={3}>
          {/* Overview Text */}
          <Grid item xs={12} lg={6}>
            <SoftBox display="flex" flexDirection="column" height="100%">
              <SoftBox pt={1} mb={0.5}>
                {/* Overview Title */}
                <SoftTypography variant="body2" color="text" fontWeight="medium">
                  Project Overview
                </SoftTypography>
              </SoftBox>
              {/* Overview Subtitle */}
              <SoftTypography variant="h5" fontWeight="bold" gutterBottom>
                대산 롯데케미칼 ES PROJECT
              </SoftTypography>
              <SoftBox mb={6}>
                {/* Overview 본문 */}
                <SoftTypography variant="body2" color="text">
                  <div>&nbsp;</div>
                  <div>공 &nbsp; 기: &nbsp;&nbsp;2022/03/25 ~ 2024/03/31</div>
                  <div>공사비: &nbsp;&nbsp;4,200억원</div>
                  <div>생산품: &nbsp;&nbsp;EC,DMC,EMC,DEC</div>
                </SoftTypography>
              </SoftBox>
              {/* read more & 화살표*/}
              <SoftTypography
                component="a"
                href="#"
                variant="button"
                color="text"
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
                Read More
                <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
              </SoftTypography>
            </SoftBox>
          </Grid>
          {/* Overview Image */}
          <Grid item xs={12} lg={5} sx={{ position: "relative", ml: "auto" }}>
            <SoftBox
              height="100%"
              display="grid"
              justifyContent="center"
              alignItems="center"
              bgColor="info"
              borderRadius="lg"
              variant="gradient"
            >
              {/* 배경 Image */}
              <SoftBox
                component="img"
                src={team1}
                alt="waves"
                display="block"
                position="absolute"
                left={0}
                width="50%"
                height="100%"
              />
              {/* 전경 Image */}
              <SoftBox component="img" src={wavesWhite} alt="rocket" width="100%" pt={3} />
            </SoftBox>
          </Grid>
        </Grid>
      </SoftBox>
    </Card>
  );
}

export default BuildByDevelopers;
