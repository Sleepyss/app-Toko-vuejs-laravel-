<template>
    <div class="container">
        <input class="form-control" type="hidden" name="id_barang" v-model="id_barang">

        Nama Barang
        <input type="text" class="form-control" v-model="nama_barang">
        
        Tipe Barang
        <select name="tipe_barang" v-model="tipe_barang" class="form-control">
            <option></option>
            <option v-for="tipe in listbarang" :key="tipe.id" v-bind:value="tipe.id">{{tipe.nama_tipe}}</option>
        </select>
        
        Deskripsi Barang
        <textarea class="form-control" name="deskripsi" id="deskripsi" rows="4" v-model="deskripsi"></textarea>

        Harga
        <input type="text" class="form-control" v-model="harga">
        
        <br>
        
        <button class="btn btn-primary" @click="editbarang()">Edit</button>

        <br>
        
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
    name: "Editbarang",
    data(){
        return{
            listbarang:[],
            nama_barang:'',
            deskripsi:'',
            harga:'',
            id_barang:''
        }    
    },
    methods:{
        gettipe:function(){
            this.axios.get("http://localhost/toko_lapak/public/api/get_tipe").then((result)=>{
                this.listbarang=result.data
            })
        },

        getdetail:function(id){
            this.axios.get("http://localhost/toko_lapak/public/api/getdetail/"+id).then((result)=>{
                this.id_barang = result.data.id,
                this.nama_barang = result.data.nama_barang,
                this.tipe_barang = result.data.tipe_barang,
                this.deskripsi = result.data.deskripsi,
                this.harga = result.data.harga,
                console.log(result)
            })
        },

        editbarang:function(){
            var databarang = {
                nama_barang:this.nama_barang,
                tipe_barang:this.tipe_barang,
                deskripsi:this.deskripsi,
                harga:this.harga
                }

            this.axios.put("http://localhost/toko_lapak/public/api/editbarang/"+this.id_barang, databarang).then((result)=>{
                
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
        this.getdetail(this.$route.params.id)
    }
}
</script>
