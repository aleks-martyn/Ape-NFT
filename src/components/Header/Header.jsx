import { useState } from 'react';
import { ModalMenu } from 'components/ModalMenu';
import { LinkList } from 'components/LinkList';
import { LogoIcon } from 'components/LogoIcon';
import { icons } from 'socialIcons';
import {
  StyledHeader,
  StyledContainer,
  Wrap,
  InnerWrap,
  BtnLabel,
  LogoLink,
  MenuBtn,
} from './Header.styled';

export const Header = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  return (
    <StyledHeader>
      <StyledContainer>
        <Wrap>
          <LogoLink to="/">
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

            <LinkList items={icons} component="header" />
          </InnerWrap>
        </Wrap>
      </StyledContainer>

      {isShowModal && <ModalMenu onClose={() => setIsShowModal(false)} />}
    </StyledHeader>
  );
};
