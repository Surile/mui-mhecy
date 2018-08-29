		mui.init();
		mui.plusReady(function() {
		var loginButton = document.getElementById("login");
		var regButton = document.getElementById("regin");
		loginButton.addEventListener('click', function(event) {
			$.openWindow({
				url: '../../login/login.html',
				id: 'login',
				preload: true,
				show: {
					aniShow: 'pop-in'
				},
				styles: {
					popGesture: 'hide'
				},
				waiting: {
					autoShow: false
				}
			});
		}, false);
	})

