// cc-register.js — Captures the anonymous cc engine register as named "cc"
// Must run immediately after cocos-js/cc.4b7a6.js in listSyncJS

(function() {
  if (!window.System) return;
  var reg = System.getRegister();
  if (reg) {
    // Re-register as named "cc" module
    System.register("cc", reg[0], reg[1]);
    console.log("[ZMP] cc-register: Captured cc engine as named module 'cc'");
  } else {
    console.error("[ZMP] cc-register: No register found for cc engine!");
  }
  
  // Also capture _virtual_cc if it's the last register
  // _virtual_cc loads before cc, so its register was already consumed
  // We need to handle it differently — it should already be in registry
})();
