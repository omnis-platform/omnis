# Omnis
node module for integration with [Omnis Platform](https://omnis-platform.com)
omnis [npm](https://www.npmjs.com/package/omnis)
omnis-cli [npm](https://www.npmjs.com/package/omnis-cli)

---

+ [Installation](#instalation)
+ [Quick Start](#quick-start)
+ [Methods](#methods)
  - [GET](#get)
  - [POST](#post)
  - [PUT](#put)
  - [PATCH](#patch)
  - [DELETE](#delete)
  - [File](#file)
  - [Email](#email)
  + [User](#user)
    - [Create](#create)
    - [Show](#show)
    - [Edit](#edit)
    - [Login](#login)
    - [Logout](#logout)
    - [Password Reset](#password-reset)
    - [Password Update](#password-update)
    - [Remove](#remove)
  - [Connect](#connect)


# Instalation

```
npm install omnis 
```
or
```
yarn add omnis
```

# Quick Start

After installtion generate `omnis.json` on application settings page ([read guide](https://omnis-platform.com/guide/quick-start)). And put this file into root project directory.

For requiring `Omnis` use following code:

```
import Omnis from 'omnis'

Omnis.get('test_endpoint')
  .then(res => console.log(res))
  .catch(err => console.log(err))
```

Then run your project, if everything configuration was properly done. In dev tools, you will see the next output.

<img src="https://s3.eu-central-1.amazonaws.com/omnis-preview-assests/responce.jpg" alt="omnis platform responce" style="max-width: 400px;">

# Methods

Omnis node module has methods, which allow developers to manipulate the data on the server side by make HTTP requests. You don't need to modelate any queries for sending data to the server, just use Omnis methods and paste data, which you want to send on a server, like an argument to the method.

### GET

GET method used for getting data from endpoint.

```
import get from 'omnis/get'

let args = [
  { limit: 1 },
  { order: 'asc' },
  { page: 1 },
  { per_page: 4 },
  { q: '' },
  { slug: 'posts' }
]

get('test', ...args)
  .then(res => console.log(res))
  .catch(err => console.error(err))
```

#### Arguments

GET method takes like a first argument - endpoint name, the second argument is the array of arguments:

| Name      | Type    | Allow value   | Default | Details                                                                           |
| --------- |-------- | ------------- | ------- | --------------------------------------------------------------------------------- |
| limit     | intiger | whole numbers | null    | Returns first items in the limit                                                  |
| order     | string  | 'desc', 'asc' | 'desc'  | Returns ordered by date items. `asc` - ascending order, `desc` - descending order |
| page      | intiger | whole numbers | null    | Returns items per page                                                            |
| per_page  | intiger | whole numbers | null    | Returns items on the page                                                         |
| q         | string  | all           | null    | Returns items with matching data                                                  |
| ids       | number  | whole numbers | null    | Returns item with matching `id`                                                   |
| slug      | string  | all           | null    | Returns item with matching `slug`                                                 |


### POST

POST method used for send and write data on endpoint.

```
import post from 'omnis/post'

const data = {
  title: 'Lorem',
  subtitle: 'Ipsum'
}

post('test', data)
  .then(res => console.log(res))
  .catch(err => console.log(err))
```

#### Arguments

POST method takes like first argument - endpoint name, the second argument is the `data object` with any object keys and a values.

| Name      | Type   | Allow value   | Default |
| --------- | ------ | ------------- | ------- |
| data      | object | all           | null    |


### PUT

PUT method used for replacing all data in endpoint.

```
import put from 'omnis/put'

const data = {
  title: 'Lorem',
  subtitle: 'Ipsum'
}

put('test', data)
  .then(res => console.log(res))
  .catch(err => console.log(err))
```

#### Arguments

PUT method takes like the first argument - endpoint name, the second argument is the `data object` with any object keys and values, on which will be replaced all endpoint data.

| Name      | Type   | Allow value   | Default |
| --------- | ------ | ------------- | ------- |
| data      | object | all           | null    |


### PATCH

PATCH method used for update existing data in endpoint.

```
import patch from 'omnis/patch'

const data = {
  title: 'Lorem',
  subtitle: 'Ipsum'
}

patch('test', data, id)
  .then(res => console.log(res))
  .catch(err => console.log(err))
```

#### Arguments

PATCH method takes like the first argument - endpoint name, the second argument is the `data object` with any object keys and values. The third argument is `id` of the item which you want to update.

| Name      | Type   | Allow value   | Default |
| --------- | ------ | ------------- | ------- |
| data      | object | string        | null    |
| ids       | array  | all           | null    |

### DELETE

DELETE method used for deleting existing data from endpoint.

```
import delete from 'omnis/remove' //package has a name remove because delete is reserved the name in JavaScript

const ids = ['first_id', 'second_id']

delete('test', ids)
  .then(res => console.log(res))
  .catch(err => console.log(err))
```

#### Arguments

DELETE method takes like first argument - endpoint name, the second argument is the `ids` array of items which you want to delete from the endpoint. If you don't pass any `ids` all items from endpoint will be deleted.

| Name      | Type  | Allow value   | Default | Details                          |
| --------- | ----- | ------------- | ------- | -------------------------------- |
| ids       | array | string        | null    | Return `true` if there no errors |


### File

File method used for upload file or image (_image endpoint type_) to endpoint.

```
import file from 'omnis/file'

const file = document.querySelector('input[type="file"]').files[0]

file('test', file)
  .then(res => console.log(res))
  .catch(err => console.log(err))
```

#### Arguments

File method takes like first argument - endpoint name, the second argument is the file object. Max file size 10mb.

| Name      | Type   | Allow value   | Default | Details              |
| --------- | ------ | ------------- | ------- | -------------------- |
| file      | object | file object   | null    | max file size `10mb` |


### Email

Email method used for sending email to user from omnis and write them on the endpoint.

```
import email from 'omnis/email'

const email = {
  email_to: 'test@example.com',
  email_subject: 'test subject',
  content: 'Hello World!'
}

email('test', email)
  .then(res => console.log(res))
  .catch(err => console.log(err))
```

#### Arguments

Email method takes like first argument - endpoint name, the second argument is the email object.

| Name          | Type      | Allow value   | Default | Details              |
| ------------- | --------- | ------------- | ------- | -------------------- |
| email_to      | string    | email         | null    |                      |
| email_subject | string    | all           | null    |                      |
| content       | text/html | all           | null    |                      |


### Connect

Connect method used for listening updates in endpoint in real-time.

```
import connect from 'omnis/connect'

connect('test')
  .onmessage = res => console.log(res)
```

#### Arguments

Email method takes like first argument - endpoint name.


## User

Omnis Platform can serve users, for it you can use following methods

### Create

Create methods used for creating user

```
import create from 'omnis/user/create'

const image = document.querySelector('input[type="file"]').files[0]

const user = {
  username: 'John Smith',
  email: 'test@example.com',
  password: '1234567890',
  passwordConfirmation: '1234567890',
  image: image,
  content: {
    phoneNumber: '(123) 456-7890',
    country: 'United Kingdom'
  }
}

create('test', user)
  .then(res => console.log(res))
  .catch(err => console.log(err))
```

#### Arguments

Create method takes like first argument - endpoint name, the second argument is the user object. In user object `username`, `email`, `password`, `passwordConfirmation` are required.

| Name                  | Type   | Allow value   | Default | Details                       |
| --------------------- | ------ | ------------- | ------- | ----------------------------- |
| username              | string | all           | null    |                               |
| email                 | string | email         | null    |                               |
| password              | string | all           | null    | match to passwordConfirmation |
| passwordConfirmation  | string | all           | null    | match to password             |
| image                 | object | file object   | null    | max file size `10mb`          |
| content               | object | all           | null    |                               |


### Show

Show method used for returning user by `userId`

```
import show from 'omnis/user/show'

show('test', 'userId')
  .then(res => console.log(res))
  .catch(err => console.log(err))
```

#### Arguments

Show method takes like first argument - endpoint name, the second argument is the `userId`.

| Name      | Type   | Allow value   | Default | Details              |
| --------- | ------ | ------------- | ------- | -------------------- |
| userId    | string | all           | null    |                      |


### Edit

Edit method used for edit current user and return updated user object

```
import edit from 'omnis/user/edit'

const updatedUser = {
  username: 'NewUserName',
  email: 'newemail@example.com',
  password: 'NewPassword',
  passwordConfirmation: 'NewPassword',
  content: {
    ... new content
  }
}

edit('test', updatedUser, userId, sessionToken)
  .then(res => console.log(res))
  .catch(err => console.log(err))
```

#### Arguments

Edit method takes like first argument - endpoint name, the second argument is the user object. In user object `username`, `email`, `password`, `passwordConfirmation` are required.

| Name                  | Type   | Allow value   | Default | Details                       |
| --------------------- | ------ | ------------- | ------- | ----------------------------- |
| userId                | string | number        | null    |                               |
| sessionToken          | string |               | null    |                               |
| username              | string | all           | null    |                               |
| email                 | string | email         | null    |                               |
| password              | string | all           | null    | match to passwordConfirmation |
| passwordConfirmation  | string | all           | null    | match to password             |
| image                 | object | file object   | null    | max file size `10mb`          |
| content               | object | all           | null    |                               |


### Login

Login method used for login the user and returns a current user object

```
import login from 'omnis/user/login'

const auth = {
  email: 'test@example.com'
  password: '1234567890'
}

login('test', auth)
  .then(res => console.log(res))
  .catch(err => console.log(err))
```

#### Arguments

Login method takes like first argument - endpoint name, the second argument is the auth object.

| Name      | Type   | Allow value   | Default | Details              |
| --------- | ------ | ------------- | ------- | -------------------- |
| email     | string | email         | null    |                      |
| password  | string | all           | null    |                      |


### Logout

Logout method used for logout the user

```
import logout from 'omnis/user/logout'

logout('test', userId, sessionToken)
  .then(res => console.log(res))
  .catch(err => console.log(err))
```

#### Arguments

Logout method takes like first argument - endpoint name, the second argument is the `userId`, the third argument is `sessionToken` from the current user object.

| Name          | Type   | Allow value   | Default | Details              |
| ------------- | ------ | ------------- | ------- | -------------------- |
| userId        | string | number        | null    |                      |
| sessionToken  | string |               | null    |                      |


### Password Reset

Password reset method used for resetting user password and returning `user_token`. Which will be used in the next method.

```
import resetPassword from 'omnis/user/resetPassword'

resetPassword('test', email)
  .then(res => console.log(res))
  .catch(err => console.log(err))
```

#### Arguments

Password reset method takes like first argument - endpoint name, the second argument is the user email address.

| Name          | Type   | Allow value   | Default | Details              |
| ------------- | ------ | ------------- | ------- | -------------------- |
| email         | string | email         | null    |                      |


### Password Update

Password update method used for update user password dropped in the [Password Reset](/guide/omnis-module/user/password-reset) method and returning updated user object.

```
import passwordUpdate from 'omnis/user/passwordUpdate'

const newPassword = {
  password: '1234567890',
  passwordConfirmation: '1234567890'
}

passwordUpdate('test', newPassword, userToken)
  .then(res => console.log(res))
  .catch(err => console.log(err))
```

#### Arguments

Password update method takes like first argument - endpoint name, the second argument is the new password object, the third argument is `userToken` from the [Password Reset](/guide/omnis-module/user/password-reset) method.

| Name                  | Type   | Allow value   | Default | Details                       |
| --------------------- | ------ | ------------- | ------- | ----------------------------- |
| password              | string | all           | null    | match to passwordConfirmation |
| passwordConfirmation  | string | all           | null    | match to password             |
| userToken             | string |               | null    |                               | 


### Remove

Remove method used for deleting current user.

```
import remove from 'omnis/user/remove'

remove('test', userId, sessionToken)
  .then(res => console.log(res))
  .catch(err => console.log(err))
```

#### Arguments

Remove method takes like first argument - endpoint name, the second argument is `userId`, the third argument is `sessionToken`.

| Name          | Type   | Allow value   | Default | Details              |
| ------------- | ------ | ------------- | ------- | -------------------- |
| userId        | string | number        | null    |                      |
| sessionToken  | string |               | null    |                      |