import { render } from '@testing-library/react';

import ImageContainer from './ImageContainer';
import { IAttributableImage } from '@spwn/react-shared-ui';

describe('ImageContainer', () => {
  it('should render successfully', () => {
    const image: IAttributableImage = {
      src: '/image.png',
    };
    const { baseElement } = render(<ImageContainer image={image} />);
    expect(baseElement).toBeTruthy();
  });
});
