import { render } from '@testing-library/react';

import ReactSharedSiteShell from './react-shared-site-shell';

describe('ReactSharedSiteShell', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactSharedSiteShell />);
    expect(baseElement).toBeTruthy();
  });
});
