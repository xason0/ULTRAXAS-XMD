function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import _formatNumber from '../format.js';
import parse from '../parse.js';
import isObject from '../helpers/isObject.js';
export default function formatNumber() {
  var _normalizeArguments = normalizeArguments(arguments),
    input = _normalizeArguments.input,
    format = _normalizeArguments.format,
    options = _normalizeArguments.options,
    metadata = _normalizeArguments.metadata;
  return _formatNumber(input, format, options, metadata);
}

// Sort out arguments
function normalizeArguments(args) {
  var _Array$prototype$slic = Array.prototype.slice.call(args),
    _Array$prototype$slic2 = _slicedToArray(_Array$prototype$slic, 5),
    arg_1 = _Array$prototype$slic2[0],
    arg_2 = _Array$prototype$slic2[1],
    arg_3 = _Array$prototype$slic2[2],
    arg_4 = _Array$prototype$slic2[3],
    arg_5 = _Array$prototype$slic2[4];
  var input;
  var format;
  var options;
  var metadata;

  // Sort out arguments.

  // If the phone number is passed as a string.
  // `format('8005553535', ...)`.
  if (typeof arg_1 === 'string') {
    // If country code is supplied.
    // `format('8005553535', 'RU', 'NATIONAL', [options], metadata)`.
    if (typeof arg_3 === 'string') {
      format = arg_3;
      if (arg_5) {
        options = arg_4;
        metadata = arg_5;
      } else {
        metadata = arg_4;
      }
      input = parse(arg_1, {
        defaultCountry: arg_2,
        extended: true
      }, metadata);
    }
    // Just an international phone number is supplied
    // `format('+78005553535', 'NATIONAL', [options], metadata)`.
    else {
      if (typeof arg_2 !== 'string') {
        throw new Error('`format` argument not passed to `formatNumber(number, format)`');
      }
      format = arg_2;
      if (arg_4) {
        options = arg_3;
        metadata = arg_4;
      } else {
        metadata = arg_3;
      }
      input = parse(arg_1, {
        extended: true
      }, metadata);
    }
  }
  // If the phone number is passed as a parsed number object.
  // `format({ phone: '8005553535', country: 'RU' }, 'NATIONAL', [options], metadata)`.
  else if (isObject(arg_1)) {
    input = arg_1;
    format = arg_2;
    if (arg_4) {
      options = arg_3;
      metadata = arg_4;
    } else {
      metadata = arg_3;
    }
  } else throw new TypeError('A phone number must either be a string or an object of shape { phone, [country] }.');

  // Legacy lowercase formats.
  if (format === 'International') {
    format = 'INTERNATIONAL';
  } else if (format === 'National') {
    format = 'NATIONAL';
  }
  return {
    input: input,
    format: format,
    options: options,
    metadata: metadata
  };
}
//# sourceMappingURL=format.js.map