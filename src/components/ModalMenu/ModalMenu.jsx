import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { LogoLink } from 'components/LogoLink';
import { LinkList } from 'components/LinkList';
import textContent from '../../text-content.json';
import { icons } from 'socialIcons';
import {
  Overlay,
  ModalWin,
  StyledContainer,
  Wrap,
  BtnLabel,
  CloseBtn,
  InnerWrap,
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
    <Overlay>
    <ModalWin>
      <StyledContainer>
        <Wrap>
          <LogoLink onClick={() => onClose()} component="menu" />

          <InnerWrap>
            <CloseBtn type="button" onClick={() => onClose()}>
              <BtnLabel>CLOSE</BtnLabel>
            </CloseBtn>

            <LinkList items={icons} component="menu" />
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
      </ModalWin>
      </Overlay>,
    modalRoot
  );
};

ModalMenu.propTypes = {
  onClose: PropTypes.func.isRequired,
};
