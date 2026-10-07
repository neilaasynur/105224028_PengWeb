# Dokumen Teknis Modul 2 — HTML Semantik, Tailwind CSS, dan Aksesibilitas
Nama/NIM : Neila Faaizah Asynur/105224028  
Repositori : [https://github.com/neilaasynur/105224028_PengWeb](https://github.com/neilaasynur/105224028_PengWeb)  
## 1. Struktur Semantik
### a. Kerangka landmark dan hierarki judul halaman utama     
Pada web yang dibuat di praktikum sebelumnya, kerangka landmark yang terbentuk meliputi: banner, navigation, main, region, complementary, contentinfo. Sedangkan hierarki judul utama dimulai dari h1 sebagai judul utama, h2 untuk setiap section, dan h3 untuk setiap kartu fitur.
### b. Tangkapan layar pohon aksesibilitas pada DevTools
Berikut screenshot hasil pembuatan web pada praktikum sebelumnya.   
![Kerangka Semantik](./image/kerangka%20semantik.png)

## 2. Tata Letak Responsif
### a. Tangkapan Layar di Berbagai Layar Perangkat
- 360px (Mobile)
![Tampilan pada Mobile](./image/tampilan%20360px.png)

- 768px (Tablet)
![Tampilan pada Tablet](./image/tampilan%20768px.png)

- 1280px (Desktop)
![Tampilan pada Desktop](./image/tampilan%201280px.png)

### b. Kelas Flexbox, Grid, dan breakpoint yang digunakan
Flexbox digunakan pada navigasi dengan menggunakan pendekatan mobile first, yaitu mendahulukan tampilan pada HP lalu menambahkan tampilan pada ukuran yang lebih lebar.  
![Penggunaan Flexbox](./image/penggunaan%20flexbox.png)  
   
Grid digunakan pada penyusunan fitur utama yang disusun menggunakan breakpoint bertahap, yaitu 1 kolom pada mobile, 2 kolom pada tablet, dan 3 kolom pada desktop. Hal ini dilakukan agar penyusunan konten dapat terbaca di semua layar.
![Penggunaan Grid](./image/penggunaan%20grid.png)   


## 3. Audit Aksesibilitas
- Tabel skor Lighthouse sebelum dan sesudah perbaikan
Berikut skor Lighthouse pada halaman utama
![Penilaian skor Lighthouse utama](./image/skor%20lighthouse%20halaman%20utama.png)   
Berikut skor Lighthouse pada halaman latihan awal
![Penilaian skor Lighthouse halaman latihan awal](./image/penilaiain%20audit%20awal.png)   
Dari gambar diatas, terlihat bahwa ada 3 daftar audit yang gagal, yaitu:
- Buttons do not have an accessible name    
Hal ini dikarenakan oleh adanya sebuah tombol yang tidak memiliki nama. Hal ini akan akan menyebabkan screen reader tidak dapat membacakan isi halaman web dengan web, sedangkan fitur ini berguna untuk membantu orang tunanetra. 
- Image elements do not have [alt] attributes   
Hal ini disebabkan oleh adanya sebuah gambar yang tidak memiliki keterangan pada gambarnya. Sama halnya dengan tombol sebelumnya, tanpa adanya keterangan pada gambar tersebut menyebabkan screen reader tidak dapat membacakan keterangan dari gambar tersebut.
- Form elements do not have associated labels   
Hal ini disebabkan oleh label merupakan teks yang menjelaskan fungsi dari sebuah input form. Tanpa adanya label, screen reader tidak tahu harus membacakan apa.
- Background and foreground colors do not have a sufficient contrast ratio   
Penyebab kegagalan ini dikarenakan warna dengan kontras rendah yang membuat pengguna kesulitan untuk membaca tulisan yang seharusnya menjadi fokus pengguna.
- Document does not have a main landmark   

Dari penelusuran pribadi menggunakan papan ketik, urutan fokus dan garis fokus sudah sesuai, yaitu dari atas ke bawah, dan dari kiri ke kanan secara logis.

Untuk perbaikan skor lighthouse pada halaman latihan, dilakan perubahan pada kode berikut:
- `<img src="/next.svg" width={120} height={24} />` menjadi `<img src="/next.svg" alt="Logo of Next.js" width={120} height={24} />`
- menambahkan label pada `<input type="search" className="border p-2" />` sehingga hasilnya menjadi `<label htmlFor="cari-stok" >Cari-stok:</label>`
`<input type="search" id="cari-stok" className="border p-2" />`
- menggunakan aria-label pake button, sehingga kode ini `<button className="ml-2 border p-2">` berubah menjadi `<button aria-label="Search product">`   
Setelah dilakukan perbaikan pada halaman latihan, berikut hasil skor lighthouse yang didapatkan
![Penilaian skor Lighthouse halaman latihan akhir](./image/penilaian%20audit%20akhir.png)   

## 4. Kendala dan Penyelesaian
Tidak Ada
## 5. Catatan Pemanfaatan AI
Antigravity dengan menggunakan prompt berikut:  
"how to solve this problem. first, Buttons do not have an accessible name. second,Image elements do not have [alt] attributes. third, Form elements do not have associated labels. and lastly, Background and foreground colors do not have a sufficient contrast ratio."