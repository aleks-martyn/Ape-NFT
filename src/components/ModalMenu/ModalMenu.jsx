import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { LogoLink } from 'components/LogoLink';
import { LinkList } from 'components/LinkList';
import { Navigation } from 'components/Navigation';
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
  LowerText,
} from './ModalMenu.styled';

const modalRoot = document.getElementById('modal-root');

export const ModalMenu = props => {
  const { onClose, isShowModal, ...rest } = props;

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
  } = textContent;

  return createPortal(
    <Overlay isShowModal={isShowModal}>
      <ModalWin isShowModal={isShowModal}>
        <StyledContainer>
          <Wrap>
            <LogoLink onClick={() => onClose()} component="menu" />

            <InnerWrap>
              <CloseBtn
                {...rest}
                type="button"
                onClick={() => onClose()}
                isShowModal={isShowModal}
                tabIndex={0}
              >
                <BtnLabel {...rest}>CLOSE</BtnLabel>
              </CloseBtn>

              <LinkList {...rest} items={icons} component="menu" />
            </InnerWrap>
          </Wrap>

          <Navigation {...rest} onClose={onClose} isShowModal={isShowModal} />

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
  scrolly: PropTypes.number.isRequired,
};
