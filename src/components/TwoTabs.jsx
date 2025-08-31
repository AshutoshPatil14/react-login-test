import React, { useState } from "react";

const TwoTabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div>
      {/* Tabs */}
      <div style={{ display: "flex", border: "1px solid #ccc", borderRadius: "8px", overflow: "hidden", width: "fit-content" }}>
        <button
          style={{
            padding: "10px 20px",
            cursor: "pointer",
            border: "none",
            backgroundColor: activeTab === "tab1" ? "#007bff" : "#f0f0f0",
            color: activeTab === "tab1" ? "white" : "black",
            fontWeight: activeTab === "tab1" ? "bold" : "normal",
          }}
          onClick={() => setActiveTab("tab1")}
        >
          Tab 1
        </button>
        <button
          style={{
            padding: "10px 20px",
            cursor: "pointer",
            border: "none",
            backgroundColor: activeTab === "tab2" ? "#007bff" : "#f0f0f0",
            color: activeTab === "tab2" ? "white" : "black",
            fontWeight: activeTab === "tab2" ? "bold" : "normal",
          }}
          onClick={() => setActiveTab("tab2")}
        >
          Tab 2
        </button>
      </div>

      {/* Content */}
      <div style={{ marginTop: "20px" }}>
        {activeTab === "tab1" && <p>This is the content of Tab 1.</p>}
        {activeTab === "tab2" && <p>This is the content of Tab 2.</p>}
      </div>
    </div>
  );
};

export default TwoTabs;
