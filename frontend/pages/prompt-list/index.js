import React from "react";
import PageHead from "../Head";
import Context from "@/context/Context";
import HeaderDashboard from "@/components/Header/HeaderDashboard";
import PopupMobileMenu from "@/components/Header/PopupMobileMenu";
import LeftpanelDashboard from "@/components/Common/LeftpanelDashboard";
import PromptList from "@/components/PromptList/PromptList";


const TermsPolicyPage = () => {
  return (
    <>
      <PageHead title="Prompt List" />

      <main className="page-wrapper rbt-dashboard-page">
        <Context>
          <div className="rbt-panel-wrapper">
            <HeaderDashboard display="d-none" />
            <PopupMobileMenu />
            <LeftpanelDashboard />

            <PromptList />
          </div>
        </Context>
      </main>
    </>
  );
};

export default TermsPolicyPage;
