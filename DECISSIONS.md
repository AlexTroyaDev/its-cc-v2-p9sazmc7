# Decisions

## Architecture

- I decided to create a new folder structure based on 'domains'. Makes easier to find related components, services.

- Not necessary to create a share or common folder because the functionality is not repeated. We can create a shared component inside the domain that needs it.

- Create a 'public' folder to store the icons. Also added to angular.json to be served.

## Testing

- I decided to use **Vitest** instead of **Jest** because it is faster and has better integration with Angular.

- Following TDD approach, first thing I did was to create a list of test cases for each component. As an example:
  - **TaskList component:**
    - Display message when task list is empty
    - Display task list when tasks are present. In this case, the idea is to mock the component because functionality is checked in TaskListItem component.
    - Display tasks title, status and severity.
  - **TaskListItem component:**
    - Display task title.
    - Display task status.
    - Display task severity.
    - Change severity when click on icon button.

    - **As can be seen, sometimes I added tests after functionality due planification and time.**

## Component Design

- Decided to put the logic into task list component instead of creating a new service or smart component to avoid complexity. The component is simple enough to handle the logic.
- Use inputs and outputs signals to communicate between components.

## Final Thoughts.

- Tried to keep the solid principles. I would have liked to connnect to the proposed API but due lack of time, was not possible. But in a real scenario, I would create a service using HttpClient and HttpResource new api, to handle the API calls and another service to handle the app status and remove the store from the component.

- Didnt pay much attention to the styles. In case of have more time, I would followed best practices and DRY principles.
- Also discard to invest too much time in accessibility. I know is quite important in your bussines real scenario.
