import { FunctionComponent } from "react";

interface TemplateProps {
  children: React.ReactNode
}
 
const Template: FunctionComponent<TemplateProps> = ({ children }) => {
  return (<div>Template

    <div>{children}</div>
  </div>);
}
 
export default Template;