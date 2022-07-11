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
				"text": "Ha subido 📈 el score:",
				"emoji": true
			}
		},
		{
			"type": "header",
			"text": {
				"type": "plain_text",
				"text": "4.0⭐️",
				"emoji": true
			}
		},
		{
			"type": "context",
			"elements": [
				{
					"type": "plain_text",
					"text": "Anterior: 4.5",
					"emoji": true
				}
			]
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
						"text": "App."
					},
					"url": ""
				},
				{
					"type": "button",
					"text": {
						"type": "plain_text",
						"text": "Scoring Historial",
						"emoji": true
					},
					"url": ""
				}
			]
		}
	]
}
module.exports ={
		blocks
	}
