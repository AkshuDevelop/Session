import React from "react";

export default function Dashboard(props) {
  return (
    <div id="DashBoard_Container">
      <div id="Side_Panel">
        <div id="WorkSpace_Name">
          <img src="/src/assets/icon.svg" id="icon" />
          {props.Workspace_Name}
        </div>
      </div>
    </div>
  );
}
