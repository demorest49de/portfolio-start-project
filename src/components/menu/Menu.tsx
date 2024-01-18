import styled from "styled-components";
import theme from "../../styles/Theme.Styled";

export const Menu = (props: { menuItems: string[] }) => {
    return (
        <ul>
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
        </ul>
    )
}

const Link = styled.a`
color: transparent;
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
