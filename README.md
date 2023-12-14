https://valiantlynx.github.io/web-worker/

# Simple Web Worker Example

This is a simple web application that demonstrates the usage of web workers to perform computationally intensive tasks without blocking the main thread.

## Features

- Clicking the "Do Work" button triggers a web worker that performs a time-consuming calculation in the background.
- The result of the calculation is displayed in the output section.
- Clicking the "Do More Work" button updates the "Random" section with the text "Clicked!"

## Installation

No installation is required for this application. Simply open the `index.html` file in a web browser.

## Usage

1. Open the `index.html` file in a web browser.
2. Click the "Do Work" button to start the computationally intensive task in the web worker.
3. The output section will display the result of the calculation once it is completed.
4. Click the "Do More Work" button to update the "Random" section with the text "Clicked!".

## Technologies Used

- HTML
- JavaScript

## Styling

The application uses a simple CSS file (`style.css`) for basic styling. The following styles are applied:

```css
body {
  font-family: Arial, sans-serif;
  background-color: #f1f1f1;
  margin: 0;
  padding: 20px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

#random {
  font-size: 24px;
  margin-top: 20px;
  color: brown;
}

#output {
  font-size: 32px;
  color: aqua;
  margin-top: 20px;
}
```

## How It Works
- When the "Do Work" button is clicked, an event listener triggers the creation of a new web worker (worker.js).
- The web worker performs a time-consuming calculation in the background.
- Once the calculation is completed, the web worker sends the result back to the main thread.
- The result is then displayed in the output section of the page.
- Clicking the "Do More Work" button updates the "Random" section with the text "Clicked!".
## Contributing
Contributions are welcome! If you have any suggestions, improvements, or feature ideas, feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License.

### adding new projects with their own git history
```sh
git subtree add --prefix=apps/web-worker https://github.com/valiantlynx/web-worker.git master --squash
git subtree pull --prefix=apps/web-worker https://github.com/valiantlynx/web-worker.git master --squash
git subtree push --prefix=apps/web-worker https://github.com/valiantlynx/web-worker.git master

```
