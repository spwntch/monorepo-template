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
        backgroundPosition: 'center'
      }}
    >
      <div className="text-cyan-500 text-5xl">Hello</div>
    </div>
  );
};

export default BackgroundImageContainer;
