/*
http://onecodingproblem.com/2015/09/27/number-of-permutations-in-a-string-of-numbers/

Problem:

Given a string of digits: e.g. ‘1210121256983201…’ and given that a digit maps to a letter in the alphabet – 0 is ‘a’, 1 is ‘b’, etc.

Write a function that will return all of the possible permutations of the string.

So for example:

The string ‘112’ would map to 3 possible combinations.

    [‘1’, ‘1’, ‘2’] → [‘b’, ‘b’, ‘c’]
    [’11’, ‘2’] -> [‘l’, ‘c’]
    [‘1′, ’12’] -> [‘b’, ‘m’]

Don’t worry about ASCII. Assume that each of the 26 characters maps to an integer, and no uppercase.
*/

// All conditions are yoda conditions, because style.
var intToString = function intToString(digits){
  // Functional dictionnary, because I can.
  var alpb_a = (d) => '1'  === d ? 'a' : '';
  var alpb_b = (d) => '2'  === d ? 'b' : alpb_a(d);
  var alpb_c = (d) => '3'  === d ? 'c' : alpb_b(d);
  var alpb_d = (d) => '4'  === d ? 'd' : alpb_c(d);
  var alpb_e = (d) => '5'  === d ? 'e' : alpb_d(d);
  var alpb_f = (d) => '6'  === d ? 'f' : alpb_e(d);
  var alpb_g = (d) => '7'  === d ? 'g' : alpb_f(d);
  var alpb_h = (d) => '8'  === d ? 'h' : alpb_g(d);
  var alpb_i = (d) => '9'  === d ? 'i' : alpb_h(d);
  var alpb_j = (d) => '10' === d ? 'j' : alpb_i(d);
  var alpb_k = (d) => '11' === d ? 'k' : alpb_j(d);
  var alpb_l = (d) => '12' === d ? 'l' : alpb_k(d);
  var alpb_m = (d) => '13' === d ? 'm' : alpb_l(d);
  var alpb_n = (d) => '14' === d ? 'n' : alpb_m(d);
  var alpb_o = (d) => '15' === d ? 'o' : alpb_n(d);
  var alpb_p = (d) => '16' === d ? 'p' : alpb_o(d);
  var alpb_q = (d) => '17' === d ? 'q' : alpb_p(d);
  var alpb_r = (d) => '18' === d ? 'r' : alpb_q(d);
  var alpb_s = (d) => '19' === d ? 's' : alpb_r(d);
  var alpb_t = (d) => '20' === d ? 't' : alpb_s(d);
  var alpb_u = (d) => '21' === d ? 'u' : alpb_t(d);
  var alpb_v = (d) => '22' === d ? 'v' : alpb_u(d);
  var alpb_w = (d) => '23' === d ? 'w' : alpb_v(d);
  var alpb_x = (d) => '24' === d ? 'x' : alpb_w(d);
  var alpb_y = (d) => '25' === d ? 'y' : alpb_x(d);
  var alpb_z = (d) => '26' === d ? 'z' : alpb_y(d);
  // Shortcut in evaluation for digits bigger than the alphabet letters, just to avoid some useless series of eval.
  const max_value = 26;
  const min_value =  1;
  var alpb_start = (d) => (max_value < parseInt(d) || min_value > parseInt(d)) ? '' : alpb_z(d);
  var alpb = alpb_start;

  // digits : series of int remaining to convert, i.e. '13251'
  // pending: extra digit from the digits
  //          passed from the previous call
  //          to check for 2 digit evaluation.
  //          We want to evaluate the '13' from '13521'
  //          i.e. '1' from '13251' to evaluate with the '3' from '3251' --> '13'
  // letters: collection of letters so far.
  var permut = function permut(digits, pending, letters){
    var ret = [];

    if ( 0 === digits.length ) {
      ret = letters;
    } else {
      let digit  = digits[0];
      let remain = digits.slice(1);
      let conv   = alpb(digit);
      let convRem= digit===pending+digit?'':alpb(pending+digit);

      if ( '' !== convRem && '' !== conv ) { // case '13' ['1', '13', '3'] -> 'a', 'm', 'c'
        ret = permut(remain, digit, ( letters.push(conv), letters )).concat( permut(remain, convRem, ( letters.push(convRem), letters ) ));
      } else if ('' !== convRem && '' === conv) { // case '10' ['1', '10', '0'] -> 'a', 'j', ''
        ret = permut(remain, digit, ( letters.push(conv), letters )).concat( permut(remain, (''!==convRem)?convRem:'', ( letters.push((''!==convRem)?convRem:conv), letters ) ));
      } else if ('' === convRem && '' !== conv) { // case '08' ['0', '08', '8'] -> '', '', 'h'
        ret = permut(remain, digit, ( letters.push(conv), letters )).concat( permut(remain, (''!==convRem)?convRem:'', ( letters.push((''!==convRem)?convRem:conv), letters ) ));
      } else if ('' === convRem && '' === conv) { // case '00' ['0', '00', '0'] -> '', '', ''
        ret = permut(remain, digit, ( letters.push(conv), letters )).concat( permut(remain, (''!==convRem)?convRem:'', ( letters.push((''!==convRem)?convRem:conv), letters ) ));
      }
    }
    return ret;
  };

  return permut(digits, '', []);
};

intToString('21')
