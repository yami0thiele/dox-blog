type oneToNine = 1|2|3|4|5|6|7|8|9;

type zeroToNine = 0 | oneToNine;

type YYYY = `20${zeroToNine}${zeroToNine}`;

type MM = `0${oneToNine}`|`1${0|1|2}`;

type DD = `0${oneToNine}`|`${1|2}${zeroToNine}`|`3${0|1}`;

export type DateFormat = `${YYYY}/${MM}/${DD}`;
