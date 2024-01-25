import {
  FullscreenImageContainer,
  IAttributableImage,
} from '@spwn/react-shared-ui';

type Props = {
  image: IAttributableImage;
};

const ImageContainer = ({ image }: Props) => {
  return <FullscreenImageContainer image={image} />;
};

export default ImageContainer;
