function addFields(program) {
    // Update the selected program field
    document.getElementById('programSelected').value = program;

    // Clear existing dynamic fields
    const dynamicFields = document.getElementById('dynamicFields');
    dynamicFields.innerHTML = '';

    // Add fields based on the selected program
    if (program === 'Funding Support') {
        dynamicFields.innerHTML = `
            <label for="fundingAmount">Requested Funding Amount:</label>
            <input type="number" id="fundingAmount" name="fundingAmount" placeholder="Enter amount in INR" required>
            
            <label for="usagePlan">Planned Usage of Funds:</label>
            <textarea id="usagePlan" name="usagePlan" placeholder="Briefly describe how funds will be used" required></textarea>
        `;
    } else if (program === 'Tax Benefits') {
        dynamicFields.innerHTML = `
            <label for="companyRegistration">Company Registration Number:</label>
            <input type="text" id="companyRegistration" name="companyRegistration" placeholder="Enter your registration number" required>
            
            <label for="taxExemptionReason">Reason for Tax Exemption:</label>
            <textarea id="taxExemptionReason" name="taxExemptionReason" placeholder="Describe why your startup qualifies" required></textarea>
        `;
    } else if (program === 'Incubation Centers') {
        dynamicFields.innerHTML = `
            <label for="incubationLocation">Preferred Incubation Location:</label>
            <input type="text" id="incubationLocation" name="incubationLocation" placeholder="Enter location or city" required>
            
            <label for="supportNeeded">Type of Support Needed:</label>
            <textarea id="supportNeeded" name="supportNeeded" placeholder="Describe the support you need (e.g., infrastructure, mentorship)" required></textarea>
        `;
    }
}

document.getElementById('applicationForm').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Thank you for submitting your application! Our team will review it and get back to you shortly.');
});
// Navbar Toggle for Mobile View
document.querySelector('.burger').addEventListener('click', function () {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});

