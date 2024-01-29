import { IAttributableImage } from '@spwn/react-shared-ui';

describe('Light', () => {
  it('should TODO...', () => {
    const src = '/image.png';
    const image: IAttributableImage = { src };
    // const { baseElement } = render(<Light />);
    expect(image.src).toBe(src);
  });
});
