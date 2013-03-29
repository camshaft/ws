/**
 * WebSocket / MozWebSocket
 *
 * example:
 *
 *        var req = ws();
 *
 * @return {Object}
 */

module.exports = function (host) {
  if (window.MozWebSocket) return new MozWebSocket(host);
  if (window.WebSocket) return new WebSocket(host);
};
