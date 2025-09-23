function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import isViablePhoneNumber from '../helpers/isViablePhoneNumber.js';
import _getNumberType from '../helpers/getNumberType.js';
import isObject from '../helpers/isObject.js';
import parse from '../parse.js';

// Finds out national phone number type (fixed line, mobile, etc)
export default function getNumberType() {
  var _normalizeArguments = normalizeArguments(arguments),
    input = _normalizeArguments.input,
    options = _normalizeArguments.options,
    metadata = _normalizeArguments.metadata;
  // `parseNumber()` would return `{}` when no phone number could be parsed from the input.
  if (!input.phone) {
    return;
  }
  return _getNumberType(input, options, metadata);
}

// Sort out arguments
export function normalizeArguments(args) {
  var _Array$prototype$slic = Array.prototype.slice.call(args),
    _Array$prototype$slic2 = _slicedToArray(_Array$prototype$slic, 4),
    arg_1 = _Array$prototype$slic2[0],
    arg_2 = _Array$prototype$slic2[1],
    arg_3 = _Array$prototype$slic2[2],
    arg_4 = _Array$prototype$slic2[3];
  var input;
  var options = {};
  var metadata;

  // If the phone number is passed as a string.
  // `getNumberType('88005553535', ...)`.
  if (typeof arg_1 === 'string') {
    // If "default country" argument is being passed
    // then convert it to an `options` object.
    // `getNumberType('88005553535', 'RU', metadata)`.
    if (!isObject(arg_2)) {
      if (arg_4) {
        options = arg_3;
        metadata = arg_4;
      } else {
        metadata = arg_3;
      }

      // `parse` extracts phone numbers from raw text,
      // therefore it will cut off all "garbage" characters,
      // while this `validate` function needs to verify
      // that the phone number contains no "garbage"
      // therefore the explicit `isViablePhoneNumber` check.
      if (isViablePhoneNumber(arg_1)) {
        input = parse(arg_1, {
          defaultCountry: arg_2
        }, metadata);
      } else {
        input = {};
      }
    }
    // No "resrict country" argument is being passed.
    // International phone number is passed.
    // `getNumberType('+78005553535', metadata)`.
    else {
      if (arg_3) {
        options = arg_2;
        metadata = arg_3;
      } else {
        metadata = arg_2;
      }

      // `parse` extracts phone numbers from raw text,
      // therefore it will cut off all "garbage" characters,
      // while this `validate` function needs to verify
      // that the phone number contains no "garbage"
      // therefore the explicit `isViablePhoneNumber` check.
      if (isViablePhoneNumber(arg_1)) {
        input = parse(arg_1, undefined, metadata);
      } else {
        input = {};
      }
    }
  }
  // If the phone number is passed as a parsed phone number.
  // `getNumberType({ phone: '88005553535', country: 'RU' }, ...)`.
  else if (isObject(arg_1)) {
    input = arg_1;
    if (arg_3) {
      options = arg_2;
      metadata = arg_3;
    } else {
      metadata = arg_2;
    }
  } else throw new TypeError('A phone number must either be a string or an object of shape { phone, [country] }.');
  return {
    input: input,
    options: options,
    metadata: metadata
  };
}
//# sourceMappingURL=getNumberType.js.map