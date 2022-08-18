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
import plant2 from "assets/images/plant/plant2.jpg";

// Image Sliders
import SimpleImageSlider from "react-simple-image-slider";
const IMAGES = [
  { url: plant1 },
  { url: plant2 },
  { url: plant1 },
  { url: plant2 },
  { url: plant1 },
  { url: plant2 },
];

// 본문 시작

function BuildByDevelopers() {
  return (
    <Card>
      <div></div>
      <SoftBox p={2}>
        <Grid container spacing={2}>
          {/* Overview Text */}
          <Grid item xs={12} lg={6}>
            <SoftBox display="flex" flexDirection="column" height="100%">
              <SoftBox pt={1} mb={0.5}>
                {/* Overview Title */}
                <SoftTypography variant="body2" color="text" fontWeight="medium">
                  Project 개요
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
                상세 개요 바로가기
                <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
              </SoftTypography>
            </SoftBox>
          </Grid>
          {/* Overview Image */}
          <Grid item xs={12} lg={6} sx={{ position: "relative", ml: "auto" }}>
            {/* 배경 Image */}

            <SoftBox borderRadius="lg">
              <SimpleImageSlider
                style={{
                  position: "relative",
                  border: "0px solid red",
                  borderRadius: "10px",
                  margin: "0 auto",
                  marginTop: "0px",
                }}
                navStyle={1}
                width="100%"
                height={240}
                images={IMAGES}
                showBullets={true}
                showNavs={true}
                onClick={onclick}
                autoPlay={true}
                autoPlayDelay={5}
                navSize={50}
              />
            </SoftBox>
          </Grid>
        </Grid>
      </SoftBox>
    </Card>
  );
}

export default BuildByDevelopers;
