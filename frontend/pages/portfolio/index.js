import React from "react";
import PageHead from "../Head";
import Context from "@/context/Context";
import HeaderDashboard from "@/components/Header/HeaderDashboard";
import PopupMobileMenu from "@/components/Header/PopupMobileMenu";
import LeftpanelDashboard from "@/components/Common/LeftpanelDashboard";
import Portfolio from "@/components/Portfolio/Portfolio";

const PortfolioPage = () => {
  return (
    <>
      <PageHead title="Portfolio" />

      <main className="page-wrapper rbt-dashboard-page">
        <Context>
          <div className="rbt-panel-wrapper">
            <HeaderDashboard display="d-none" />
            <PopupMobileMenu />
            <LeftpanelDashboard />

            <Portfolio />
          </div>
        </Context>
      </main>
    </>
  );
};

export default PortfolioPage;
