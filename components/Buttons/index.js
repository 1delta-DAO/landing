import styled from "styled-components";
import { borderColor, buttonColor, generalColors } from "../Colors";


export const ButtonLight = styled.button`
	border-radius: 24px;
	color: ${buttonColor.buttonBright};
    background-color: ${buttonColor.buttonPrimary};
	border-color: ${borderColor.dividerInverse};

    &:hover {
        background-color: ${generalColors.brightIntense};
		border-color: ${borderColor.dividerInverse};
		cursor: pointer;
		border-color: white;
    }

`


export const ButtonWhite = styled.button`
	border-radius: 24px;
	font-weight: bold;
	font-size: 40px;
	text-color:${generalColors.primaryLight}
	background: white;
	stroke: white;
	border: none;
	box-shadow: inset 0 0 10px black;
	filter: drop-shadow(2px 5px 3px rgb(0 0 0 / 0.4));
    &:hover {
		filter: drop-shadow(5px 7px 3px rgb(0 0 0 / 0.4));
		box-shadow: inset 0 0 40px skyblue;
		cursor: pointer;
    }

`


export const ButtonLightTop = styled.button`
	border-radius: 24px;
	color: ${buttonColor.buttonBright};
    background-color: ${buttonColor.buttonPrimary};
	border-color: ${borderColor.dividerInverse};

    &:hover {
        background-color: ${generalColors.brightIntense};
		border-color: ${borderColor.dividerInverse};
		cursor: pointer;
		border-color: white;
    }

`


export const ButtonLightLink = styled.a`
	border-radius: 24px;
	width: 300px;
	color: ${buttonColor.buttonBright};
    background-color: ${buttonColor.buttonPrimary};
	border-color: ${borderColor.dividerInverse};

    &:hover {
        background-color: ${buttonColor.buttonPrimaryHover};
		border-color: ${borderColor.dividerInverse};
		cursor: pointer;
		border: none;
    }

	&.is-loading {
		&::after {
			border-color: ${borderColor.dividerInverse};
		}
	}`


export const ButtonBright = styled.button`
	
	border-radius: 24px;
	color: color(button-bright);
    background-color: ${buttonColor.buttonPrimary};
	border-color: ${buttonColor.buttonPrimary};

    &:hover {
        background-color: ${buttonColor.buttonPrimaryHover};
		border-color: ${buttonColor.buttonPrimaryHover};
		cursor: pointer;
		border: none;
    }

	&.is-loading {

		&::after {
			border-color: color(button-primary);
		}
	}
	`