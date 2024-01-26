import {
  FullscreenImageContainer,
  IAttributableImage,
} from '@spwn/react-shared-ui';
import { PropsWithChildren } from 'react';

type Props = {
  image: IAttributableImage;
};

const ImageContainer = ({ image, children }: Props & PropsWithChildren) => {
  console.log('hi from ImageContainer');
  
  return (
    <FullscreenImageContainer image={image}>
      {children}
    </FullscreenImageContainer>
  );
};

export default ImageContainer;
