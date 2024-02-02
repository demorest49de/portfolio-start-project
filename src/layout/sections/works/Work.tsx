import styled from "styled-components";
import theme from "../../../styles/Theme.Styled";
import {Link} from "../../../components/link/Link";
import {Button} from "../../../components/button/Button";
import {AnimatePresence, motion} from "framer-motion";


type WorkPropsType = {
    title: string,
    text: string,
    src: string,
    id: number,
}

export const Work = (props: WorkPropsType) => {

    return (
        <AnimatePresence>
            <StyledWork
                layout={true}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key={props.id}
            >

                <ImageWrapper>
                    <Image src={props.src} alt=""/>
                    <Button>view project</Button>
                </ImageWrapper>

                <StyledAboutSubblock>
                    <Title>{props.title}</Title>
                    <Text>{props.text}</Text>
                    <LinkList>
                        <ListItem>
                            <Link href={'#'}>demo</Link>
                        </ListItem>
                        <ListItem>
                            <Link href={'#'}>code</Link>
                        </ListItem>
                    </LinkList>
                </StyledAboutSubblock>

            </StyledWork>
        </AnimatePresence>
    );
};

const StyledWork = styled(motion.div)`
  max-width: 540px;
  width: 300px;
  flex-grow: 1;
  max-height: fit-content;
  background-color: ${theme.backgroundColor.secondary};
  position: relative;

  @media ${theme.media.mobile689px} {
    width: 100%;
  }

  @media ${theme.media.mobile349px} {
    width: unset;
  }
`

const Image = styled.img`
  width: 100%;
  height: inherit;
  object-fit: cover;
  object-position: left center;
`

// div dlja dobablenija blur effecta
const ImageWrapper = styled.div`
  position: relative;
  height: 260px;
  margin-bottom: 25px;

  // before rastyagivaetsya na ves div s kartinkoy
  // i dobavlyaetsya blur s transition  i opacity 0 (0 - nachanl'noe sostoyanie)
  &::before {
    position: absolute;
    content: '';
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(4px);
    opacity: 0;
    transition: all 1s ease-in-out;
  }

  ${Button} {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding-bottom: 0;

    opacity: 0;
    height: 43px;
    transition: opacity 1s ease-in-out;

    &:before {
      width: 100%;
      height: 100%;
      z-index: -1;
    }
  }

  &:hover {
    &::before {
      opacity: 1;
    }

    ${Button} {
      opacity: 1;
    }
  }

  &:not(:hover) {
    &::before {
      opacity: 0;
      transition: 1.5s ease-in-out;
    }

    ${Button} {
      opacity: 0;
      transition: 1.5s ease-in-out;
    }
  }
`

const Title = styled.h3`
  margin-bottom: 14px;
`

const Text = styled.p`
  margin-bottom: 19px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`

const StyledAboutSubblock = styled.div`
  padding: 0 20px 30px 20px;
`

const LinkList = styled.ul`
  display: flex;
  gap: 20px;
`

const ListItem = styled.li`
  position: relative;
  padding: 0 2px;
  z-index: 1;
`