<script lang="ts">
import Login from './lib/Login.svelte'
import Livewire from './lib/Livewire.svelte';
import { auth, onAuth } from './firebase';
let showlogin:boolean = true;
onAuth((user:any) => {
 if (user) {
  console.info("User is signed in with uid: " + user.uid);
  showlogin = false;
 }
 else {
  console.info("User is signed out");
  showlogin = true;
}});
</script>
{#if (showlogin == true)}
 <Login />
{:else if (showlogin == false)}
 <Livewire />
{/if}