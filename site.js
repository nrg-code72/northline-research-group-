
const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.navlinks');
if(btn && nav){
  btn.addEventListener('click',()=>nav.classList.toggle('open'));
}
const intake = document.querySelector('#str-intake');
if(intake){
  intake.addEventListener('submit',function(e){
    e.preventDefault();
    const d = new FormData(intake);
    const lines = [
      `Name: ${d.get('name')||''}`,
      `Email: ${d.get('email')||''}`,
      `Phone: ${d.get('phone')||''}`,
      ``,
      `Property address: ${d.get('address')||''}`,
      `Parcel number: ${d.get('parcel')||'Not provided'}`,
      `Relationship to property: ${d.get('relationship')||''}`,
      `Service needed: ${d.get('service')||''}`,
      ``,
      `Existing STR permit/registration number: ${d.get('strpermit')||'Not provided'}`,
      `Existing business/privilege license number: ${d.get('businesslicense')||'Not provided'}`,
      `Known expiration date(s): ${d.get('expiration')||'Not provided'}`,
      ``,
      `Additional details:`,
      `${d.get('details')||''}`
    ];
    window.location.href = `mailto:northlineresearchgroup@gmail.com?subject=${encodeURIComponent('Northline STR Compliance Request')}&body=${encodeURIComponent(lines.join('\n'))}`;
  });
}
