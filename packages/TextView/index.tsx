import React from "react";
import "./index.less";

export interface TextViewProps {
  children?: React.ReactNode;
}

const TextView = ({ children }: TextViewProps) => {
  return <div className="text-views">{children}活动环节大健康</div>;
};

export default TextView;
