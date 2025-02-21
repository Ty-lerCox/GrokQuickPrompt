# Grok Quick Prompt

**Grok Quick Prompt** is a Chrome extension designed to streamline your writing and text input tasks. It provides a customizable list of quick prompts that you can easily insert into any text area with just one click. Whether you're an author, blogger, or anyone who frequently works with text prompts, Grok Quick Prompt helps you boost your productivity.

---

<a href="https://i.imgur.com/ynM5Fs3.png">
  <img src="https://i.imgur.com/ynM5Fs3.png" alt="Options" width="150" />
</a>
<a href="https://i.imgur.com/7q2MxDG.png">
  <img src="https://i.imgur.com/ynM5Fs3.png" alt="Options" width="150" />
</a>
<a href="https://i.imgur.com/8KBF54y.png">
  <img src="https://i.imgur.com/ynM5Fs3.png" alt="Options" width="150" />
</a>


## Features

-   **Quick Prompt Insertion:**  
    Instantly insert predefined text prompts into any text area, such as "Write next chapter with 1000 words."

-   **Customizable Prompts:**  
    Easily add new prompts or delete existing ones. Your custom prompts are saved locally, so your personalized list is always available.

-   **Clean & Minimal UI:**  
    Enjoy a simple interface with a dropdown for selecting prompts, a "Write Next Chapter" button, and additional controls that can be toggled on or off.

-   **No Data Collection:**  
    The extension works entirely on your device. All settings and custom prompts are stored locally and no personal data is collected.

---

## Installation

### Loading the Extension in Developer Mode

To test or use Grok Quick Prompt before publishing it on the Chrome Web Store, follow these steps:

1. **Clone or Download the Repository:**  
   Download the project files to your local machine. Your project folder should include:

    - `manifest.json`
    - `content.js`
    - Icon files (`icon16.png`, `icon48.png`, `icon128.png`) or their SVG equivalents.

2. **Open Chrome and Navigate to the Extensions Page:**  
   Go to `chrome://extensions/`.

3. **Enable Developer Mode:**  
   Toggle the "Developer mode" switch in the top right corner of the page.

4. **Load the Unpacked Extension:**  
   Click on the "Load unpacked" button and select the folder where your project files are located.

5. **Verify the Extension:**  
   Once loaded, the extension icon should appear, and you can navigate to any page matching your `"matches"` criteria (or `https://grok.com/*`) to see Grok Quick Prompt in action.

---

## Usage

-   **Using the Prompt Dropdown:**  
    Click the dropdown to select a prompt. The selected text is automatically inserted into a compatible text area on the page.

-   **Write Next Chapter Button:**  
    Click the "Write Next Chapter" button to immediately insert a default prompt ("write next chapter") into the text area.

-   **Custom Prompt Controls:**

    -   Click the "show" toggle button (located next to the "Write Next Chapter" button) to reveal the add/delete controls.
    -   Enter a new prompt into the input field and click "Add Option" to add it to the list.
    -   To delete an option, type its exact text in the input field and click "Delete Option."

-   **Local Storage:**  
    Your custom prompt list is stored using the browser's local storage. Changes are persistent across sessions.

---

## Privacy Policy

Grok Quick Prompt does not collect, store, or transmit any user data. All customization options are saved locally on your device. For a detailed privacy policy, please refer to the [Privacy Policy](#) included in this repository.

---

## License

This project is licensed under the [MIT License](https://mit-license.org/).

---

Feel free to contribute or fork this project on GitHub to help improve Grok Quick Prompt. Happy prompting!
