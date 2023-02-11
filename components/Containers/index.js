import styled from "styled-components";



export const HeroContent = styled.div`
display: inline-flex;
align-items: center;
vertical-align: top;
`


export const ContainerTriangles = styled.div`
background-color: white;
box-shadow: 0 0 5px 10px white;
width: 100%;
`

export const NavContainer = styled.div`
   @media (max-width: 412px) {
	display: flex;
	align-items: center;
    justify-content: center;
  }

`

export const BackgroundTriangle = styled.div`
	height:100%;
	position: fixed;
	opacity: 0.1;
	width: 100%;
`

export const BackgroundNoodle = styled.div`
	height:100%;
	position: fixed;
	opacity: ${({ isFocused }) => isFocused ? 1 : 0.2};
	width: 100%;
`


export const TilesContainer = styled.div`
	align-items: center;
	justify-content: center;
	width: 100%;
	max-width: 1200px;
	display: flex;
	direction: row;
	flex-wrap: wrap;
`

export const tilesItemWidth = '330px';

export const tilesItemsPadding__mobile = 24;		// padding between tiles (mobile)
export const tilesItemsPadding__desktop = null;		// padding between tiles (desktop)
export const tilesItemInnerPadding_v = '32px';		// tile item, inner top and bottom padding
export const tilesItemInnerPadding_h = '24px';

export const SingleTile = styled.div`
flex-basis: ${tilesItemWidth};
max-width: ${tilesItemWidth};
box-sizing: content-box;
padding: ${tilesItemsPadding__mobile * 0.5}px;

* {
    box-sizing: border-box;
}
`

export const TileContent = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 300px;
max-height: 300px;
`

export const TileHeader = styled.div`
font-size: 25px;
text-align: center;
`

export const FeaturesTilesItemImage = styled.div`
    width: 70px;
    height: 70px;
	display: inline-flex;
	border-radius: 50%;
	box-shadow: inset 0 0 5px black;
	filter: drop-shadow(5px 2px 3px rgb(0 0 0 / 0.4));
	background: white;
`

export const OverlappingImageContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`