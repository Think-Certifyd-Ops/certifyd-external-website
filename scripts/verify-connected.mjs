import assert from 'node:assert/strict';
import { initializeConnected } from '../src/components/connected/interactions.js';
class ElementStub extends EventTarget {
  constructor(attrs = {}) { super(); this.attrs = attrs; this.textContent = ''; }
  getAttribute(name) { return this.attrs[name] ?? null; }
  setAttribute(name, value) { this.attrs[name] = value; }
}
const attendance = new ElementStub({ 'aria-pressed': 'false' });
const state = new ElementStub(), time = new ElementStub(), announcement = new ElementStub();
const nodes = {'#attendance-preview':attendance,'#attendance-state':state,'#checkout-time':time,'#attendance-announcement':announcement};
const media = new EventTarget();media.matches = false;
globalThis.window = {matchMedia:()=>media};
const root = {querySelector:selector=>nodes[selector]??null,querySelectorAll:()=>[]};
const firstCleanup = initializeConnected(root);firstCleanup();
const secondCleanup = initializeConnected(root);
attendance.dispatchEvent(new Event('click'));
assert.equal(attendance.getAttribute('aria-pressed'),'true');
assert.equal(state.textContent,'Check-out recorded');
assert.equal(time.textContent,'16:31');
secondCleanup();attendance.dispatchEvent(new Event('click'));
assert.equal(attendance.getAttribute('aria-pressed'),'true');
console.log('Connected examples survive cleanup and reinitialization without duplicate clicks.');
