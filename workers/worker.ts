if (Notification.permission !== 'granted') {
  Notification.requestPermission();
}
onmessage = (event) => {
  new Notification("Livewire", {
  body: event.data,
  vibrate: [200, 100, 200],
  renotify: true,
  requireInteraction: true,
  tag: "livewire",
});
}
