function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

async function sendMessage() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("msg").value;

  const res = await fetch("http://localhost:5000/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, email, message })
  });

  const data = await res.json();

  if (data.success) {
    alert("Message sent successfully ✅");
  } else {
    alert("Failed to send ❌");
  }

  return false;
}
