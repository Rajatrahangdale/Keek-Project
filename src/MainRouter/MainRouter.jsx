import React from "react";
import { Route, Routes } from "react-router-dom";
import AddCampaign from "../Manage/CampaignManagement/AddCampaign/AddCampaign";
import LiveCampaign from "../Manage/CampaignManagement/LiveCampaign/LiveCampaign";
import PastCampaign from "../Manage/CampaignManagement/PastCampaign/PastCampaign";
import DraftCampaign from "../Manage/CampaignManagement/DraftCampaign/DraftCampaign";
import ManageCampaign from "../Manage/CampaignManagement/ManageCampaign/ManageCampaign";
import ShortlistedPage from "../Manage/CampaignManagement/ManageCampaign/ManageCampaignPages/ShortlistedPage";
import ApprovedPage from "../Manage/CampaignManagement/ManageCampaign/ManageCampaignPages/ApprovedPage";
import RejectedPage from "../Manage/CampaignManagement/ManageCampaign/ManageCampaignPages/RejectedPage";
import AIRecommendPage from "../Manage/CampaignManagement/ManageCampaign/ManageCampaignPages/AIRecommendPage";
import Influencers from "../Manage/DiscoverInfluencers/Influencers";
import SavedList from "../Manage/DiscoverInfluencers/SavedList";
import SavedListCards from "../Manage/DiscoverInfluencers/SavedListCards";

const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div className="h-screen w-screen flex items-center justify-center bg-slate-400">
              {" "}
              Dashboard
            </div>
          }
        />

        <Route path="/discoverInfluencers" element={<Influencers />} />
        <Route path="/CampaignManagement" element={<LiveCampaign />} />

        <Route
          path="/payments"
          element={
            <div className="h-screen w-screen flex items-center justify-center bg-slate-400">
              {" "}
              Payments
            </div>
          }
        />
        <Route
          path="/Analytics"
          element={
            <div className="h-screen w-screen flex items-center justify-center bg-slate-400">
              {" "}
              Analytics
            </div>
          }
        />

        <Route path="/manageCampaign" element={<ManageCampaign />} />

        <Route path="/Shortlisted" element={<ShortlistedPage />} />

        <Route path="/Approved" element={<ApprovedPage />} />
        <Route path="/Rejected" element={<RejectedPage />} />

        <Route path="/AIRecommended" element={<AIRecommendPage />} />

        <Route
          path="/influencersBase"
          element={
            <div className="h-screen w-screen flex items-center justify-center bg-slate-400">
              {" "}
              influencersBase
            </div>
          }
        />
        <Route
          path="/settings"
          element={
            <div className="h-screen w-screen flex items-center justify-center bg-slate-400">
              {" "}
              Settings
            </div>
          }
        />
        <Route
          path="/Support"
          element={
            <div className="h-screen w-screen flex items-center justify-center bg-slate-400">
              {" "}
              Support
            </div>
          }
        />

        <Route path="/AddCampaign" element={<AddCampaign />} />

        <Route path="/PastCampaign" element={<PastCampaign />} />
        <Route path="/DraftCampaign" element={<DraftCampaign />} />
        <Route path="/savedlist" element={<SavedList/>} />
        <Route path="/savedlist/:name" element={<SavedListCards/>} />
      </Routes>
    </>
  );
};

export default MainRouter;
