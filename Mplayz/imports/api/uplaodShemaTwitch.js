import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

// ################### REQUEST CREATE URL ##############
// curl -H 'Accept: application/vnd.twitchtv.v5+json' \
// -H 'Authorization: OAuth cfabdegwdoklmawdzdo98xt2fo512y' \
// -H 'Client-ID: uo6dggojyb8d6soh92zknwmi5ej1q2' \
// -X POST 'https://api.twitch.tv/kraken/videos?channel_id=44322889&title=Test video')

const uplaodCreate = {
"upload": {
		"token": "7_STl2gsKwDy1mHj2k95ld3aodDl3E_NzzQdSlN9ll0p6Ct0xFhvrO5bWu7tGUKEH5jtD_hjB9q3X4vTOQ000B1UcmMxduT30FuHhAmFYgYf7DoJE9PVvGRZqk9WQAR2ZGphUpj_237smnjE2gMoaQ--",
		"url": "https://uploads.twitch.tv/upload/132561385"
	},
	"video": {
		"title": "Test video",
		"description": "",
		"description_html": "",
		"broadcast_id": 1,
		"broadcast_type": "upload",
		"status": "created",
		"tag_list": "",
		"views": 0,
		"url": "https://www.twitch.tv/videos/132561385",
		"language": "en",
		"created_at": "2017-03-31T22:59:00Z",
		"viewable": "public",
		"viewable_at": null,
		"published_at": null,
		"_id": "v106400740",
		"recorded_at": "2017-03-31T22:59:00Z",
		"game": "",
		"length": 0,
		"preview": {
			"small": "https://vod-secure.twitch.tv/_404/404_processing_80x45.png",
			"medium": "https://vod-secure.twitch.tv/_404/404_processing_320x180.png",
			"large": "https://vod-secure.twitch.tv/_404/404_processing_640x360.png",
			"template": "https://vod-secure.twitch.tv/_404/404_processing_{width}x{height}.png"
		},
		"animated_preview_url": "https://vod-storyboards.twitch.tv/dallas/132561385/1d283591-a423-4f57-9656-a332d3949b55/storyboards/132561385-strip-0.jpg",
		"thumbnails": {
			"small": [],
			"medium": [],
			"large": [],
			"template": []
		},
		"fps": {},
		"resolutions": {},
		"channel": {
			"_id": "44322889",
			"name": "dallas",
			"display_name": "dallas"
		}
	}
}
// ####################################################################################################################################################

// ################### REQUEST UPPLOED URL ##############
// curl -H 'Accept: application/vnd.twitchtv.v5+json' \
// -H 'Authorization: OAuth cfabdegwdoklmawdzdo98xt2fo512y' \
// -H 'Client-ID: uo6dggojyb8d6soh92zknwmi5ej1q2' \
// -X PUT 'https://api.twitch.tv/kraken/videos/106400740?title=Updated test video'


const uplaodUpdate = {
    "title": "Updated test video",
    "description": "Protect your chat with AutoMod! ",
    "description_html": "Protect your chat with AutoMod!<br>",
    "broadcast_id": 1,
    "broadcast_type": "upload",
    "status": "recorded",
    "tag_list": "",
    "views": 11606,
    "url": "https://www.twitch.tv/videos/106400740",
    "language": "en",
    "created_at": "2016-12-10T00:46:44Z",
    "viewable": "public",
    "viewable_at": null,
    "published_at": "2016-12-12T18:19:18Z",
    "_id": "v106400740",
    "recorded_at": "2016-12-10T00:46:44Z",
    "game": "",
    "length": 29,
    "preview": {
        "small": "https://static-cdn.jtvnw.net/s3_vods/twitch/106400740/f2979575-fa80-4ad9-9665-a074d510a03a/thumb/index-0000000000-80x45.jpg",
        "medium": "https://static-cdn.jtvnw.net/s3_vods/twitch/106400740/f2979575-fa80-4ad9-9665-a074d510a03a/thumb/index-0000000000-320x180.jpg",
        "large": "https://static-cdn.jtvnw.net/s3_vods/twitch/106400740/f2979575-fa80-4ad9-9665-a074d510a03a/thumb/index-0000000000-640x360.jpg",
        "template": "https://static-cdn.jtvnw.net/s3_vods/twitch/106400740/f2979575-fa80-4ad9-9665-a074d510a03a/thumb/index-0000000000-{width}x{height}.jpg"
    },
    "animated_preview_url": "https://vod-storyboards.twitch.tv/twitch/106400740/f2979575-fa80-4ad9-9665-a074d510a03a/storyboards/106400740-strip-0.jpg",
    "thumbnails": {
        "small": [
            {
                "type": "generated",
                "url": "https://static-cdn.jtvnw.net/s3_vods/twitch/106400740/f2979575-fa80-4ad9-9665-a074d510a03a/thumb/index-0000000000-80x45.jpg"
            }
        ],
        "medium": [
            {
                "type": "generated",
                "url": "https://static-cdn.jtvnw.net/s3_vods/twitch/106400740/f2979575-fa80-4ad9-9665-a074d510a03a/thumb/index-0000000000-320x180.jpg"
            }
        ],
        "large": [
            {
                "type": "generated",
                "url": "https://static-cdn.jtvnw.net/s3_vods/twitch/106400740/f2979575-fa80-4ad9-9665-a074d510a03a/thumb/index-0000000000-640x360.jpg"
            }
        ],
        "template": [
            {
                "type": "generated",
                "url": "https://static-cdn.jtvnw.net/s3_vods/twitch/106400740/f2979575-fa80-4ad9-9665-a074d510a03a/thumb/index-0000000000-{width}x{height}.jpg"
            }
        ]
    },
    "fps": {
        "1080p": 23.976766175874648,
        "144p": 23.976766175874648,
        "240p": 23.976766175874648,
        "360p": 23.976766175874648,
        "480p": 23.976766175874648,
        "720p": 23.976766175874648
    },
    "resolutions": {
        "1080p": "1920x1080",
        "144p": "256x144",
        "240p": "426x240",
        "360p": "640x360",
        "480p": "852x480",
        "720p": "1280x720"
    },
    "channel": {
        "_id": "44322889",
        "name": "dallas",
        "display_name": "dallas"
    }
}
// ####################################################################################################################################################

// ################### REQUEST UPPLOED URL ##############
curl -H 'Accept: application/vnd.twitchtv.v5+json' \
-H 'Authorization: OAuth cfabdegwdoklmawdzdo98xt2fo512y' \
-H 'Client-ID: uo6dggojyb8d6soh92zknwmi5ej1q2' \
-X DELETE 'https://api.twitch.tv/kraken/videos/106400740'

const uploedDelete = 
// 200 OK
// {"ok":"true"}

export default UplaodTwitchCollection;

