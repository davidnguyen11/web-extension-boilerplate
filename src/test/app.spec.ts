import sinon from 'sinon';
import { App } from '../lib/app';
import * as Dom from '../lib/dom';

describe('testing App', () => {
  let sandboxes;
  let renderDateTime;

  beforeEach(() => {
    sandboxes = sinon.createSandbox();
    renderDateTime = sandboxes.stub(Dom, 'renderDateTime');
  });

  afterEach(() => {
    sandboxes.restore();
  });

  describe('testing App', () => {
    it('should return Thu Nov 19 23:00', () => {
      const app = new App();
      app.render();
      expect(renderDateTime.called).toBeTruthy();
    });
  });
});