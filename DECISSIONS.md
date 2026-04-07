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

## Component Design

- Decided to put the logic into task list component instead of creating a new service or smart component to avoid complexity. The component is simple enough to handle the logic.
- Use inputs and outputs signals to communicate between components.
