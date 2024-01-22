import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/container/Container";
import theme from "../../../styles/Theme.Styled";
import FlexWrapper from "../../../components/flexWrapper/FlexWrapper";
import SectionTitle from '../../../components/headers/SectionHeader';
import {StyledSection} from "../../../components/section/Section";
import {Work} from "./Work";
import timer from './../../../assets/images/0c92c8a2d9105549989393fee63d52d5.png'
import socialImg from './../../../assets/images/0f6c9eae25a0122b383d52e1e9a7182e.png'
import { HeaderPropsType } from '../../../components/types/types';
import {TabMenu} from "./TabMenu";

const items = ["All", "landing page", "React", "spa"];

export const Works = (props: HeaderPropsType) => {
    return (
        <StyledSection
            id={props.headerName}
        >
            <Container>
                <SectionTitle text={`My ${props.headerName}`} mb={"69px"}/>
                <FlexWrapper wrap={'wrap'} justify={'center'} minHeight={'30px'}>
                    <StyledWorkNav>
                        <TabMenu menuItems={items}/>
                    </StyledWorkNav>
                    <FlexWrapper wrap={'wrap'} gap={'60px'} justify={'center'}>
                        <Work title={'Social Network'}
                              src={socialImg}
                              text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cupiditate doloribus, ea eaque eius eum facere fugit laboriosam magni molestiae nemo nostrum quaerat quam quos recusandae reprehenderit sit tempore! Ullam.'}
                        />
                        <Work title={'Timer'}
                              src={timer}
                              text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid atque autem consectetur cumque dolorem eaque fuga fugit iure magni nemo, nihil odio officia optio quas quis ratione soluta, sunt ullam?'}
                        />
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


  @media ${theme.media.tablet}{
    margin-bottom: 25px;
  }
`