# Omnis
node module for integration with [Omnis Platform](https://omnis-platform.com)

---

+ [Installation](#instalation)
+ [Quick Start](#quick-start)
+ [Methods](#methods)
  - [GET](#get)
  - POST
  - PUT
  - PATCH
  - DELETE
  - File
  - Email
  - User
  - Connect


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

| Name      | Type    | Allow value   | Details                                                                           |
| --------- |-------- | ------------- | --------------------------------------------------------------------------------- |
| limit     | intiger | whole numbers | Returns first items in the limit                                                  |
| order     | string  | 'desc', 'asc' | Returns ordered by date items. `asc` - ascending order, `desc` - descending order |
| page      | intiger | whole numbers | Returns items per page                                                            |
| per_page  | intiger | whole numbers | Returns items on the page                                                         |
| q         | string  | all           | Returns items with matching data                                                  |
| ids       | number  | whole numbers | Returns item with matching `id`                                                   |
| slug      | string  | all           | Returns item with matching `slug`                                                 |
