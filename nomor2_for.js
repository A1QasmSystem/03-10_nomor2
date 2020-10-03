var nilaiSantri = [90, 60, 65, 97, 99, 60, 53, 91, 89];
var total = 0;
var bykNilai = nilaiSantri.length;

for (i = 0; i < bykNilai; i++) {
  total += nilaiSantri[i];
}

console.log(total / bykNilai);
