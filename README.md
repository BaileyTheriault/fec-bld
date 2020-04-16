# BLD FEC

### Current Host
The API can currently be found at ?

# Bug Ticket API
### List Tickets

Retrieves a list of all bug tickets.

`GET /api/bug`

Response

`Status: 200 OK `

```json
[{
   "title": "Asynchronous Swim",
   "author": {
      "name": "Bailey Theriault",
      "profilePicture": "https://bit.ly/2wJ3yRE"
   },
   "description": "How does this sprint still exist?",
   "threat": "Critical",
   "createdAt": "2020-04-16T16:04:38.597Z",
   "completedAt": "Field will not exist unless applicable",
   "id": 1,
   "tags": [
      "Team Exact Science"
   ]
}, ...]
```

### Add Bug Ticket

Adds a bug ticket

`POST /api/bug`

Body Parameters

| Parameter             	| Type             	| Description                                 	|
|-----------------------	|------------------	|---------------------------------------------	|
| title                 	| text             	| title of bug                                	|
| author                	| object           	| contains a name & profile picture property  	|
| author.name           	| text             	| name of author                              	|
| author.profilePicture 	| text             	| url link to profile picture                 	|
| description           	| text             	| description of the bug                      	|
| threat                	| text             	| options are Critical/Important/Low-Priority 	|
| tags                  	| array of strings 	| all tags associated with said bug           	|

Response

`Status: 201 CREATED`

`'Ticket ID'`

### Update Bug Ticket

Updates a bug ticket

`PATCH /api/bug/:bugId`

Body Parameters

| Parameter             	| Type             	| Description                                 	|
|-----------------------	|------------------	|---------------------------------------------	|
| title                 	| text             	| title of bug                                	|
| author                	| object           	| contains a name & profile picture property  	|
| author.name           	| text             	| name of author                              	|
| author.profilePicture 	| text             	| url link to profile picture                 	|
| description           	| text             	| description of the bug                      	|
| threat                	| text             	| options are Critical/Important/Low-Priority 	|
| tags                  	| array of strings 	| all tags associated with said bug           	|

Response

`Status: 204 No Content`

### Resolve Bug Ticket

Mark a bug ticket as completed

`PUT /api/bug/:bugId`

Response

`Status: 204 No Content`