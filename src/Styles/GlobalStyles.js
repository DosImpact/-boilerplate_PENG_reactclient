import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset};

    *{
        box-sizing: border-box;
    }
    body{
        background-color:${(props) => props.theme.bgColor};
        color: ${(props) => props.theme.blackColor};
        font-size:14px;
        font-family: 'Nanum Gothic', sans-serif;
        padding-top: 140px;
    }
    a {
        color:${(props) => props.theme.blackColor};
        text-decoration:none;
    }
    input:focus{
        outline:none;
    }

    .title01{
        font-size: 18px;
        font-weight:800;
    }
    .title02{
        font-size: 16px;
        font-weight:700;
    }
    .title03{
        font-size: 16px;
        font-weight:400;
    }
    .title04{
        font-size: 14px;
        font-weight:400;
        color: rgb(153, 153, 153);
    }
`;
