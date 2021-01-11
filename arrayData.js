// array sekumpulan data
// dilambangkan dengan kurung siku -> []
let arr = [2, 'data', [1, 3, 'aku'], { nama: 'susilo' }];
// untuk menentukan panjang array menggunakan length
arr.length;
//mengakses urutan arr menggunakan kurung siku []
console.log(arr[0]); // mengambil angka 2
console.log(arr[3]); // {nama : susilo}
console.log(arr[2][1]); // mengambil angka 3
console.log(arr[1] + arr[2][2] + arr[3]['nama']);

// pseudo
// INIT
//     let string;
// FOR i=0 to 10  => banyak nya baris
//     string + *
// FOR j=10 to 0 => banyak nya isi dalam setiap baris
//   IF c
//  string + *
// FOR END
// PRINT
//    string
