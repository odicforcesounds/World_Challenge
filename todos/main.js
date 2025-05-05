// Replace with your Firebase project's config object
var firebaseConfig = {
  apiKey: "AIzaSyCuKCBNTCeEb5Gia4ysusGIweXDFXaf8hI",
  authDomain: "brands-competition.firebaseapp.com",
  projectId: "brands-competition",
  storageBucket: "brands-competition.appspot.com",
  messagingSenderId: "1000647621475",
  appId: "1:1000647621475:web:a8bdfa8e410ec34ed97156"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the Firebase Realtime Database
var database = firebase.database();

var form = document.getElementById('subscription-form');
var emailInput = document.getElementById('email-input');
// Regular expression pattern for email validation
var emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
// Configure the email service provider
const transporter = nodemailer.createTransport({
  service: '${EMAIL_DOMAIN}',
  secure: true,
  auth: {
    user: '${EMAIL_USERNAME}',
    pass: '${EMAIL_PASSWORD}'
  }
});

// Handle form submission
form.addEventListener('submit', (event) => {
  event.preventDefault();

  var email = emailInput.value;

  if (emailPattern.test(email)) {
    var emailsRef = database.ref('emails');
    emailsRef.push().set({
      email: email
    })
    .then(function() {
      emailInput.value = '';
      sendConfirmationEmail(email);
      alert('Email submitted successfully!');
    })
    .catch(function(error) {
      console.error('Error submitting email:', error);
    });
  } else {
    alert('Please enter a valid email address!');
  }
});

// Function to send the confirmation email
function sendConfirmationEmail(email) {
  var mailOptions = {
    from: '${EMAIL_USERNAME}@${EMAIL_DOMAIN}',
    to: email,
    subject: 'Confirm your subscription',
    text: 'Thank you for subscribing! Please click the link below to confirm your subscription.'
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.error('Error sending confirmation email:', error);
    } else {
      console.log('Confirmation email sent:', info.response);
    }
  });
}

