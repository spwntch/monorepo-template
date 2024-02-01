import { PropsWithChildren } from 'react';

interface Props {
  src?: string;
}

const BackgroundImageContainer = ({
  src = '/images/splash.webp',
  children,
}: Props & PropsWithChildren) => {
  return (
    <div
      className="h-full w-full border-cyan-500 border-4"
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {children}
    </div>
  );
};

export default BackgroundImageContainer;
