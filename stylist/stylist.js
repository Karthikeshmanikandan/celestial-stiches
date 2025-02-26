const stylists =[
    { name: "Katie Williams", expertise: "Blowouts", experience: "6 years" },
    { name: "Liam King", expertise: "Haircut & Styling", experience: "5 years" },
    { name: "Mia Moore", expertise: "Hair Tattoos", experience: "4 years" },
    { name: "Nathaniel Clark", expertise: "Haircuts for Seniors", experience: "8 years" },
    { name: "Olivia White", expertise: "Updos", experience: "7 years" },
    { name: "Paul Harris", expertise: "Hair Treatments", experience: "5 years" },
  ]
  
const stylistList = document.getElementById("stylist-list");

stylists.forEach(stylist => {
    const stylistCard = document.createElement("div");
    stylistCard.classList.add("stylist-card");
    stylistCard.innerHTML = `
        <h3>${stylist.name}</h3>
        <p><strong>Expertise:</strong> ${stylist.expertise}</p>
        <p><strong>Experience:</strong> ${stylist.experience}</p>
        <button onclick="bookStylist('${stylist.name}')">Book Now</button>
    `;
    stylistList.appendChild(stylistCard);
});
function bookStylist(name) {
    // Redirect to the booking page with stylist's name as a query parameter
    window.location.href = `/booking.html?stylist=${encodeURIComponent(name)}`;
}
