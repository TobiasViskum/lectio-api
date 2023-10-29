# Lectio API 2023 (Alpha)

Lectio API is an API for the danish website, lectio.dk. Since there is no official API for Lectio, this API gets its data with web-scraping. <b>It's therefore important to note,</b> that if Lectio gets updated, some of the functions of this API may break

This is what I have created so far using this api: https://lectio.muksiv.dk/

<small>Developed by Tobias T. Viskum</small>

<small><i>NOTE: Nothing sent to this API will be stored, but you'll always have the opportunity to clone this repository and host the API yourself</i></small>

## How to use this API?

The base url path is https://lectio-api.vercel.app/ and below you'll see a table with all the current endpoints. <br> If no http method is specified then it's a GET request, and therefore all the parameters have to be sent in the url.

Since Lectio requires you to be authenticated to get the result, you have to send at least these search parameters in every search query (<i>except `/get-school/*`</i>):

```ts
type StandardProps2 = {
  username: string;
  password: string;
  schoolCode: string;
};
```

`/endpoint?username=value&password=value&schoolCode=value`<br>
I will at some point create an npm-package that will make it easier to make the requests

<i>If you under "Read more" just see "-" it means that the core logic has already been created, <br> but the endpoint hasn't been made yet. </i>

| Endpoint                           | Description                                                                                            | Read more |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------ | --------- |
| `/get-is-authenticated`            | Returns if the student is authenticated or not                                                         | Help      |
| `/get-school/by-school-code`       | Returns a list of all schools.                                                                         | Help      |
| `/get-school/all`                  | Returns a specific school                                                                              | Help      |
| `/get-student/by-credentials`      | Returns the student<br>with the provided username and password                                         | Help      |
| `/get-student/1g`                  | Returns all first-year students                                                                        | -         |
| `/get-student/2g`                  | Returns all second-year students                                                                       | -         |
| `/get-student/3g`                  | Returns all third-year students                                                                        | -         |
| `/get-student/4g`                  | Returns all fourth-year students                                                                       | -         |
| `/get-student/all`                 | Returns all students                                                                                   | -         |
| `/get-teacher/by-initials`         | Returns the teacher<br>with the provided initials                                                      | Help      |
| `/get-teacher/all`                 | Returns all teachers                                                                                   | Help      |
| `/get-schedule/by-credentials`     | Returns the schedule of the specified week <br> by the student with the provided username and password | -         |
| `/get-schedule/by-student-id`      | Returns the schedule of the specified week <br> of a student with the given id                         | -         |
| `/get-schedule/by-teacher-id`      | Returns the schedule of the specified week <br> of a teacher with the given id                         | -         |
| `/get-lesson`                      | Returns a specific lesson<br>with the href retrieved from `/get-schedule/*`                            | Help      |
| `/get-homework`                    | Returns the homework of the student                                                                    |           |
| `/get-messages/deleted`            | Returns all deleted messages                                                                           | Help      |
| `/get-messages/newest`             | Returns all the newest messages                                                                        | Help      |
| `/get-messages/unread`             | Return all unread messages                                                                             | Help      |
| `/get-messages/personal`           | Returns all messages that the student<br>have either sent or received                                  | Help      |
| `/get-messages/all`                | Returns all the messages of the student                                                                |           |
| `/get-assignment/all`              | Returns all the assignments of the student                                                             |           |
| `/get-assignment/by-assignment-id` | Returns the specific assignment of the student                                                         |           |

### Future updates and fixes

- `/get-school/by-school-code`: Wrong response message when school doesn't exist
- `/get-schedule`: Implement for studentId, teacherId and credentials
- `/get-homework`: Implement this endpoint
- `/get-student/*`: Implement the rest of the endpoints
- Implement post message functionality
- Implement get all receivers when deciding on who to send the message to
- Implement post elev-feedback functionality
- Implement get-grades
- Implement get-questionnaires
- Implement answer questionnaires
- Implement get-absence
- Implement get-studyPlan
- Implement get-homepage-information
- Fix: Sometimes a lesson can be like this: "6/11-2023 08:00 til 22/5-2024 09:00", which doesn't work with the current code.
