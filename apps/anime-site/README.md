# Anime Watching Website
this project require [anime-site-api](https://github.com/valiantlynx/anime-site-api/tree/master) to be running beforehand

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## Description
The Anime Watching Website is a platform where users can stream and watch their favorite anime series and episodes. It provides a user-friendly interface and features to enhance the anime-watching experience.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Installation
1. Clone the repository: `git clone https://github.com/valiantlynx/anime-site.git`
2. Navigate to the project directory: `cd anime-site`
3. Install the dependencies: `npm install`

## Usage
1. Start the development server: `npm start`
2. Access the website in your browser at: `http://localhost:3000`
3. Explore the anime catalog, select a series, and watch episodes online.

## Features
- Browse and search for anime series.
- View details of each series, including title, image, type, summary, release year, genres, status, and total episodes.
- Watch episodes online with a built-in video player.
- Responsive design for optimal viewing experience on different devices.
- Breadcrumbs navigation for easy navigation between pages.

## Contributing
Contributions are welcome! If you'd like to contribute to the Anime site, please follow these guidelines:
1. Fork the repository.
2. Create a new branch for your feature/bug fix: `git checkout -b feature-name`
3. Commit your changes: `git commit -m "Add feature/fix bug"`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request.

Please ensure that your code follows the project's coding style and conventions.

## License
This project is licensed under the [MIT License](LICENSE).

## Contact
For any inquiries or questions regarding the Anime Watching Website, please feel free to reach out:

- Email: valiantlynxz@gmail.com
- Twitter: [@valiantlynx](https://twitter.com/valiantlynx)
- GitHub: [valiantlynx](https://github.com/valiantlynx)

### adding new projects with their own git history
```sh
git subtree add --prefix=apps/anime-site https://github.com/valiantlynx/anime-site.git master --squash
git subtree pull --prefix=apps/anime-site https://github.com/valiantlynx/anime-site.git master --squash
git subtree push --prefix=apps/anime-site https://github.com/valiantlynx/anime-site.git master

```
