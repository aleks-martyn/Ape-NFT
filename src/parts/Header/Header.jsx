import { useState, useEffect } from 'react';
import { ModalMenu } from 'components/ModalMenu';
import { LogoLink } from 'components/LogoLink';
import { LinkList } from 'components/LinkList';
import { icons } from 'socialIcons';
import {
  StyledHeader,
  StyledContainer,
  Wrap,
  InnerWrap,
  BtnLabel,
  MenuBtn,
} from './Header.styled';

export const Header = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      if (isShowModal) {
        setIsShowModal(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isShowModal]);

  return (
    <StyledHeader>
      <StyledContainer>
        <Wrap>
          <LogoLink component="header" />

          <InnerWrap>
            <MenuBtn
              type="button"
              isShowModal={isShowModal}
              onClick={() => setIsShowModal(true)}
              scrolly={scrollY}
            >
              <BtnLabel scrolly={scrollY}>MENU</BtnLabel>
            </MenuBtn>

            <LinkList scrolly={scrollY} items={icons} component="header" />
          </InnerWrap>
        </Wrap>
      </StyledContainer>

      <ModalMenu
        scrolly={scrollY}
        onClose={() => setIsShowModal(false)}
        isShowModal={isShowModal}
      />
    </StyledHeader>
  );
};
