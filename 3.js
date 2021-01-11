/**
 * WHAT IS MY EMAIL PROVIDER?
 * ==========================
 *
 * Email merupakan sebuah cara untuk kita berinteraksi antar satu dengan yang lainnya secara elektronik,
 * Banyak sekali provider yang menyediakan layanan email ini.
 *
 * Buatlah sebuah proses yang akan mengeluarkan output provider email yang digunakan oleh user.
 *
 * Contoh:
 *   - Input  : icha@hacktiv8.com
 *   - Output : Your email provider is hacktiv8
 *     (tidak menggunakan .com di belakang)
 *
 * RULES:
 *   - Tidak diperbolehkan menggunakan built-in function:
 *     .map .filter .reduce .split .join .indexOf .findIndex .substring
 */

let email = 'icha@hacktiv8.com';
let provider = '';

for (let i = 0; i <= email.length; i++) {
	// console.log(email[i]);
	if (email[i] === '.') break;
	provider += email[i];
	if (email[i] === '@') provider = '';
}
console.log(provider);
