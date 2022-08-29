/* eslint-disable react/prop-types */
// @mui material components
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

const constTableData = {
  columns: [
    { name: "discipline", align: "left" },
    { name: "type", align: "left" },
    { name: "progress", align: "center" },
    { name: "status", align: "center" },
    { name: "action", align: "center" },
  ],

  rows: [
    {
      discipline: (
        <SoftBox display="flex" alignItems="center" px={1} py={1}>
          <Icon fontSize="small" color="inherit">
            star
          </Icon>
          <SoftTypography variant="button" fontWeight="medium">
            &nbsp;Civil
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
      discipline: (
        <SoftBox display="flex" alignItems="center" px={1} py={1}>
          <Icon fontSize="small" color="inherit">
            star
          </Icon>
          <SoftTypography variant="button" fontWeight="medium">
            &nbsp;Arch
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
      discipline: (
        <SoftBox display="flex" alignItems="center" px={1} py={1}>
          <Icon fontSize="small" color="inherit">
            star
          </Icon>
          <SoftTypography variant="button" fontWeight="medium">
            &nbsp;Steel
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
      discipline: (
        <SoftBox display="flex" alignItems="center" px={1} py={1}>
          <Icon fontSize="small" color="inherit">
            star
          </Icon>
          <SoftTypography variant="button" fontWeight="medium">
            &nbsp;Rotating
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
      discipline: (
        <SoftBox display="flex" alignItems="center" px={1} py={1}>
          <Icon fontSize="small" color="inherit">
            star
          </Icon>
          <SoftTypography variant="button" fontWeight="medium">
            &nbsp;Stationary
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
      discipline: (
        <SoftBox display="flex" alignItems="center" px={1} py={1}>
          <Icon fontSize="small" color="inherit">
            star
          </Icon>
          <SoftTypography variant="button" fontWeight="medium">
            &nbsp;Piping
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
      discipline: (
        <SoftBox display="flex" alignItems="center" px={1} py={1}>
          <Icon fontSize="small" color="inherit">
            star
          </Icon>
          <SoftTypography variant="button" fontWeight="medium">
            &nbsp;Elec
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
      discipline: (
        <SoftBox display="flex" alignItems="center" px={1} py={1}>
          <Icon fontSize="small" color="inherit">
            star
          </Icon>
          <SoftTypography variant="button" fontWeight="medium">
            &nbsp;I&C
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
      discipline: (
        <SoftBox display="flex" alignItems="center" px={1} py={1}>
          <Icon fontSize="small" color="inherit">
            star
          </Icon>
          <SoftTypography variant="button" fontWeight="medium">
            &nbsp;Painting
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
  ],
};

export default constTableData;
