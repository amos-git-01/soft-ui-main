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
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import TimelineItem from "examples/Timeline/TimelineItem";

function ProjectMilestone() {
  return (
    <Card className="h-100">
      <SoftBox pt={3} px={3}>
        <SoftTypography variant="h6" fontWeight="medium">
          Project Milestone
        </SoftTypography>
        <SoftBox mt={1} mb={2}>
          <SoftTypography variant="button" color="text" fontWeight="regular">
            <SoftTypography display="inline" variant="body2" verticalAlign="middle">
              <Icon sx={{ fontWeight: "bold", color: ({ palette: { success } }) => success.main }}>
                arrow_upward
              </Icon>
            </SoftTypography>
            &nbsp;
            <SoftTypography variant="button" color="text" fontWeight="medium">
              24%
            </SoftTypography>{" "}
            this month
          </SoftTypography>
        </SoftBox>
      </SoftBox>
      <SoftBox p={2}>
        <TimelineItem
          color="success"
          icon="start"
          title="Project Start"
          dateTime="22 DEC 7:20 PM"
        />
        <TimelineItem color="error" icon="mode" title="Engineering Start" dateTime="21 DEC 11 PM" />
        <TimelineItem
          color="info"
          icon="construction"
          title="Construction Start"
          dateTime="21 DEC 9:34 PM"
        />
        <TimelineItem
          color="warning"
          icon="bolt"
          title="Power Receiving"
          dateTime="20 DEC 2:20 AM"
        />
        <TimelineItem
          color="primary"
          icon="listalt"
          title="Precommissioning Start"
          dateTime="18 DEC 4:54 AM"
        />
        <TimelineItem
          color="dark"
          icon="checkcircle"
          title="Mechanical Completion"
          dateTime="17 DEC"
        />
      </SoftBox>
    </Card>
  );
}

export default ProjectMilestone;
