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
import CardContent from "@mui/material/CardContent";
import Icon from "@mui/material/Icon";
import Link from "@mui/material/Link";

// Soft UI Dashboard React components
import SoftButton from "components/SoftButton";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Custom styles for the SidenavCard
import { card, cardContent, cardIconBox, cardIcon } from "examples/CCTV/styles/sidenavCard";

// Soft UI Dashboard React context
import { useSoftUIController } from "context";
// CCTV 링크 설정
function SidenavCard() {
  const [controller] = useSoftUIController();
  const { miniSidenav, sidenavColor } = controller;

  return (
    <Card sx={(theme) => card(theme, { miniSidenav })}>
      <CardContent sx={(theme) => cardContent(theme, { sidenavColor })}>
        <SoftBox
          bgColor="white"
          width="2rem"
          height="2rem"
          borderRadius="md"
          shadow="md"
          mb={2}
          sx={cardIconBox}
        >
          <Icon fontSize="medium" sx={(theme) => cardIcon(theme, { sidenavColor })}>
            videocamerabackoutlined
          </Icon>
        </SoftBox>
        <SoftBox lineHeight={1}>
          <SoftTypography variant="h6" color="white">
            현장 CCTV 확인?
          </SoftTypography>
          <SoftBox mb={1.825} mt={-1}>
            <SoftTypography variant="caption" color="white" fontWeight="medium">
              아래 링크로 이동해주세요.
            </SoftTypography>
          </SoftBox>
          <SoftButton
            component={Link}
            href="http://www.roadplus.co.kr/main/main.do#none"
            target="_blank"
            rel="noreferrer"
            size="small"
            color="white"
            fullWidth
          >
            CCTV 바로가기
          </SoftButton>
        </SoftBox>
      </CardContent>
    </Card>
  );
}

export default SidenavCard;
