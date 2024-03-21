import {
  StyledHeader,
  StyledContainer,
  Wrap,
  InnerWrap,
  LinkList,
  MenuTitle,
  LogoLink,
  SocialLink,
  MenuBtn,
} from './Header.styled';
import { LogoIcon } from 'components/LogoIcon';
import { TwitterIcon } from 'components/TwitterIcon';
import { LogomarkIcon } from 'components/LogomarkIcon';
import { DiscordIcon } from 'components/DiscordIcon';

export const Header = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <Wrap>
          <LogoLink href="../../index.js">
            <LogoIcon width="48" height="32" />
          </LogoLink>

          <InnerWrap>
            <nav>
              <MenuBtn type="button">
                <MenuTitle>MENU</MenuTitle>
              </MenuBtn>
            </nav>

            <LinkList>
              <li>
                <SocialLink
                  href="https://discord.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <DiscordIcon width="16" height="16" />
                </SocialLink>
              </li>

              <li>
                <SocialLink
                  href="https://logomark.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <LogomarkIcon width="16" height="16" />
                </SocialLink>
              </li>

              <li>
                <SocialLink
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <TwitterIcon width="16" height="16" />
                </SocialLink>
              </li>
            </LinkList>
          </InnerWrap>
        </Wrap>
      </StyledContainer>
    </StyledHeader>
  );
};
