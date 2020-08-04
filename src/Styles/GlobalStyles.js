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
        font-family: 'Noto Sans KR', sans-serif;
        padding-top: 140px;
    }
    a {
        color:${(props) => props.theme.blackColor};
        text-decoration:none;
    }
    input:focus{
        outline:none;
    }

    .box{
        border:1px solid #e6e6e6;
    }
    .circleBox{
        border:1px solid #e6e6e6;
        border-radius:4px;
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
        letter-spacing: -1px;
    }
    .title04{
        font-size: 14px;
        font-weight:400;
        color: rgb(153, 153, 153);
    }
    .title05{
        font-size: 14px;
        font-weight:400;
        opacity:0.4;
    }

    .blue{
        color:#3C82FF;
    }
`;
