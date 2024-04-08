import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { LogoIcon } from 'components/LogoIcon';
import { TwitterIcon } from 'components/TwitterIcon';
import { LogomarkIcon } from 'components/LogomarkIcon';
import { DiscordIcon } from 'components/DiscordIcon';
import textContent from '../../text-content.json';
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

export const ModalMenu = ({ onClose }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const {
    footer: { text },
    sectionNames,
  } = textContent;

  return createPortal(
    <ModalWin>
      <StyledContainer>
        <Wrap>
          <LogoLink to="/">
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
                <MenuLink
                  to={name}
                  smooth={true}
                  duration={500}
                  onClick={() => onClose()}
                >
                  <LinkName>{name}</LinkName>
                </MenuLink>
              </MenuListItem>
            ))}
          </MenuLinkList>
        </StyledNav>

        <LowerText>{text}</LowerText>
      </StyledContainer>
    </ModalWin>,
    modalRoot
  );
};
