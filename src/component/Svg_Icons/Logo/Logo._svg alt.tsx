
import { withClickedType } from "../../../types/clicked.types";

import { LogoSVG } from "../Svg.styles";
import { useNavigate } from "react-router-dom";
import { FC } from "react";

const LogoSVGAlt: FC<withClickedType> = ({ clicked }) => {

    const navigate = useNavigate();


    function handleOnClick(){

        navigate("/home");

    }

    return(

        <LogoSVG onClick={clicked? clicked : () => handleOnClick() } width="109" height="95" viewBox="0 0 109 95" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_405_2866)">
                <rect x="4" width="78" height="18" fill="#005377"/>
            </g>
            <g filter="url(#filter1_d_405_2866)">
                <rect x="33" y="18" width="20" height="51" fill="#005377"/>
            </g>
            <g filter="url(#filter2_i_405_2866)">
                <ellipse cx="82.0417" cy="54" rx="26.0417" ry="25" fill="#005377"/>
            </g>
            <g filter="url(#filter3_d_405_2866)">
                <path d="M53 65.333C53 77.2993 41.6752 87 28.2708 87C14.8664 87 5.5 77.2993 5.5 65.333C18.5 56.5 14.8664 69.9815 28.2708 69.9815C41.6752 69.9815 53 53.3666 53 65.333Z" fill="#052F5F"/>
            </g>
            <circle cx="82" cy="54" r="10" fill="#FDFDFF"/>

            <defs>
                <filter id="filter0_d_405_2866" x="0" y="0" width="86" height="26" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_405_2866"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_405_2866" result="shape"/>
                </filter>
                <filter id="filter1_d_405_2866" x="29" y="18" width="28" height="59" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_405_2866"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_405_2866" result="shape"/>
                </filter>
                <filter id="filter2_i_405_2866" x="56" y="29" width="52.0835" height="54" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_405_2866"/>
                </filter>
                <filter id="filter3_d_405_2866" x="1.5" y="61" width="55.5" height="34" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_405_2866"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_405_2866" result="shape"/>
                </filter>
            </defs>

        </LogoSVG>


    )

}

export default LogoSVGAlt;

