import { Z as noop } from "./index2.js";
let updated;
const is_legacy = noop.toString().includes("$$") || /function \w+\(\) \{\}/.test(noop.toString());
if (is_legacy) {
  ({
    data: {},
    form: null,
    error: null,
    params: {},
    route: { id: null },
    state: {},
    status: -1,
    url: new URL("https://example.com")
  });
  updated = { current: false };
} else {
  updated = new class Updated {
    current = false;
  }();
}
export {
  updated as u
};
