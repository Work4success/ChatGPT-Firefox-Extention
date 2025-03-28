# ChatGPT Sidebar for Firefox

A privacy-focused Firefox extension that provides a ChatGPT interface directly from your browser's sidebar using the OpenAI API.

---

## ✨ Features

- Clean, simple sidebar UI
- Sends input directly to the ChatGPT API
- Receives and displays responses
- Easy to customize and expand

---

## 🧑‍💻 Installation Instructions (Kubuntu/Linux)

### 1. 📂 Clone the Repository

Open a terminal and run:

```bash
mkdir -p ~/dev
cd ~/dev
git clone https://github.com/YOUR_USERNAME/firefox-chatgpt-sidebar.git
cd firefox-chatgpt-sidebar
```

> Replace `YOUR_USERNAME` with your actual GitHub username if you fork this repo.

---

### 2. 🧪 Load the Extension in Firefox

1. Open Firefox and navigate to:
   ```
   about:debugging#/runtime/this-firefox
   ```

2. Click **"Load Temporary Add-on"**.

3. Select the `manifest.json` file inside your cloned folder:
   ```
   ~/dev/firefox-chatgpt-sidebar/manifest.json
   ```

4. Open the sidebar via **View > Sidebar > ChatGPT**.

---

### 3. 🔑 Add Your OpenAI API Key

In `sidebar.js`, find this line:

```javascript
const apiKey = "YOUR_OPENAI_API_KEY";
```

Replace it with your actual key from [https://platform.openai.com/account/api-keys](https://platform.openai.com/account/api-keys).

---

## 🛠 Future Plans

- Configurable API key via options page
- Message history and context memory
- Dark mode
- Support for multiple models and temperature settings

---

## 🛡️ License

This project is licensed under the **Mozilla Public License Version 2.0**.  
See the [LICENSE](LICENSE) file for details.

---

## 🤝 Contributing

Feel free to fork this project, improve it, and submit a pull request!
