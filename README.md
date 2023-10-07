# Lectio API 2023 (preview)

<small>Developed by Tobias T. Viskum</small> \n
<small>Please note, that it has not released yet, however it will soon!</small>

## What is it?

Lectio API is an api for the danish website, lectio.dk.

## How to use it?

The url path is https://lectio-api.vercel.app/ and here is a list of all the possible endpoints:

| Endpoint    | Parameters | Description                                             | Type                                                                                                             |
| ----------- | ---------- | ------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| /get-school | none       | Gets a list of schools<br><ul><li>**schoolCode:** </ul> | <pre><code>type School = {<br/> schoolCode: string; <br/> name: string<br/>}</code></pre>Return type: `School[]` |
