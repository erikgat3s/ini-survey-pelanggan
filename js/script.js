      function tampilData() {
            var nama = document.getElementById("nama").value;
            var umur = document.getElementById("umur").value;
            var jeniskelamin = document.querySelector("input[name = jeniskelamin]:checked").value;
            var nilai = document.getElementById("nilai").value;
            var layanan = document.querySelector("input[name = layanan]:checked").value;
            var saran = document.getElementById("saran").value;
            var produk = document.getElementsByName("produk");
            var daftarproduk = ''

            for(var produk2 of produk) 
            {
                if(produk2.checked)
                {
                    daftarproduk += ', '+ produk2.value
                }
            }

            daftarproduk = daftarproduk.substring(1)

            alert(
                "Nama : " +
                    nama + 
                    "\nUmur : " +
                    umur +
                    "\nJenis Kelamin : " +
                    jeniskelamin +

                    "\nInfo Layanan : " +
                    daftarproduk +
                    "\nMenggunakan Layanan : " +
                    layanan +
                    "\nKritik dan Saran : " +
                    saran
            );
        }
