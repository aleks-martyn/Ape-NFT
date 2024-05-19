import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import { List, SocialLink } from './LinkList.styled';

export const LinkList = ({ items, component, scrollY }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const getIconSize = screenDimension => (screenDimension ? 16 : 24);
  const size = getIconSize(isMobile);

  return (
    <List component={component}>
      {items.map(({ iconFunc, url, label }, index) => (
        <li key={index}>
          <SocialLink
            aria-label={label}
            href={url}
            target="_blank"
            rel="noreferrer noopener"
            component={component}
            scrollY={scrollY}
            index={index}
          >
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
      label: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  component: PropTypes.string.isRequired,
  scrollY: PropTypes.number,
};
