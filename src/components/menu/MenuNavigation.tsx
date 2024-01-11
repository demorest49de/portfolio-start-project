import styled from "styled-components";
import myTheme from "../../styles/Theme.Styled";

export const MenuNavigation = (props: { menuItems: Array<string> }) => {
    return (
        <SMenuNavigation>
            <ul>
                {
                    props.menuItems.map((item, index) => {
                        return <li key={index}>
                            <a href="#" aria-label={item}>{item}
                            </a></li>
                    })
                }
            </ul>
        </SMenuNavigation>
    )
}

const SMenuNavigation = styled.nav`
  display: flex;
  justify-content: center;
  padding: 354px 0;

  ul {
    max-width: 225px;
    height: 320px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  li {
    color: ${myTheme.header.menuNav.color};
    font-family: Josefin Sans;
    font-size: 50px;
    font-weight: 400;
    line-height: 55px;
  }
`