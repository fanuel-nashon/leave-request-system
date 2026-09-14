import React from "react";
import { IconCalendarTime, IconSend } from "@tabler/icons-react";

function Icons({ type, size = 22, color = "text-blue-600", className = "" }){
  const iconProps={size, className:color};

  switch(type){
    case "calendar":
      return(
        <div className={`w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center ${className}`}>
          <IconCalendarTime {...iconProps} />
        </div>
      );
    case "send":
      return (
         <div className={`w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center ${className}`}>
          <IconSend {...iconProps} />
        </div>
      );
    default:
      return null;
  }
}

export default Icons;
