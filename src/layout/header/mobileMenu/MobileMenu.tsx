import styled, {css} from "styled-components";
import theme from "../../../styles/Theme.Styled";

export const MobileMenu = (props: { menuItems: string[] }) => {
    return (

        <StyledNavigation>
            <MobileMenuPopup isOpen={false}>
                <StyledListNavigation>
                    {
                        props.menuItems.map((item, index) => {
                            return (
                                <ListItem key={index}>
                                    <Link href={`#${item}`} aria-label={item}>
                                        {item}
                                        <Mask>
                                            {item}
                                        </Mask>
                                        <Mask>
                                    <span>
                                        {item}
                                    </span>
                                        </Mask>
                                    </Link>
                                </ListItem>
                            )
                        })
                    }
                </StyledListNavigation>
            </MobileMenuPopup>
        </StyledNavigation>
    )
}

const StyledNavigation = styled.nav`
  display: none;
  padding: 0;
  width: 0;
  height: 0;

  @media ${theme.media.tablet} {
    display: block;
  }
`

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background-color: rgba(31, 31, 32, 0.9);

  display: none;

  // propisivaem chto budet pri otkritii popupa
  ${props => props.isOpen && css<{ isOpen: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  `}
`

const StyledListNavigation = styled.ul`

  display: flex;
  gap: 20px;
  align-items: center;
  flex-direction: column;

`

const Mask = styled.span`
  color: ${theme.colors.accent};
  position: absolute;
  top: 0;
  left: 0;
  height: 50%;
  overflow-y: hidden;

  & + & {
    top: 50%;

    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`

const ListItem = styled.li`
  position: relative;
  color: ${theme.colors.accent};
  font-family: Josefin Sans;
  font-size: 35px;
  font-weight: 400;
  line-height: 55px;

  &::before {
    content: "";
    display: inline-block;
    height: 4px;
    background-color: ${theme.colors.accent};

    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 3;
    transform: scale(0);
  }


  &:hover {
    &::before {
      transition: all .3s ease-in-out;
      transform: scale(1);
    }

    ${Mask} {

      transition: all .3s ease-in-out;
      transform: skewX(12deg) translateX(5px);
      color: ${theme.colors.white};

      & + ${Mask} {
        transform: skewX(12deg) translateX(-5px);
      }
    }

  }

`

const Link = styled.a`
  color: transparent;
`