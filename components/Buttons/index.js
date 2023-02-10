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