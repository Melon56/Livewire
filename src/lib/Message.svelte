<script lang="ts">
import { removeDb, auth, onDbRemoved } from '../firebase';
export let message:any;
let timestamp = new Date(message.timestamp).toLocaleString();
onDbRemoved("messages/" + message.timestamp, (snap:any) => {
 if (snap.val() == message.timestamp) {
  document.getElementById(message.timestamp).remove();
}});
</script>
<div class="message-container" id="{message.timestamp}">
 <img class="pfp" src="{message.pfp}" alt="pfp">
 <h3 class="name">{message.username}:<span class="timestamp"> at {timestamp}</span></h3>
 <div class="message-subcontainer">
  <p class="message">{message.message}</p>
  {#if auth.currentUser.uid == "/*admins who can delete messages(uid)*/"}
   <button class="delete-btn" on:click={() => {removeDb("messages/" + message.timestamp)}}>Delete</button>
  {/if}
 </div>
</div>
