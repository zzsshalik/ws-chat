function Notifications(newMessages) {
  if (newMessages.length === 1) {
    new Notification(newMessages[0].from, { body: newMessages[0].message });
  }
}
export default Notifications;
