# Lectio API 2023 (preview)

Lectio API is an API for the danish website, lectio.dk. Since there is no official API for Lectio, this API gets its data with web-scraping. <b>It's therefore important to note,</b> that if Lectio gets updated, some of the functions of this API may break

<small>Developed by Tobias T. Viskum</small>

<small>_Please note, that it has not released yet, however it will soon!_</small>

## How to use it?

The url path is https://lectio-api.vercel.app/ and here is a list of all the possible endpoints:

| Endpoint    | Parameters | Description                                             | Type                                                                                                             |
| ----------- | ---------- | ------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| /get-school | none       | Gets a list of schools<br><ul><li>**schoolCode:** </ul> | <pre><code>type School = {<br/> schoolCode: string; <br/> name: string<br/>}</code></pre>Return type: `School[]` |
