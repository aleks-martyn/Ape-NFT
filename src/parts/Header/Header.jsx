import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
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

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      if (!isMobile && isShowModal) {
        setIsShowModal(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile, isShowModal]);

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
