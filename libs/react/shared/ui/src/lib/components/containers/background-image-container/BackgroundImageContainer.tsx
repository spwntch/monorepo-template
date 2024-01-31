interface Props {
  src?: string;
}

const BackgroundImageContainer = ({ src = '/images/splash.webp' }: Props) => {
  return (
    <div
      className="h-full w-full"
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: 'cover',
      }}
    ></div>
  );
};

export default BackgroundImageContainer;
