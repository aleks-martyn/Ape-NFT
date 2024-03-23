import { MapCard } from 'components/MapCard';
import { Wrap, CardText, ArrowIcon } from './MindMap.styled';

export const MindMap = () => {
  return (
    <Wrap>
      <MapCard title="YAPE DROP">
        <CardText>
          All owners of APE NFTs and all future collections will receive a
          percentage of sales based on the number of NFTs they own
        </CardText>
      </MapCard>

      <MapCard title="New Collection">
        <CardText>
          Launch of the 2nd YACHT Collection Releasing the first version of the
          Ape Slam Game
        </CardText>
      </MapCard>

      <MapCard title="Token">
        <CardText>
          Launch your own token, the proceeds of which will go to a global fund
          to LAUNCH YACHT CLUB AND PROMOTE it
        </CardText>
      </MapCard>

      <MapCard title="Learn more in mind map">
        <ArrowIcon />
      </MapCard>
    </Wrap>
  );
};
