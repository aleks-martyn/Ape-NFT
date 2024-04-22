import { FaDiscord } from 'react-icons/fa';
import { SiOpensea } from 'react-icons/si';
import { FaXTwitter } from 'react-icons/fa6';
import textContent from './text-content.json';
import { createItems } from 'utils/createItems';

const { socialLinks } = textContent;

const iconFuncs = [
  { iconFunc: FaDiscord },
  { iconFunc: SiOpensea },
  { iconFunc: FaXTwitter },
];

export const icons = createItems(socialLinks, iconFuncs);
