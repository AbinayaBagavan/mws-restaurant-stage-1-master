if('serviceWorker' in navigator) {
	window.addEventListener('load',function() {
		navigator.serviceWorker.register('/offline-page.js')
		.then(function(reg) {
			console.log("Service worker registered",reg.scope);
		})
		.catch(function(err) {
			console.log("registration failed");
		});
	});
}