function validasi() {
    let nama = document.getElementById("nama").value;
    let buku = document.getElementById("buku").value;
    let jumlah = document.getElementById("jumlah").value;

    if (nama === "" || buku === "" || jumlah === "") {
        alert("Semua data harus diisi!");
        return false;
    }

    alert("Data peminjaman berhasil disimpan!");
    return true;
}