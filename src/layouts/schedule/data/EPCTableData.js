/* eslint-disable react/prop-types */
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftProgress from "components/SoftProgress";
import SoftBadge from "components/SoftBadge";

// @mui material components
import Icon from "@mui/material/Icon";

function Completion({ value, color }) {
  return (
    <SoftBox display="flex" alignItems="center">
      <SoftTypography variant="caption" color="text" fontWeight="medium">
        {value}%&nbsp;
      </SoftTypography>
      <SoftBox width="8rem">
        <SoftProgress value={value} color={color} variant="gradient" label={false} />
      </SoftBox>
    </SoftBox>
  );
}

function Type() {
  return (
    <SoftBox display="flex" flexDirection="column">
      <SoftTypography variant="caption" fontWeight="medium" color="text">
        Planned
      </SoftTypography>
      <SoftTypography variant="caption" color="secondary">
        Actual
      </SoftTypography>
    </SoftBox>
  );
}

const epcTableData = {
  columns: [
    { name: "phase", align: "left" },
    { name: "type", align: "left" },
    { name: "progress", align: "center" },
    { name: "status", align: "center" },
    { name: "action", align: "center" },
  ],

  rows: [
    {
      phase: (
        <SoftBox display="flex" alignItems="center" px={1} py={1}>
          <Icon fontSize="small" color="inherit">
            engineering
          </Icon>
          <SoftTypography variant="button" fontWeight="medium">
            &nbsp;Engineering
          </SoftTypography>
        </SoftBox>
      ),
      type: <Type />,
      status: (
        <SoftBadge variant="gradient" badgeContent="ahead" color="success" size="xs" container />
      ),
      progress: (
        <SoftBox display="flex" flexDirection="column">
          <Completion value={30} color="info" />
          <Completion value={30} color="primary" />
        </SoftBox>
      ),
      action: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </SoftTypography>
      ),
    },
    {
      phase: (
        <SoftBox display="flex" alignItems="center" px={1} py={1}>
          <Icon fontSize="small" color="inherit">
            shoppingbasket
          </Icon>
          <SoftTypography variant="button" fontWeight="medium">
            &nbsp;Procurement
          </SoftTypography>
        </SoftBox>
      ),
      type: <Type job="Programator" org="Developer" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="Behind" color="error" size="xs" container />
      ),
      progress: (
        <SoftBox display="flex" flexDirection="column">
          <Completion value={30} color="info" />
          <Completion value={30} color="primary" />
        </SoftBox>
      ),
      action: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </SoftTypography>
      ),
    },
    {
      phase: (
        <SoftBox display="flex" alignItems="center" px={1} py={1}>
          <Icon fontSize="small" color="inherit">
            construction
          </Icon>
          <SoftTypography variant="button" fontWeight="medium">
            &nbsp;Construction
          </SoftTypography>
        </SoftBox>
      ),
      type: <Type job="Executive" org="Projects" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
      ),
      progress: (
        <SoftBox display="flex" flexDirection="column">
          <Completion value={30} color="info" />
          <Completion value={30} color="primary" />
        </SoftBox>
      ),
      action: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </SoftTypography>
      ),
    },
    {
      phase: (
        <SoftBox display="flex" alignItems="center" px={1} py={1}>
          <Icon fontSize="small" color="inherit">
            summarize
          </Icon>
          <SoftTypography variant="button" fontWeight="medium">
            &nbsp;Overall
          </SoftTypography>
        </SoftBox>
      ),
      type: <Type job="Executive" org="Projects" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
      ),
      progress: (
        <SoftBox display="flex" flexDirection="column">
          <Completion value={30} color="info" />
          <Completion value={30} color="primary" />
        </SoftBox>
      ),
      action: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </SoftTypography>
      ),
    },
  ],
};

export default epcTableData;
