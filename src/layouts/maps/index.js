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

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";

// Soft UI Dashboard React components
import MasterCard from "examples/Cards/MasterCard";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

function Maps() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox mt={4}>
        <SoftBox mb={1.5}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d7177.485759774022!2d126.362194!3d37.0025!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sko!2skr!4v1661785800918!5m2!1sko!2skr"
            width="100%"
            height="600"
            allowFullScreen=""
            loading="lazy"
          />
        </SoftBox>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}
export default Maps;
