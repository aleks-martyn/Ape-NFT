import { useMediaQuery } from 'react-responsive';
import { LinkList, SocialLink } from './SocialLinkList.styled';

export const SocialLinkList = ({ items }) => {
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
  const getIconSize = screenDimension => (screenDimension ? 24 : 16);
  const size = getIconSize(isTablet);

  return (
    <LinkList>
      {items.map(({ iconFunc, url }, index) => (
        <li key={index}>
          <SocialLink href={url} target="_blank" rel="noreferrer noopener">
            {iconFunc({ style: { width: `${size}px`, height: `${size}px` } })}
          </SocialLink>
        </li>
      ))}
    </LinkList>
  );
};
