import PropTypes from 'prop-types';
import { scroller } from 'react-scroll';
import textContent from '../../text-content.json';
import {
  StyledNav,
  MenuLinkList,
  MenuListItem,
  MenuLink,
  LinkName,
} from './Navigation.styled';

export const Navigation = ({ onClose, isShowModal }) => {
  const { sectionNames } = textContent;

  return (
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
  );
};

Navigation.propTypes = {
  onClose: PropTypes.func.isRequired,
  isShowModal: PropTypes.bool.isRequired,
};
