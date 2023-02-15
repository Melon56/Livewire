if (Notification.permission !== 'granted') {
  Notification.requestPermission();
}
onmessage = (event) => {
 new Notification(event.data);
}