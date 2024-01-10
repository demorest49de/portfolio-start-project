import styled from "styled-components";

export const MenuNavigation = () => {
    return(
        <SMenuNavigation>
            <ul>
                <li><a href="#" aria-label={"Home"}>Home</a></li>
                <li><a href="#" aria-label={"Skills"}>Skills</a></li>
                <li><a href="#" aria-label={"Works"}>Works</a></li>
                <li><a href="#" aria-label={"Testimony"}>Testimony</a></li>
                <li><a href="#" aria-label={"Contact"}>Contact</a></li>
            </ul>
        </SMenuNavigation>
    )
}

const SMenuNavigation = styled.nav`
  display: flex;
  justify-content: center;
  padding: 354px 0;
  ul{
    max-width: 225px;
    height: 320px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  li {
    color: #7572D5;
    font-family: Josefin Sans;
    font-size: 50px;
    font-weight: 400;
    line-height: 55px;
  }
`