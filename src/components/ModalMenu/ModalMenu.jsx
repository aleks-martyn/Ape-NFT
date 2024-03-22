import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { LogoIcon } from 'components/LogoIcon';
import { TwitterIcon } from 'components/TwitterIcon';
import { LogomarkIcon } from 'components/LogomarkIcon';
import { DiscordIcon } from 'components/DiscordIcon';
import {
  ModalWin,
  Wrap,
  LogoLink,
  BtnLabel,
  CloseBtn,
  SocialLink,
  InnerWrap,
  LinkList,
  MenuLinkList,
  MenuLink,
  LinkName,
  StyledNav,
  LowerText,
} from './ModalMenu.styled';

const modalRoot = document.getElementById('modal-root');

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
          <li>
            <MenuLink href="#about" onClick={() => onClose()}>
              <LinkName>ABOUT</LinkName>
            </MenuLink>
          </li>

          <li>
            <MenuLink href="#m-map" onClick={() => onClose()}>
              <LinkName>M-MAP</LinkName>
            </MenuLink>
          </li>

          <li>
            <MenuLink href="#faq" onClick={() => onClose()}>
              <LinkName>FAQ</LinkName>
            </MenuLink>
          </li>

          <li>
            <MenuLink href="#arts" onClick={() => onClose()}>
              <LinkName>ARTS</LinkName>
            </MenuLink>
          </li>

          <li>
            <MenuLink href="#mint" onClick={() => onClose()}>
              <LinkName>MINT</LinkName>
            </MenuLink>
          </li>
        </MenuLinkList>
      </StyledNav>

      <LowerText>© Yacht ape 2024 all rights reserved</LowerText>
    </ModalWin>,
    modalRoot
  );
};
