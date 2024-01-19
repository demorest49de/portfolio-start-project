import React from 'react';
import {Container} from "../../components/container/Container";
import styled from "styled-components";
import SectionHeader from "../../components/headers/SectionHeader";
import {StyledParagraph} from "../../components/paragraph";
import FlexWrapper, {FlexWrapperPropsType} from "../../components/flexWrapper/FlexWrapper";
import Icon from "../../components/Icon/Icon";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <SectionHeader text={
                    "Svetlana"
                } mb={'26px'} fontSize={'22px'}/>
                <FlexWrapper justify={'center'}>
                    <SocialsList>
                        <SocialLink>
                            <Icon iconId={'instagram'} width={'21'} height={'21'}/>
                        </SocialLink>
                        <SocialLink>
                            <Icon iconId={'telegram'} width={'21'} height={'21'}/>
                        </SocialLink>
                        <SocialLink>
                            <Icon iconId={'vk'} width={'21'} height={'21'}/>
                        </SocialLink>
                        <SocialLink>
                            <Icon iconId={'linkedin'} width={'21'} height={'21'}/>
                        </SocialLink>
                    </SocialsList>
                </FlexWrapper>
                <StyledParagraph
                    fontSize={'12px'}
                    fontWeight={'400'}
                    color={'rgba(255, 255, 255, 0.50)'}
                >
                    © 2023 Svetlana Dyablo, All Rights Reserved.
                </StyledParagraph>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  padding: 40px 0;
`

const SocialsList = styled.ul<FlexWrapperPropsType>`
  margin-bottom: 25px;
  text-align: center;
  max-width: fit-content;
  display: flex;
  flex-direction: row;
  gap: 20px;
`

const SocialLink = styled.li`
  width: 35px;
  height: 35px;
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.10);
  display: flex;
  justify-content: center;
  align-items: center;
`