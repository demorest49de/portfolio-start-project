import React, {useState} from 'react';
import styled from "styled-components";
import {Container} from "../../../components/container/Container";
import theme from "../../../styles/Theme.Styled";
import FlexWrapper from "../../../components/flexWrapper/FlexWrapper";
import SectionTitle from '../../../components/headers/SectionHeader';
import {StyledSection} from "../../../components/section/Section";
import {Work} from "./Work";
import timer from './../../../assets/images/0c92c8a2d9105549989393fee63d52d5.png'
import socialImg from './../../../assets/images/0f6c9eae25a0122b383d52e1e9a7182e.png'
import {HeaderPropsType} from '../../../components/types/types';
import {TabMenu} from "./TabMenu";

const tabsItems: Array<{ status: "all" | "landing" | "react" | "spa", title: string }> = [
    {
        title: "All",
        status: "all",
    },
    {
        title: "landing page",
        status: "landing",
    },
    {
        title: "React",
        status: "react",
    },
    {
        title: "spa",
        status: "spa",
    },
]

const worksData = [
    {
        title: 'Social Network',
        source: socialImg,
        text: 'Lorem2 ipsum dolor sit amet, consectetur adipisicing elit. Autem cupiditate doloribus, ea eaque eius eum facere fugit laboriosam magni molestiae nemo nostrum quaerat quam quos recusandae reprehenderit sit tempore! Ullam.',
        type: 'spa',
    },
    {
        title: 'Timer',
        source: timer,
        text: 'Lorem1 ipsum dolor sit amet, consectetur adipisicing elit. Autem cupiditate doloribus, ea eaque eius eum facere fugit laboriosam magni molestiae nemo nostrum quaerat quam quos recusandae reprehenderit sit tempore! Ullam.',
        type: 'react',
    },
]


export const Works: React.FC<HeaderPropsType> = (props: HeaderPropsType) => {

    const [currentFilterStatus, setCurrentFilterStatus] = useState('all')
    let filteredWorks;

    switch (currentFilterStatus) {
        case 'landing':
            filteredWorks = worksData.filter(x => x.type === 'landing');
            break;
        case 'react':
            filteredWorks = worksData.filter(x => x.type === 'react');
            break;
        case 'spa':
            filteredWorks = worksData.filter(x => x.type === 'spa');
            break;
        default:
            filteredWorks = worksData;
            break;
    }

    function changeFilterStatus(value: "all" | "landing" | "react" | "spa") {
        setCurrentFilterStatus(value);
    }

    return (
        <StyledSection
            id={props.headerName}>
            <Container>
                <SectionTitle text={`My ${props.headerName}`} mb={"69px"}/>
                <FlexWrapper wrap={'wrap'} justify={'center'} align={'center'} minHeight={'30px'} direction={'column'}>
                    <StyledWorkNav>
                        <TabMenu tabsItems={tabsItems} changeFilterStatus={changeFilterStatus}/>
                    </StyledWorkNav>
                    <FlexWrapper wrap={'wrap'} gap={'60px'} justify={'center'}>
                        {filteredWorks.map((v, i) => {
                            return <Work key={i} title={v.title}
                                         src={v.source}
                                         text={v.text}
                            />
                        })}

                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </StyledSection>
    );
};


const StyledWorkNav = styled.nav`

  display: flex;
  align-items: center;
  margin-bottom: 50px;
  color: ${theme.colors.accent};


  @media ${theme.media.tablet} {
    margin-bottom: 25px;
  }
`