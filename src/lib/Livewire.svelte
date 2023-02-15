<script lang="ts">
import Message from './Message.svelte';
import { slide } from 'svelte/transition';
import { auth, onDb, setDb } from '../firebase';
let messagearray:string[] = [];
let messageInput:string;
//new Worker('worker.ts')
onDb("messages/", (snap:any) => {
 messagearray = [...messagearray, snap.val()];
// postMessage(snap.val().username + ": " + snap.val().message);
});
function sendMessage() {
 if (messageInput !== "") {
 let timestamp:number = Date.now();
 setDb("messages/"+timestamp, {
  message: messageInput,
  username: auth.currentUser.displayName,
  timestamp: timestamp,
  pfp: auth.currentUser.photoURL,
});
messageInput = "";
}};
</script>
<div class="messages" transition:slide>
 {#each messagearray as message}
  <Message message={message} />
 {/each}
</div>
<div class="message-input-container" id="message-input-container">
 <form class="message-form" on:submit|preventDefault={sendMessage}>
  <input type="text" class="message-input" placeholder="Type here" autocomplete="off" bind:value={messageInput}/>
  <button type="submit" id="send-btn">Send</button>
 </form>
</div>