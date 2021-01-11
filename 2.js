/**
 * ISI BENSIN
 * ==========
 *
 * Buatlah sebuah sistem yang akan menentukan berapa jumlah liter yang akan didapatkan sebuah mobil
 * sesuai dengan uang yang dimiliki pengguna mobil tersebut.
 *
 * Ketika sebuah mobil tidak memiliki 'tipe bensin' atau 'uang' maka tampilkan 'Tidak ada tipe bensin dan uang'.
 *
 * Ketika 'tipe bensin' mobil tersebut adalah 'solar' maka biaya pengisian bensinnya adalah 5000 setiap liternya,
 * Ketika 'tipe bensin' mobil tersebut adalah 'premium' maka biaya pengisian bensinnya adalah 7500 setiap liternya.
 * Ketika 'tipe bensin' mobil tersebut adalah 'pertamax' maka biaya pengisian bensinnya adalah 10000 setiap liternya.
 *
 * Ketika jumlah liter yang didapat tidak bulat, maka hanya tampilkan satu angka dibelakang koma.
 *
  * Contoh 1:
 *   - tipe bensin : solar
 *   - uang        : 30000
 *   - Output      : Mobil anda telah terisi solar sebanyak 6 lt
 * 
 * Contoh 2:
 *   - tipe bensin : premium
 *   - uang        : 35000
 *   - Output      : Mobil anda telah terisi premium sebanyak 4.7 lt
 * 
 * Hint: boleh menggunakan built-in function toFixed().
//  */

let tipeBensin = 'solar';
let uang = 30000;
let liter = 0;

if (!tipeBensin || !uang) {
	console.log('Tidak ada tipe bensin dan uang');
} else if (tipeBensin === 'solar') {
	liter = uang / 5000;
	// console.log(liter.toFixed(1), '37');
} else if (tipeBensin === 'premium') {
	liter = uang / 7500;
	// console.log(liter.toFixed(1), '40');
} else if (tipeBensin === 'pertamax') {
	liter = uang / 10000;
}
console.log(`Mobil anda telah terisi ${tipeBensin}, sebanyak ${liter.toFixed(1)} liter`);
