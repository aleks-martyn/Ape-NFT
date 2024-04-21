import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import { List, SocialLink } from './LinkList.styled';

export const LinkList = ({ items }) => {
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
  const getIconSize = screenDimension => (screenDimension ? 24 : 16);
  const size = getIconSize(isTablet);

  return (
    <List>
      {items.map(({ iconFunc, url }, index) => (
        <li key={index}>
          <SocialLink href={url} target="_blank" rel="noreferrer noopener">
            {iconFunc({ style: { width: `${size}px`, height: `${size}px` } })}
          </SocialLink>
        </li>
      ))}
    </List>
  );
};

LinkList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      iconFunc: PropTypes.func.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
