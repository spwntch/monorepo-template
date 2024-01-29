import { FullscreenImageContainer, IAttributableImage } from '@spwn/react-shared-ui';

export default async function Index() {
  const image: IAttributableImage = {
    src: 'splash.jpg',
    url: 'https://unsplash.com/@joshhild?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
    photographer: {
      name: 'Josh Hild',
      url: 'https://unsplash.com/@joshhild?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
    },
  };

  return (
    <FullscreenImageContainer image={image}>
      <div className="h-full flex flex-col justify-center items-center px-3">
        <div>
          <img src="brand/logo.png" alt="" />
        </div>
       </div>
     </FullscreenImageContainer>
  );
}
