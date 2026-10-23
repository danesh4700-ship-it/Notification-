self.addEventListener('notificationclick', event => {
  event.notification.close();

  if (event.action === 'open') {
    // وقتی کاربر روی "باز کردن" کلیک کرد
    event.waitUntil(
      clients.openWindow(event.notification.data.url)
    );
  }
  // اگر روی خود نوتیفیکیشن کلیک کرد
  else if (!event.action) {
    event.waitUntil(
      clients.openWindow(event.notification.data.url)
    );
  }
});