import { FunctionComponent } from "react";

interface TemplateProps {
  
}
 
const Template: FunctionComponent<TemplateProps> = ({ children }) => {
  return (<div>Template

    <div>{children}</div>
  </div>);
}
 
export default Template;