import styled from "styled-components";


type WorkPropsType = {
    title: string,
    text: string,
    src: string,
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWorkCards>
            <Image src={props.src} alt=""/>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <Link href={'#'}></Link>
            <Link href={'#'}></Link>
        </StyledWorkCards>
    );
};

const StyledWorkCards = styled.div`
    max-width: 540px;
    max-height: 433px;
`

const Image = styled.img`

`

const Title = styled.h3`

`

const Text = styled.p`

`

const Link = styled.a`

`