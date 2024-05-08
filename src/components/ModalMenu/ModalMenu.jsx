import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { scroller } from 'react-scroll';
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

export const ModalMenu = ({ onClose, isShowModal }) => {
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
    <Overlay isShowModal={isShowModal}>
      <ModalWin isShowModal={isShowModal}>
        <StyledContainer>
          <Wrap>
            <LogoLink onClick={() => onClose()} component="menu" />

            <InnerWrap>
              <CloseBtn
                type="button"
                onClick={() => onClose()}
                isShowModal={isShowModal}
              >
                <BtnLabel>CLOSE</BtnLabel>
              </CloseBtn>

              <LinkList items={icons} component="menu" />
            </InnerWrap>
          </Wrap>

          <StyledNav>
            <MenuLinkList isShowModal={isShowModal}>
              {sectionNames.map((name, index) => {
                const handleKeyDown = event => {
                  if (event.code === 'Enter' || event.code === 'NumpadEnter') {
                    scroller.scrollTo(name, { smooth: true, duration: 500 });
                    onClose();
                  }
                };

                const onFocusHandler = () =>
                  window.addEventListener('keydown', handleKeyDown);

                const onBlurHandler = () =>
                  window.removeEventListener('keydown', handleKeyDown);

                return (
                  <MenuListItem key={index}>
                    <MenuLink
                      to={name}
                      smooth={true}
                      duration={500}
                      onClick={() => onClose()}
                      tabIndex={0}
                      onFocus={onFocusHandler}
                      onBlur={onBlurHandler}
                    >
                      <LinkName>{name}</LinkName>
                    </MenuLink>
                  </MenuListItem>
                );
              })}
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
  isShowModal: PropTypes.bool.isRequired,
};
