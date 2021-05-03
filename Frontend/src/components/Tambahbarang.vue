<template>
    <div class="container">
        Nama Barang
        <input type="text" class="form-control" v-model="nama_barang">
        
        Tipe Barang
        <select name="tipe_barang" v-model="tipe_barang" class="form-control">
            <option></option>
            <option v-for="tipe in listbarang" :key="tipe.id" v-bind:value="tipe.id">{{tipe.nama_tipe}}</option>
        </select>
        
        Deskripsi Barang
        <input type="text" class="form-control" v-model="deskripsi">
        
        Harga
        <input type="text" class="form-control" v-model="harga">
        
        <br>
        
        <button class="btn btn-success" @click="save()">Save</button>
        <div v-bind:class="style_message">
            <div v-if="error==true">
                <div v-for="msg in message" :key="msg.id">
                    <p v-for="m in msg" :key="m.id">{{m}}</p>
                </div>
            </div>
            <p v-else>{{message}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name:"Tambahbarang",
    data(){
        return{
            listbarang:[],
            nama_barang:'',
            deskripsi:'',
            harga:'',
            style_message:'',
            message:'',
            error:false,
        }    
    },
    methods:{
        gettipe:function(){
            this.axios.get("http://localhost/toko_lapak/public/api/get_tipe").then((result)=>{
                this.listbarang=result.data
            })
        },
        save:function(){
            var databarang = {
                nama_barang:this.nama_barang,
                tipe_barang:this.tipe_barang,
                deskripsi:this.deskripsi,
                harga:this.harga
                }

            this.axios.post("http://localhost/toko_lapak/public/api/savebarang",databarang).then((result)=>{
                
                if(result.data.status==true){
                    this.error=false
                    this.message=result.data.message
                    this.style_message="alert alert-success"
                    setTimeout(()=>{
                        this.$router.push('/browse')
                    },2000)
                }
                else{
                    this.error =true
                    this.style_message="alert alert-danger"
                    this.message=result.data.message
                }
            })
        }
    },
    mounted(){
        this.gettipe()
    }
}
</script>
