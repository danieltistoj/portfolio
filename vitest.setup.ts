import "@testing-library/jest-dom/vitest";

// jsdom no implementa estas APIs que usa Radix UI (Select) para posicionar
// el popover y manejar el puntero. Sin esto, abrir un <Select> en un test
// lanza "not implemented" o "not a function".
class ResizeObserverStub {
  observe() {}
  unobserve() {}
  disconnect() {}
}
window.ResizeObserver = ResizeObserverStub;
window.HTMLElement.prototype.scrollIntoView = () => {};
window.HTMLElement.prototype.hasPointerCapture = () => false;
window.HTMLElement.prototype.releasePointerCapture = () => {};
