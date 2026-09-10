import '@testing-library/jest-dom';
import { axe } from 'vitest-axe';
import { expect } from 'vitest';

expect.extend({
  async toHaveNoViolations(container: HTMLElement) {
    const results = await axe(container) as { violations: Array<{ id: string; description: string; nodes: unknown[] }> };
    return {
      pass: results.violations.length === 0,
      message: () => {
        if (results.violations.length === 0) return '';
        return results.violations
          .map((v) => `${v.id}: ${v.description} (${v.nodes.length} nodes)`)
          .join('\n');
      },
    };
  },
});

// @ts-expect-error - adding axe to global for convenience
global.axe = axe;