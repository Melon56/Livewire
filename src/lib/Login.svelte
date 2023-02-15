<script lang="ts">
import { slide } from 'svelte/transition';
import { auth, signInUser } from '../firebase'
let email: string;
let password: string;
</script>
 <div class="login column" transition:slide>
 <form class="login-frm column" on:submit|preventDefault={()=>{signInUser(email, password)}} transition:slide>
  <h1 class="login-txt" transition:slide>Login to LiveWire</h1>
  <input type="email" class="email login-input" placeholder="Email" bind:value={email} transition:slide>
  <input type="password" class="password login-input" placeholder="Password" bind:value={password} transition:slide>
  <button type="submit" class="login-btn login-input" transition:slide>Login</button>
  </form>
</div>