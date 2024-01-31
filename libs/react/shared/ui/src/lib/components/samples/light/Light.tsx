interface Props {
  /** The color of the light. */
  color?: 'red' | 'yellow' | 'green';
}

const compileClassNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};

/** A constituent component in a traffic light, complete with a configurable color prop. */
const Light = ({ color = 'green' }: Props) => {
  const colorClassName =
    color === 'red'
      ? 'bg-red-500'
      : color === 'yellow'
      ? 'bg-yellow-500'
      : 'bg-green-500';

  return (
    <div
      className={compileClassNames('w-12 h-12 rounded-full', colorClassName)}
    />
  );
};

export default Light;
