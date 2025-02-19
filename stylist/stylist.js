const stylists =[
    { name: "Katie Williams", expertise: "Blowouts", experience: "6 years" },
    { name: "Liam King", expertise: "Haircut & Styling", experience: "5 years" },
    { name: "Mia Moore", expertise: "Hair Tattoos", experience: "4 years" },
    { name: "Nathaniel Clark", expertise: "Haircuts for Seniors", experience: "8 years" },
    { name: "Olivia White", expertise: "Updos", experience: "7 years" },
    { name: "Paul Harris", expertise: "Hair Treatments", experience: "5 years" },
    { name: "Quinn Parker", expertise: "Men's Grooming", experience: "6 years" },
    { name: "Rachel Lewis", expertise: "Keratin Treatments", experience: "9 years" },
    { name: "Samuel Hall", expertise: "Haircut Design", experience: "3 years" },
    { name: "Tara Scott", expertise: "Wigs & Hairpieces", experience: "7 years" },
    { name: "Ursula Collins", expertise: "Hair Cutting & Styling", experience: "10 years" },
    { name: "Victor Turner", expertise: "Shaving & Grooming", experience: "4 years" },
    { name: "Wendy Campbell", expertise: "Hair Extensions & Color", experience: "6 years" },
    { name: "Xander Morris", expertise: "Hair Cutting & Scalp Care", experience: "5 years" },
    { name: "Yvonne Adams", expertise: "Special Occasion Hair", experience: "7 years" },
    { name: "Zachary Carter", expertise: "Creative Styling", experience: "8 years" },
    { name: "Ariana Stevens", expertise: "Bridal Makeup", experience: "4 years" },
    { name: "Bella Brooks", expertise: "Hair Rejuvenation", experience: "6 years" },
    { name: "Caleb Mitchell", expertise: "Buzzcuts", experience: "3 years" },
    { name: "Daphne Allen", expertise: "Color Correction", experience: "9 years" },
    { name: "Elliot Young", expertise: "Lash Extensions", experience: "5 years" },
    { name: "Felicity Green", expertise: "Men's Hair Color", experience: "7 years" },
    { name: "Gavin Davis", expertise: "Texturizing & Layering", experience: "6 years" },
    { name: "Holly Parker", expertise: "Pixie Cuts", experience: "5 years" },
    { name: "Isaac Evans", expertise: "Hair Cutting & Texturing", experience: "8 years" },
    { name: "Jasmine Taylor", expertise: "Coloring & Styling", experience: "7 years" },
    { name: "Kyle Roberts", expertise: "Professional Barbering", experience: "6 years" },
    { name: "Leah Martinez", expertise: "Afro Hairstyles", experience: "5 years" },
    { name: "Max Stone", expertise: "Men's Haircuts & Beard Styling", experience: "4 years" },
    { name: "Nina Ford", expertise: "Hair Accessories", experience: "6 years" },
    { name: "Owen Lee", expertise: "Hair Updos & Extensions", experience: "7 years" },
    { name: "Penny Ross", expertise: "Organic Haircare", experience: "6 years" },
    { name: "Quincy Baker", expertise: "Grooming & Haircuts", experience: "5 years" },
    { name: "Rachel Grant", expertise: "Precision Cutting", experience: "9 years" },
    { name: "Sophie Nelson", expertise: "Shag Cuts", experience: "4 years" },
    { name: "Tyler Wright", expertise: "Haircuts for Men", experience: "6 years" },
    { name: "Uma Simpson", expertise: "Bridal Hairstyles", experience: "7 years" },
    { name: "Vera Howard", expertise: "Advanced Coloring", experience: "8 years" },
    { name: "Wesley Walker", expertise: "Hair Coloring & Styling", experience: "6 years" },
    { name: "Xena Mitchell", expertise: "Curly Hair Cutting", experience: "5 years" },
    { name: "Yara Patterson", expertise: "Custom Haircuts", experience: "7 years" },
    { name: "Zane Brooks", expertise: "Color & Texture Services", experience: "8 years" },
    { name: "Amber Hayes", expertise: "Hair Relaxing", experience: "4 years" },
    { name: "Blake Scott", expertise: "Men's Grooming & Shaving", experience: "5 years" },
    { name: "Carmen Campbell", expertise: "Hair Weaving", experience: "6 years" },
    { name: "Dean Mitchell", expertise: "Perming & Texturizing", experience: "7 years" },
    { name: "Elle Gonzalez", expertise: "Hair Cutting for Fine Hair", experience: "5 years" },
    { name: "Francis Johnson", expertise: "Bridal Hair Design", experience: "6 years" },
    { name: "Giselle Martin", expertise: "Asian Haircuts", experience: "7 years" },
    { name: "Harrison Clark", expertise: "Smoothing & Treatment", experience: "8 years" },
    { name: "Isabella Harris", expertise: "Bangs & Fringe Cuts", experience: "5 years" },
    { name: "Jackson Allen", expertise: "Blonde Highlights", experience: "6 years" }
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
    alert(`You have booked an appointment with ${name}!`);
}