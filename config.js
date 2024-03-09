/* MagicMirror² Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 *
 * You can use environment variables using a `config.js.template` file instead of `config.js`
 * which will be converted to `config.js` while starting. For more information
 * see https://docs.magicmirror.builders/configuration/introduction.html#enviromnent-variables
 */
let config = {
	address: "localhost",	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/",	// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
									// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],	// Set [] to allow all IP addresses
									// or add a specific IPv4 of 192.168.1.5 :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
									// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false,			// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "",	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "",	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "middle_center"
		},
		{
			module: 'MMM-Cursor',
			config: {
				timeout: "1000"
			}
		},
        {
			module: "MMM-TouchButton", //for devices with touch
			position: "bottom",
			config: {
			 buttons: [
			  {
			   name: "Shutdown",
			   icon: "fa fa-power-off",
			   command: "shutdown -h now"
			  },
			  {
			   name: "Reboot",
			   icon: "fa fa-refresh",
			   command: "reboot",
			  }
			 ]
			},
		   },
		{
			module: "MMM-Meniny",
			  position: "middle_center",
			  config: {
				//message: "Today is <i>$TODAY$</i>. <br/> Tomorrow is <i>$TOMORROW$</i>." (in English language)
				message: "Dnes má meniny: <i>$TODAY$</i>. <br/> Zajtra má meniny: <i>$TOMORROW$</i>." //in Slovak language
			  // you can use $TODAY$ as name of today, $TOMORROW$ as name of tomorrow.
			  }
		  },
		  {
			module: "MMM-birthdays",
			position: "center",
			config: {
				notify_days_before: 14,
				update_interval: 600,
				opacity: true,
				title: "Birthdays",
				locale: "en-US",
				show_no_birthdays: true,
				birthdays: [
					{
						name: "Example",
						dob: "1999-09-19"
					},
				]
			}
		},
		  {
			module: 'MMM-GoogleCalendar',
			header: "Calendar",
			position: "top_left",
			config: {
				calendars: [
					// add here your calendar
				],
			}
		},
		{
			module: "MMM-Bring",
			position: "bottom_right",
			config: {
			   email: "example@example.com",
			   password: "example",
			   updateInterval: 0.25, // in Minutes
			   showListName: false,
			   activeItemColor: "#EE524F",
			   latestItemColor: "#4FABA2",
			   showLatestItems: false,
			   maxItems: 0,
			   maxLatestItems: 0,
			   locale: "en-US",
			   useKeyboard: false,
			   customTitle: "My shopping list", // optional
			   listDropdown: true
			}
		},
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openweathermap",
				type: "current",
				location: "Myjava",
				locationID: "3058611", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "YOUR API KEY"
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openweathermap",
				type: "forecast",
				location: "Myjava",
				locationID: "3058611", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "YOUR API KEY",
				maxNumberOfDays: "5"
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "SME.sk", // our Slovak newsportal
						url: "https://www.sme.sk/rss-title"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
		{
			module: "MMM-Wallpaper",
			position: "fullscreen_below",
			config: {
				//source: ["/r/cityporn+foodporn"],
				source: ["/r/cityporn"],
				crossfade: false,
				slideInterval: 3 * 60 * 1000,
				//orientation: "vertical",
				//maximumEntries: 10,
			}
		}
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
