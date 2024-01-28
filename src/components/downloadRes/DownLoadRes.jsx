import React from "react";
import resume from '../../Assets/resume.pdf';
 
const DownLoadRes = () => {
    const onButtonClick = () => {
        const pdfUrl = {resume};
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = {resume}; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (

     
                <a onClick={onButtonClick} >Resume</a>
            
                 
           
    );
};
 
export default DownLoadRes;