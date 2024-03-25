import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { LogoIcon } from 'components/LogoIcon';
import { TwitterIcon } from 'components/TwitterIcon';
import { LogomarkIcon } from 'components/LogomarkIcon';
import { DiscordIcon } from 'components/DiscordIcon';
import {
  ModalWin,
  StyledContainer,
  Wrap,
  LogoLink,
  BtnLabel,
  CloseBtn,
  SocialLink,
  InnerWrap,
  LinkList,
  MenuLinkList,
  MenuListItem,
  MenuLink,
  LinkName,
  StyledNav,
  LowerText,
} from './ModalMenu.styled';

const modalRoot = document.getElementById('modal-root');
const sectionNames = ['about', 'm-map', 'faq', 'arts', 'mint'];

export const ModalMenu = ({ onClose }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') onClose();
    };

    document.body.classList.add('no-scroll');

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);

      document.body.classList.remove('no-scroll');
    };
  }, [onClose]);

  return createPortal(
    <ModalWin>
      <StyledContainer>
        <Wrap>
          <LogoLink href="../../index.js">
            <LogoIcon />
          </LogoLink>

          <InnerWrap>
            <CloseBtn type="button" onClick={() => onClose()}>
              <BtnLabel>CLOSE</BtnLabel>
            </CloseBtn>

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

        <StyledNav>
          <MenuLinkList>
            {sectionNames.map((name, index) => (
              <MenuListItem key={index}>
                <MenuLink href={'#' + name} onClick={() => onClose()}>
                  <LinkName>{name}</LinkName>
                </MenuLink>
              </MenuListItem>
            ))}
          </MenuLinkList>
        </StyledNav>

        <LowerText>© Yacht ape 2024 all rights reserved</LowerText>
      </StyledContainer>
    </ModalWin>,
    modalRoot
  );
};
