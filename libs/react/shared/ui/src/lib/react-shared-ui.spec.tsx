import { render } from '@testing-library/react';

import ReactSharedUi from './react-shared-ui';

describe('ReactSharedUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactSharedUi />);
    expect(baseElement).toBeTruthy();
  });
});
