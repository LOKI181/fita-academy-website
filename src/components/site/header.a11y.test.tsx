import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { expect, test, describe } from 'vitest';

describe('Accessibility', () => {
  test('simple component has no accessibility violations', async () => {
    const { container } = render(<div>Test content</div>);
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });

  test('component with heading has no accessibility violations', async () => {
    const { container } = render(
      <div>
        <h1>Main Heading</h1>
        <p>Some content</p>
        <button>Click me</button>
      </div>
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
});