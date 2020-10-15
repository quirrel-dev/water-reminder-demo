export default function Home() {
  return (
    <main>
      <h1>
        Water Drinking Reminder
      </h1>

      <p>
        I want to be reminded under the following e-mail:
      </p>

      <form
        onSubmit={async (evt) => {
          evt.preventDefault();
          const formData = new FormData(evt.target);
          const email = formData.get("email");
          await fetch("/api/setupReminder", { method: "POST", body: email });
          alert("Thanks for using the water reminder. We'll start reminding you in 30 minutes :)")
        }}
      >
        <input
          name="email"
          type="email"
          placeholder="E-Mail"
        />
        <button type="submit">
          Submit
        </button>
      </form>
    </main>
  );
}