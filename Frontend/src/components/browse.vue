<template>
    <div class="container">
        <div class="row">
            <div class="col-md-11">
                <input type="text" name="search" v-model="search" class="form-control" placeholder="Masukkan barang yang ingin anda cari" >
            </div>
            <div class="col-md-1">
                <button class="btn btn-success" v-on:click="cari_barang()">Search</button>
            </div>
        </div>
        <br>
        <button type="button" class="btn btn-outline-primary" style="margin-right:5px">Peralatan Dapur</button>
        <button type="button" class="btn btn-outline-primary" style="margin-right:5px">Elektronik</button>
        <button type="button" class="btn btn-outline-primary" style="margin-right:5px">Bahan Makanan</button>
        <button type="button" class="btn btn-outline-primary" style="margin-right:5px">Perabotan</button>
        <button type="button" class="btn btn-outline-primary" style="margin-right:5px">Outdoor</button>
        <button type="button" class="btn btn-outline-primary" style="margin-right:5px">Peralatan Bayi</button>
        <button type="button" class="btn btn-outline-primary" style="margin-right:5px">DIY</button>
        <button type="button" class="btn btn-outline-primary" style="margin-right:5px">Literasi dan Hobi</button>
        <button type="button" class="btn btn-outline-primary" style="margin-right:5px">Kesehatan</button>
        <button type="button" class="btn btn-outline-primary" style="margin-right:5px">Pakaian</button>
    </div>

    <br>
    <div class="container">
        <div class="row">
            <div class="col-md-6 card" v-for="b in barang" :key="b.id">
                <div class="card-header bg-primary"><h4>{{b.nama_barang}}</h4></div>
                <div class="card-body">{{b.deskripsi}}</div>
                <div class="card-footer">Rp. {{b.harga}}</div>
                <button class="btn btn-success">Beli</button>
                <router-link class="btn btn-primary" :to="{path:'/browse/editbarang/'+b.id}">Edit</router-link>
                <button class="btn btn-danger" @click="deletebarang(b.id)">Delete</button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name : "barang",
    data()
    {
        return{
            barang:[],
            search:"",
        }
    },
    methods:{
        tm_barang:function()
        {
            this.axios.get("http://localhost/toko_lapak/public/api/get_barang").then((result)=>
            {
                this.barang = result.data
            })
        },
        cari_barang:function()
        {
            var data_cari=""

            if(this.search==""){
                data_cari = ""    
            }else{
                data_cari = this.search
            }
            this.axios.get("http://localhost/toko_lapak/public/api/get_barang/"+data_cari).then((result)=>
            {
                this.barang = result.data
            })
        },
        deletebarang:function(id){
            this.axios.delete("http://localhost/toko_lapak/public/api/deletebarang/"+id).then((result)=>{
                alert(result.data.message)
                this.tm_barang()
            })
        }
    },
    mounted()
    {
        this.tm_barang()
    }
}
</script>