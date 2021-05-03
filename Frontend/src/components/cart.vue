<template>
    <div class="container">
        <h2 class="display-3">Cart</h2>
        <p>Berikut barang yang sudah anda masukkan kedalam cart anda :</p>            
        <table class="table table-hover">
            <thead>
                <tr>
                    <th>Barang</th>
                    <th>Harga</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Buku Lorem Ipsum</td>
                    <td>Rp. 93000</td>
                    <td>
                        <button class="btn btn-success" style="margin-right:5px">Checkout</button>
                        <button class="btn btn-danger">Remove</button>
                    </td>
                </tr>
                <tr>
                    <td>Meja Kayu Lorem Ipsum</td>
                    <td>Rp. 4.000.000</td>
                    <td>
                        <button class="btn btn-success" style="margin-right:5px">Checkout</button>
                        <button class="btn btn-danger">Remove</button>
                    </td>
                </tr>
                <tr>
                    <td>Laptop Lorem</td>
                    <td>Rp. 12.500.000</td>
                    <td>
                        <button class="btn btn-success" style="margin-right:5px">Checkout</button>
                        <button class="btn btn-danger">Remove</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name : "cart"
}
</script>