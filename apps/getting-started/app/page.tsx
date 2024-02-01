import { BackgroundImageContainer, Light } from '@/react-shared-ui';

export default async function Index() {
  const image = {
    src: 'splash.jpg',
    url: 'https://unsplash.com/@joshhild?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
    photographer: {
      name: 'Josh Hild',
      url: 'https://unsplash.com/@joshhild?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
    },
  };

  return (
    <BackgroundImageContainer src={image.src}>
      <Light />
    </BackgroundImageContainer>
    // <FullscreenImageContainer image={image}>
    //   <div className="h-full flex flex-col justify-center items-center px-3">
    //     <div>
    //       <img src="brand/logo.png" alt="" />
    //     </div>
    //    </div>
    //  </FullscreenImageContainer>
  );
}
