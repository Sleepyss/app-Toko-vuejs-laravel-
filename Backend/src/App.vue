<template>

  <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active"><router-link class="nav-link" to="/">Home</router-link></li>
      <li class="nav-item"><router-link class="nav-link" to="/browse">Browse</router-link></li>
      <li class="nav-item"><router-link class="nav-link" to="#">||</router-link></li>
      <li class="nav-item"><router-link class="nav-link" to="/about">About</router-link></li>
      <li class="nav-item"><router-link class="nav-link" to="/contact">Contact</router-link></li>
    </ul>
    <ul class="navbar-nav">
      <li class="nav-item"><router-link class="nav-link" to="/Tambahbarang">Add Item (admin only)</router-link></li>    
      <span style="font-size: 21px;color: white;padding-left: 15px; padding-top: 3px;">
        <i class="fas fa-shopping-cart"></i>
      </span>
      <li class="nav-item" style="padding-right:13px;"><router-link class="nav-link" to="/cart">Cart</router-link></li>
      <span style="font-size: 21px;color: white;padding-left: 10px; padding-top: 3px; padding-right: 5px">
        <i class="fas fa-user" style=""></i>
      </span>
    </ul>
  </nav>

    <br><br>

  <div class="container-fluid"> 
    <router-view></router-view>
  </div>

</template>

<script>
export default {
  name: 'App',
}
</script>

