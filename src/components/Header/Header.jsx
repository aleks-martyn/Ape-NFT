import { useState } from 'react';
import { ModalMenu } from 'components/ModalMenu';
import {
  StyledHeader,
  StyledContainer,
  Wrap,
  InnerWrap,
  LinkList,
  BtnLabel,
  LogoLink,
  SocialLink,
  MenuBtn,
} from './Header.styled';
import { LogoIcon } from 'components/LogoIcon';
import { TwitterIcon } from 'components/TwitterIcon';
import { LogomarkIcon } from 'components/LogomarkIcon';
import { DiscordIcon } from 'components/DiscordIcon';

export const Header = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  return (
    <StyledHeader>
      <StyledContainer>
        <Wrap>
          <LogoLink href="../../../public/index.html">
            <LogoIcon />
          </LogoLink>

          <InnerWrap>
            <MenuBtn
              type="button"
              isShowModal={isShowModal}
              onClick={() => setIsShowModal(true)}
            >
              <BtnLabel>MENU</BtnLabel>
            </MenuBtn>

            <LinkList>
              <li>
                <SocialLink
                  href="https://discord.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <DiscordIcon />
                </SocialLink>
              </li>

              <li>
                <SocialLink
                  href="https://logomark.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <LogomarkIcon />
                </SocialLink>
              </li>

              <li>
                <SocialLink
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <TwitterIcon />
                </SocialLink>
              </li>
            </LinkList>
          </InnerWrap>
        </Wrap>
      </StyledContainer>

      {isShowModal && <ModalMenu onClose={() => setIsShowModal(false)} />}
    </StyledHeader>
  );
};
