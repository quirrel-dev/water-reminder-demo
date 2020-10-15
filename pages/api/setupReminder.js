import reminderQueue from "./queues/reminder";

// pages/api/setupReminder.js
export default async (req, res) => {
  const email = req.body;
  await reminderQueue.enqueue(email, {
    id: email,
    delay: 30 * 60 * 60 * 1000,
    repeat: {
      every: 30 * 60 * 60 * 1000, // 30 minutes
      times: 16, // 16 * 30min = 8h
    },
  });
  res.status(200).end();
};
