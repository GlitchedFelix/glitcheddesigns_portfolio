// Auto-update footer year
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
});

// Contact form handler (mailto link)
function handleForm(e){
  e.preventDefault();
  const name=document.getElementById("name").value;
  const email=document.getElementById("email").value;
  const message=document.getElementById("message").value;
  const subject=encodeURIComponent(New inquiry from ${name});
  const body=encodeURIComponent(Name: ${name}\nEmail: ${email}\n\nMessage:\n${message});
  window.location.href=mailto:glitcheddesignsinfo@gmail.com?subject=${subject}&body=${body};
}