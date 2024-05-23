import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import { List, SocialLink } from './LinkList.styled';

export const LinkList = props => {
  const { items, ...rest } = props;
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const getIconSize = screenDimension => (screenDimension ? 16 : 24);
  const size = getIconSize(isMobile);

  return (
    <List {...rest}>
      {items.map(({ iconFunc, url, label }, index) => (
        <li key={index}>
          <SocialLink
            {...rest}
            aria-label={label}
            href={url}
            target="_blank"
            rel="noreferrer noopener"
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
  scrolly: PropTypes.number.isRequired,
};
