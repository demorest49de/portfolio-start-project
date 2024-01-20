import React from 'react';
import {Container} from "../../components/container/Container";
import styled from "styled-components";
import SectionHeader from "../../components/headers/SectionHeader";
import {StyledParagraph} from "../../components/paragraph";
import FlexWrapper, {FlexWrapperPropsType} from "../../components/flexWrapper/FlexWrapper";
import Icon from "../../components/Icon/Icon";

export const Footer = () => {
    return (
        <StyledFooter id={'footer'}>
            <Container>
                <SectionHeader text={
                    "Svetlana"
                } mb={'26px'} fontSize={'22px'}/>
                <FlexWrapper justify={'center'}>
                    <SocialsList>
                        <ListItem>
                            <SocialLink href={"https://instagram.com"}>
                                <Icon iconId={'instagram'} width={'21'} height={'21'}/>
                            </SocialLink>
                        </ListItem>
                        <ListItem>
                            <SocialLink href={"https://telegram.org"}>
                                <Icon iconId={'telegram'} width={'21'} height={'21'}/>
                            </SocialLink>
                        </ListItem>
                        <ListItem>
                            <SocialLink href={"https://vk.com"}>
                                <Icon iconId={'vk'} width={'21'} height={'21'}/>
                            </SocialLink>
                        </ListItem>
                        <ListItem>
                            <SocialLink href={"https://linkedin.com"}>
                                <Icon iconId={'linkedin'} width={'21'} height={'21'}/>
                            </SocialLink>
                        </ListItem>
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

const ListItem = styled.li`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.10);
`

const SocialLink = styled.a`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`