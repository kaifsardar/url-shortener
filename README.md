# URL Shortener

This project is a URL shortener similar to services like Bit.ly, built using Node.js, Express, MongoDB, and EJS. It includes a robust authentication system for user privacy and security.

## Features

- Shorten long URLs into compact, easy-to-share links.
- Secure authentication system to manage user access and data.
- Full-stack solution providing efficient URL management and redirection.

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/kaifsardar/url-shortener.git
    ```

2. **Install dependencies:**
    ```bash
    cd url-shortener
    npm install
    ```

3. **Set up environment variables:**
    Create a `.env` file in the root directory and add the following variables:
    ```plaintext
    PORT=3000
    DB_URL=mongodb://localhost:27017/url-shortener
    ```
    Replace the `PORT` and `DB_URL` values with your desired port number and MongoDB connection string.

4. **Start the server:**
    ```bash
    node index.js
    ```

5. **Visit `http://localhost:3000` in your browser to access the application.**

## Usage

1. Register for an account or log in if you already have one.
2. Once logged in, enter the URL you want to shorten.
3. Copy the generated short URL and use it.
4. Use the dashboard to show your shortened URLs and no of clicks.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

This project was created by [Kaif Sardar].

## Contact

For questions or inquiries, please contact [kaifsardar300@gmail.com].
