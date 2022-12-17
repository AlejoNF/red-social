# Red social API 

# url base: http://localhost:9000/api/v1

- /users
    - /me -> Mi informacion de usuario
    - /:id -> Mi informacion de usuario
    - /:id/follow -> 
    - /posts
- /auth
    - /login -> Login con las credenciales del usuario para autenticar 
- /posts
    - /me -> Mis propias publicaciones
    - /user/:id -> Publicaciones d eusuarios en particular
    - /:id -> Una publicacion en especifico
    - /:id/comments -> los comentarios de una publicacion en especifico
    - /:id/likes -> los likes de una publicacion en especifico


- follows
    -/:id

- followers
    -/:id

### Controllers
- [x] findAllPosts
- [x] findPostById
- [x] createPost
- [x] updatePost
- [x] removePost


### Services Posts

- [] getAllPosts
- [] getPostById
- [] postNewPost
- [] updatePost
- [] putPost
- [] removePost