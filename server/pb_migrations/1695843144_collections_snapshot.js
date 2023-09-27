/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const snapshot = [
    {
      "id": "5eu3r1y467ogk6x",
      "created": "2023-09-23 09:05:26.404Z",
      "updated": "2023-09-26 18:53:58.859Z",
      "name": "navigation",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "egkoshza",
          "name": "title",
          "type": "text",
          "required": true,
          "presentable": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "zht5gmls",
          "name": "path",
          "type": "text",
          "required": true,
          "presentable": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        }
      ],
      "indexes": [],
      "listRule": "",
      "viewRule": "",
      "createRule": null,
      "updateRule": null,
      "deleteRule": null,
      "options": {}
    },
    {
      "id": "2c9yiyntg23t6n2",
      "created": "2023-09-23 11:12:34.167Z",
      "updated": "2023-09-26 18:53:58.859Z",
      "name": "coaches",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "umdgokz6",
          "name": "name",
          "type": "text",
          "required": true,
          "presentable": false,
          "unique": false,
          "options": {
            "min": null,
            "max": 126,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "wda6dqzw",
          "name": "position",
          "type": "text",
          "required": true,
          "presentable": false,
          "unique": false,
          "options": {
            "min": null,
            "max": 256,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "fqctalrf",
          "name": "image",
          "type": "file",
          "required": true,
          "presentable": true,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "maxSize": 5242880,
            "mimeTypes": [
              "image/png",
              "image/vnd.mozilla.apng",
              "image/jpeg",
              "image/gif",
              "image/webp",
              "image/svg+xml"
            ],
            "thumbs": [],
            "protected": false
          }
        },
        {
          "system": false,
          "id": "qthblobj",
          "name": "dan",
          "type": "text",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "3xigtrxq",
          "name": "description",
          "type": "editor",
          "required": true,
          "presentable": true,
          "unique": false,
          "options": {
            "convertUrls": false
          }
        }
      ],
      "indexes": [],
      "listRule": "",
      "viewRule": "",
      "createRule": null,
      "updateRule": null,
      "deleteRule": null,
      "options": {}
    },
    {
      "id": "vl77qjcin58paxr",
      "created": "2023-09-23 11:24:57.204Z",
      "updated": "2023-09-26 18:53:58.860Z",
      "name": "partners",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "gjp3tawb",
          "name": "title",
          "type": "text",
          "required": true,
          "presentable": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "lxfhbpiv",
          "name": "url",
          "type": "url",
          "required": true,
          "presentable": false,
          "unique": false,
          "options": {
            "exceptDomains": null,
            "onlyDomains": null
          }
        },
        {
          "system": false,
          "id": "kago47lz",
          "name": "image",
          "type": "file",
          "required": true,
          "presentable": true,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "maxSize": 5242880,
            "mimeTypes": [
              "image/png",
              "image/vnd.mozilla.apng",
              "image/jpeg",
              "image/gif",
              "image/webp",
              "image/svg+xml"
            ],
            "thumbs": [],
            "protected": false
          }
        }
      ],
      "indexes": [],
      "listRule": null,
      "viewRule": null,
      "createRule": "",
      "updateRule": "",
      "deleteRule": "",
      "options": {}
    },
    {
      "id": "ao30zysapzyedfq",
      "created": "2023-09-24 16:45:58.891Z",
      "updated": "2023-09-26 18:53:58.860Z",
      "name": "pages",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "crsutnja",
          "name": "navigation",
          "type": "relation",
          "required": true,
          "presentable": false,
          "unique": false,
          "options": {
            "collectionId": "5eu3r1y467ogk6x",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": null
          }
        },
        {
          "system": false,
          "id": "yeqbzou2",
          "name": "title",
          "type": "text",
          "required": true,
          "presentable": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "dxxjqzfl",
          "name": "description",
          "type": "editor",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "convertUrls": false
          }
        },
        {
          "system": false,
          "id": "mlalfk72",
          "name": "preview",
          "type": "file",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "maxSize": 5242880,
            "mimeTypes": [
              "image/png",
              "image/vnd.mozilla.apng",
              "image/jpeg",
              "image/gif",
              "image/webp",
              "image/svg+xml"
            ],
            "thumbs": [],
            "protected": false
          }
        },
        {
          "system": false,
          "id": "vyczmyne",
          "name": "content",
          "type": "editor",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "convertUrls": false
          }
        },
        {
          "system": false,
          "id": "pe8o8vdk",
          "name": "payload",
          "type": "json",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {}
        }
      ],
      "indexes": [],
      "listRule": "",
      "viewRule": "",
      "createRule": null,
      "updateRule": null,
      "deleteRule": null,
      "options": {}
    }
  ];

  const collections = snapshot.map((item) => new Collection(item));

  return Dao(db).importCollections(collections, true, null);
}, (db) => {
  return null;
})
