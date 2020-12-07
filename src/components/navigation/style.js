import styled from "styled-components";

export const NavBarDiv = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  font-family: Sans-Serif;
  padding: 20px 20vw 20px 20vw;
  overflow: hidden;
`;
//Left side of Nav Bar
export const LeftNavBarDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LogoButton = styled.a`
  font-style: normal;
  font-weight: 800;
  font-size: 25px;
  padding: 0px 20px 0px 0px;
  /* identical to box height */
  letter-spacing: 0.3px;
  color: #175596;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: #2071c7;
  }
  &:active {
    transform: scale(0.97);
    transition: 0.1s;
  }
`;

export const SearchBar = styled.input.attrs({
  placeholder: "Search",
})`
  width: 30vw;
  height: 38px;
  padding: 0 30px 0 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 100px;
  background: #eee;
  font-size: 15px;
  &::placeholder {
    color: #999;
  }
  &:focus {
    //width: 40vh;
    //transition-duration: 0.5s;
    //position: fixed;
  }
`;
//Right side of Nav Bar
export const RightNavBarDiv = styled.div`
  display: flex;
  margin-left: auto;
`;

export const AppTrackBtn = styled.a`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  text-decoration: none;
  min-width: 70px;
  margin: 6px 0vw 0px 2vw;
  color: #175596;
  cursor: pointer;
  &:hover {
    color: #2071c7;
  }
  &:active {
    transform: scale(0.97);
    transition: 0.1s;
  }
`;