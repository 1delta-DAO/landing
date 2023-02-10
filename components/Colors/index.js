// Colors

// The color palette
const palette = {
    bright: {
        1: '#ADBCFF',
        2: '#DEE1FF',
        3: '#EDEFF8',
        4: '#F9ECF1',
        5: '#1267D6',
        6: '#4C82FB',
        7: '#869EFF',
    },
    light: {
        1: '#040E34',
        2: '#0B193F',
        3: '#09265E',
        4: '#2e095e'
    },
    dark: {
        1: '#151719',
        2: '#25282C',
        3: '#33363A',
        4: 'linear-gradient(to bottom, red, blue)'
    },
    primary: {
        1: '#C41969',
        2: '#8C0F49',
        3: '#55072A',
        4: '#350318',
        5: '#2B000B'
    },
    secondary: {
        1: '#F9ECF1',
        2: '#FFD9E4',
        3: '#8C0F49',
        4: '#FF6FA3',
    },
    alert: {
        error: '#FF6171',
        warning: '#FFA173',
        success: '#24E5AF'
    }
}


// Base typography: color
export const generalColors = {
    heading: palette.light[1],
    base: palette.light[2],
    highContrast: palette.light[1],
    midContrast: palette.light[2],
    lowContrast: palette.light[3],
    primary: palette.primary[3],
    primaryLight: palette.primary[1],
    brightPrimary: palette.bright[1],
    brightSecondary: palette.bright[2],
    brightAvg: palette.bright[4],
    transition: palette.dark[4],
    secondary: palette.secondary[1],
    secondaryIntense: palette.secondary[3],
    brightIntense: palette.primary[1],
    error: palette.alert['error'],
    warning: palette.alert['warning'],
    success: palette.alert['success'],
    // ↓ Inverted colors
    headingInverse: palette.dark[1],
    baseInverse: palette.light[3],
    baseIntense: palette.light[4],
    baseLight: palette.light[1],
    highContrastInverse: palette.dark[1],
    midContrastInverse: palette.dark[2],
    lowContrastInverse: palette.light[3],
    ctaColor: palette.primary[3],
    brightSep: palette.bright[5],
}

// Borders and dividers: color
export const borderColor = {
    divider: palette.dark[2],
    dividerInverse: palette.light[1]
};

// Icons: fill color
export const iconColor = {
    hamburger: palette.bright[2],			// hamburger icon
    accordion: palette.primary[1],			// accordion icon
    social: palette.primary[1],			// social icons
    socialHover: palette.primary[2],			// social icons (:palette.hover)
    modal: palette.light[3],			// modal icon
    modalHover: palette.light[2],			// modal icon (:palette.hover)
    newsMore: palette.primary[2],		// news - read more link arrow    
    // ↓ Inverted colors
    hamburgerInverse: palette.dark[2],				// hamburger icon
    accordionInverse: palette.primary[1],			// accordion icon
    socialInverse: null,							// social icons
    socialHoverInverse: null							// social icons (:hover)
};

// Misc elements: background color
export const bgColor = {
    body: 'radial-gradient(circle at 10 % 10 %, #ADBCFF, #DEE1FF, #EDEFF8, #F9ECF1, #FFD9E4, #FBA4C0, #FF6FA3, #cc54ad, #C41969, #8C0F49)',
    bodyShadow: `0 20px 48px rgba(${palette.dark[1]}), .8)`,	// body shadow when a boxed layout is used (set to null if don`t want a shadow)
    bodyOuter: `lighten(${palette.dark[1]}), 2%)`,			// outer bg color when a boxed layout is used
    bgColor: `lighten(${palette.light[1]}), 9%)`,			// .has-bg-color helper class
    shadow: `0 24px 64px rgba(${palette.dark[1]}), .64)`,	// .has-shadow helper class
    code: `darken(${palette.dark[1]}), 3%)`,
    codeInverse: `darken(${palette.dark[1]}), 3%)`,
    checkCheckedInverse: `darken(${palette.dark[1]}), 3%)`
};


// Buttons: text color
export const buttonColor = {
    buttonLight: palette.dark[2],
    buttonDark: palette.light[1],
    buttonPrimary: palette.light[1],
    buttonBright: palette.bright[3],
    buttonSecondary: palette.light[1],
    buttonDisabled: palette.dark[3]
};

// Buttons: background color
export const buttonBg = {
    buttonLight: palette.light[1],
    buttonLightHover: `darken(${palette.light[1]}, 5%)`,
    buttonDark: palette.dark[2],
    buttonDarkHover: `lighten(${palette.dark[2]}, 2%)`,
    buttonPrimary: '#1D4294',
    buttonPrimaryHover: `lighten(${palette.primary[1]}, 2%)`,
    buttonSecondary: palette.secondary[1],
    buttonSecondaryHover: `lighten(${palette.secondary[1]}, 2%)`,
    buttonDisabled: palette.light[3]
};