import { useState } from 'react';
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
            >
              <BtnLabel>MENU</BtnLabel>
            </MenuBtn>

            <LinkList items={icons} component="header" />
          </InnerWrap>
        </Wrap>
      </StyledContainer>

      <ModalMenu
        onClose={() => setIsShowModal(false)}
        isShowModal={isShowModal}
      />
    </StyledHeader>
  );
};
