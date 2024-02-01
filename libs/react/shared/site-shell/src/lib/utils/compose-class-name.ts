const composeClassName = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};

export default composeClassName;
