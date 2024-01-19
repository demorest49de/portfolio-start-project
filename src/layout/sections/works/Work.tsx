import styled from "styled-components";
import FlexWrapper from "../../../components/flexWrapper/FlexWrapper";
import theme from "../../../styles/Theme.Styled";


type WorkPropsType = {
    title: string,
    text: string,
    src: string,
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWorkCards>
            <ImageWrapper>
                <Image src={props.src} alt=""/>
                <Button>view project</Button>
            </ImageWrapper>
            <StyledAboutSubblock>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                <FlexWrapper gap={'20px'}>
                    <Link href={'#'}>demo</Link>
                    <Link href={'#'}>code</Link>
                </FlexWrapper>
            </StyledAboutSubblock>
        </StyledWorkCards>
    );
};

const Button = styled.button`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  width: 170px;
  height: 32px;
  
  &:hover{
    &::before{
      height: 100%;
      width: 100%;
    }
  }

  &:before {
    content: "";
    display: inline-block;
    height: 10px;
    width: 50%;
    background-color: ${theme.colors.accent};

    position: absolute;
    bottom: 0;
    left: 50%;
    z-index: -1;
    transform: translateX(-50%);
  }
`


const ImageWrapper = styled.div`
  position: relative;
  max-height: 260px;
  margin-bottom: 25px;

  //todo как работает стилизация одной кнопки для всех
  &:hover {
    &::before {
      position: absolute;
      content: '';
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;

      //todo ne rabotaet transition
      transition: all .3s ease-in-out;
      background-color: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(4px);
    }

    ${Button} {
      opacity: 1;
    }
  }
  ${Button} {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    &:before {
      width: 100%;
      height: 100%;
    }
  }
`

const StyledWorkCards = styled.div`
  max-width: 540px;
  width: 100%;
  max-height: fit-content;
  background-color: ${theme.backgroundColor.secondary};
`

const Image = styled.img`
  max-width: 540px;
  width: 100%;
  max-height: inherit;
  object-fit: cover;
  object-position: left center;
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

const Link = styled.a`
  text-transform: uppercase;
`

const StyledAboutSubblock = styled.div`
  padding: 0 20px 30px 20px;
`