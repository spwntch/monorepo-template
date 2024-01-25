import { ImageContainer } from '@org/react-shared-ui';
import { IAttributableImage } from '@spwn/react-shared-ui';

export default async function Index() {
  const image: IAttributableImage = {
    src: 'splash.jpg',
    url: 'https://unsplash.com/@joshhild?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
    photographer: {
      name: 'Josh Hild',
      url: 'https://unsplash.com/@joshhild?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
    },
  };
  
  return <ImageContainer image={image} />;
}
