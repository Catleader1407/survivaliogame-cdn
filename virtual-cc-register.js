// virtual-cc-register.js — Captures _virtual_cc as named module
// Must run immediately after cocos-js/_virtual_cc-CvBNQQLr.js

(function() {
  if (!window.System) return;
  var reg = System.getRegister();
  if (reg) {
    System.register("./_virtual_cc-CvBNQQLr.js", reg[0], reg[1]);
    console.log("[ZMP] virtual-cc-register: Captured as named module");
  }
})();
