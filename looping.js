// melakukan perulangan
// 1. for => perulangan sudah di ketahui maximal yang mau diulang

for (let i = 0; i < 10; i++) {
	// perintah nya
	// console.log(i)
}

let nama = 'susilo';

let balikNama = '';
for (let i = 0; i < nama.length; i++) {
	balikNama += nama[nama.length - 1 - i];
}
// console.log(balikNama)

// 2. while => blm tau kapan kondisinya terpenuhi, kalo sudah terpenuhi kondisi di ubah jadi false agar looping berhenti
// 3. do while

// for (let h = 0; h < 12; h++) {
// 	if (h % 2 === 0) {
// 		console.log(h);
// 	}
// }

let namae = 'susilo';

let hurufS = 0;
for (let i = 0; i < namae.length; i++) {
	if (namae[i] === 's') {
		hurufS++;
	}
}
// console.log(hurufS);

let arr = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < arr.length; i++) {
	if (arr[i] === 3) {
		// console.log(i);
	}
}

let kata1 = 'matematika';
let kata2 = 'karantina';

let kesamaan = 0;

for (let i = 0; i < kata1.length; i++) {
	for (let j = 0; j < kata2.length; j++) {
		// if (kata1[i] === kata2[j]) {
		// 	// tidak mesti harus di print
		// 	kesamaan++;
		console.log(
			'kata1 yang ke',
			i,
			'yaitu huruf',
			kata1[i],
			'sama dengan kata ke 2 yang ke',
			j,
			'yaitu huruf',
			kata2[j]
		);
		// }
	}
}

// console.log(kesamaan);
