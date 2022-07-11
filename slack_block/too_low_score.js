const blocks={
	"blocks": [
		{
			"type": "header",
			"text": {
				"type": "plain_text",
				"text": "Hola",
				"emoji": true
			}
		},
		{
			"type": "section",
			"text": {
				"type": "plain_text",
				"text": "⚠ !Atencion!\n El score de la app esta demasiado bajo.:",
				"emoji": true
			}
		},
		{
			"type": "header",
			"text": {
				"type": "plain_text",
				"text": "2.5⭐️",
				"emoji": true
			}
		},
		{
			"type": "context",
			"elements": [
				{
					"type": "mrkdwn",
					"text": "Obtenido de Google Playstore"
				},
				{
					"type": "image",
					"image_url": "https://cdn.iconscout.com/icon/free/png-256/google-play-store-2038773-1721660.png",
					"alt_text": "App"
				}
			]
		},
		{
			"type": "actions",
			"elements": [
				{
					"type": "button",
					"text": {
						"type": "plain_text",
						"text": "App"
					},
					"url": "https://play.google.com/store/apps/details?id="
				},
				{
					"type": "button",
					"text": {
						"type": "plain_text",
						"text": "Scoring Historial",
						"emoji": true
					},
					"url": "https://play.google.com/store/apps/details?id="
				}
			]
		}
	]
}
module.exports ={
		blocks
	}
