(function () {
    // Retrieve pasteOptions from localStorage or use default list.
    let pasteOptions;
    const storedOptions = localStorage.getItem('pasteOptions');
    if (storedOptions) {
        try {
            pasteOptions = JSON.parse(storedOptions);
        } catch (error) {
            console.error(
                'Error parsing pasteOptions from localStorage:',
                error
            );
            pasteOptions = [];
        }
    } else {
        pasteOptions = [
            'Write next chapter with 1000 words',
            'Write chapter 1 with 1000 words',
            'Write chapter 2 with 1000 words',
            'Write chapter 3 with 1000 words',
            'Write chapter 4 with 1000 words',
            'Write chapter 5 with 1000 words',
            'Write chapter 6 with 1000 words',
            'Write chapter 7 with 1000 words',
            'Write chapter 8 with 1000 words',
            'Write chapter 9 with 1000 words',
            'Write chapter 10 with 1000 words',
            'Write chapter 11 with 1000 words',
            'Write chapter 12 with 1000 words',
            'Write chapter 13 with 1000 words',
            'Write chapter 14 with 1000 words',
            'Write chapter 15 with 1000 words',
            'Write chapter 16 with 1000 words',
            'Write chapter 17 with 1000 words',
            'Write chapter 18 with 1000 words',
            'Write chapter 19 with 1000 words',
            'Write chapter 20 with 1000 words',
            'Write chapter 21 with 1000 words',
            'Write chapter 22 with 1000 words',
            'Write chapter 23 with 1000 words',
            'Write chapter 24 with 1000 words',
            'Write chapter 25 with 1000 words',
            'Write chapter 26 with 1000 words',
            'Write chapter 27 with 1000 words',
            'Write chapter 28 with 1000 words',
            'Write chapter 29 with 1000 words',
            'Write chapter 30 with 1000 words',
            'Write chapter 31 with 1000 words',
            'Write chapter 32 with 1000 words',
            'Write chapter 33 with 1000 words',
            'Write chapter 34 with 1000 words',
            'Write chapter 35 with 1000 words',
            'Write chapter 36 with 1000 words',
            'Write chapter 37 with 1000 words',
            'Write chapter 38 with 1000 words',
            'Write chapter 39 with 1000 words',
            'Write chapter 40 with 1000 words',
        ];
        localStorage.setItem('pasteOptions', JSON.stringify(pasteOptions));
    }

    // Create a container for the UI elements.
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.bottom = 'calc(100px + 2rem)'; // Adjust this value to sit above the input form (100px is approximate height of the form, plus some margin)
    container.style.left = '55%'; // Center horizontally
    container.style.transform = 'translateX(-50%)'; // Offset to truly center it
    container.style.zIndex = '100'; // Higher than the form's z-index of 50
    container.style.padding = '10px';
    container.style.backgroundColor = '#000';
    container.style.border = 'none';
    container.style.borderRadius = '5px';
    container.style.boxShadow = '0 2px 6px rgba(0,0,0,0.2)';
    container.style.fontSize = '12px';
    container.style.color = '#fff';
    container.style.width = 'auto'; // Ensure it adapts to content
    container.style.maxWidth = '90vw'; // Prevent overflow on small screens

    // Create the dropdown element.
    const dropdown = document.createElement('select');
    dropdown.style.padding = '4px';
    dropdown.style.width = '250px';
    dropdown.style.fontSize = '12px';

    // Add default option.
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.innerText = 'Select an option';
    defaultOption.selected = true;
    defaultOption.style.fontSize = '12px';
    dropdown.appendChild(defaultOption);

    // Helper function to extract chapter number from an option string.
    function extractChapterNumber(text) {
        const match = text.match(/chapter\s+(\d+)/i);
        return match ? parseInt(match[1], 10) : null;
    }

    // Function to populate dropdown with current pasteOptions sorted numerically by chapter.
    function populateDropdown() {
        // Remove existing options except the default.
        dropdown
            .querySelectorAll('option:not(:first-child)')
            .forEach((el) => el.remove());

        // Create a sorted copy of the pasteOptions array.
        const sortedOptions = pasteOptions.slice().sort((a, b) => {
            const aNum = extractChapterNumber(a);
            const bNum = extractChapterNumber(b);

            // If both options have a chapter number, compare numerically.
            if (aNum !== null && bNum !== null) {
                return aNum - bNum;
            }
            // If only one option has a chapter number, let that one come after.
            if (aNum !== null) return 1;
            if (bNum !== null) return -1;
            // Otherwise, fall back to localeCompare.
            return a.localeCompare(b);
        });

        sortedOptions.forEach((optionText) => {
            const option = document.createElement('option');
            option.value = optionText;
            option.innerText = optionText;
            option.style.fontSize = '12px';
            dropdown.appendChild(option);
        });
    }
    populateDropdown();

    // Create a button for quickly sending "write next chapter".
    const quickSendButton = document.createElement('button');
    quickSendButton.innerText = 'Write Next Chapter';
    quickSendButton.style.padding = '4px 8px';
    quickSendButton.style.fontSize = '12px';
    quickSendButton.style.cursor = 'pointer';

    // Create a toggle button for showing/hiding the add/delete controls.
    const toggleControlsButton = document.createElement('button');
    toggleControlsButton.innerText = 'show';
    toggleControlsButton.style.padding = '4px 8px';
    toggleControlsButton.style.fontSize = '12px';
    toggleControlsButton.style.cursor = 'pointer';
    toggleControlsButton.style.marginLeft = '5px';

    // -----------------------------
    // Create Discord Icon Link using inline SVG (hidden by default)
    // -----------------------------
    const discordLink = document.createElement('a');
    discordLink.href = 'https://discord.gg/wPqcambpeu';
    discordLink.target = '_blank';
    discordLink.style.marginLeft = '5px';
    discordLink.style.display = 'none'; // Initially hidden.
    discordLink.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50" style="fill:#FFFFFF;">
      <path d="M 41.625 10.769531 C 37.644531 7.566406 31.347656 7.023438 31.078125 7.003906 C 30.660156 6.96875 30.261719 7.203125 30.089844 7.589844 C 30.074219 7.613281 29.9375 7.929688 29.785156 8.421875 C 32.417969 8.867188 35.652344 9.761719 38.578125 11.578125 C 39.046875 11.867188 39.191406 12.484375 38.902344 12.953125 C 38.710938 13.261719 38.386719 13.429688 38.050781 13.429688 C 37.871094 13.429688 37.6875 13.378906 37.523438 13.277344 C 32.492188 10.15625 26.210938 10 25 10 C 23.789063 10 17.503906 10.15625 12.476563 13.277344 C 12.007813 13.570313 11.390625 13.425781 11.101563 12.957031 C 10.808594 12.484375 10.953125 11.871094 11.421875 11.578125 C 14.347656 9.765625 17.582031 8.867188 20.214844 8.425781 C 20.0625 7.929688 19.925781 7.617188 19.914063 7.589844 C 19.738281 7.203125 19.34375 6.960938 18.921875 7.003906 C 18.652344 7.023438 12.355469 7.566406 8.320313 10.8125 C 6.214844 12.761719 2 24.152344 2 34 C 2 34.175781 2.046875 34.34375 2.132813 34.496094 C 5.039063 39.605469 12.972656 40.941406 14.78125 41 C 14.789063 41 14.800781 41 14.8125 41 C 15.132813 41 15.433594 40.847656 15.621094 40.589844 L 17.449219 38.074219 C 12.515625 36.800781 9.996094 34.636719 9.851563 34.507813 C 9.4375 34.144531 9.398438 33.511719 9.765625 33.097656 C 10.128906 32.683594 10.761719 32.644531 11.175781 33.007813 C 11.234375 33.0625 15.875 37 25 37 C 34.140625 37 38.78125 33.046875 38.828125 33.007813 C 39.242188 32.648438 39.871094 32.683594 40.238281 33.101563 C 40.601563 33.515625 40.5625 34.144531 40.148438 34.507813 C 40.003906 34.636719 37.484375 36.800781 32.550781 38.074219 L 34.378906 40.589844 C 34.566406 40.847656 34.867188 41 35.1875 41 C 35.199219 41 35.210938 41 35.21875 41 C 37.027344 40.941406 44.960938 39.605469 47.867188 34.496094 C 47.953125 34.34375 48 34.175781 48 34 C 48 24.152344 43.785156 12.761719 41.625 10.769531 Z M 18.5 30 C 16.566406 30 15 28.210938 15 26 C 15 23.789063 16.566406 22 18.5 22 C 20.433594 22 22 23.789063 22 26 C 22 28.210938 20.433594 30 18.5 30 Z M 31.5 30 C 29.566406 30 28 28.210938 28 26 C 28 23.789063 29.566406 22 31.5 22 C 33.433594 22 35 23.789063 35 26 C 35 28.210938 33.433594 30 31.5 30 Z"></path>
    </svg>`;

    // Create container for add/delete option controls.
    const optionActionContainer = document.createElement('div');
    optionActionContainer.style.marginTop = '8px';
    optionActionContainer.style.display = 'none'; // Hidden by default.

    const newOptionInput = document.createElement('input');
    newOptionInput.type = 'text';
    newOptionInput.placeholder = 'New or delete option';
    newOptionInput.style.padding = '4px';
    newOptionInput.style.width = '200px';
    newOptionInput.style.fontSize = '12px';
    newOptionInput.style.marginRight = '5px';

    const addOptionButton = document.createElement('button');
    addOptionButton.innerText = 'Add Option';
    addOptionButton.style.padding = '4px 8px';
    addOptionButton.style.fontSize = '12px';
    addOptionButton.style.cursor = 'pointer';

    const deleteOptionButton = document.createElement('button');
    deleteOptionButton.innerText = 'Delete Option';
    deleteOptionButton.style.padding = '4px 8px';
    deleteOptionButton.style.fontSize = '12px';
    deleteOptionButton.style.cursor = 'pointer';
    deleteOptionButton.style.marginLeft = '5px';

    optionActionContainer.appendChild(newOptionInput);
    optionActionContainer.appendChild(addOptionButton);
    optionActionContainer.appendChild(deleteOptionButton);

    // Append the dropdown, quick send button, toggle controls button, and Discord icon in one row.
    const topRow = document.createElement('div');
    topRow.style.display = 'flex';
    topRow.style.alignItems = 'center';
    topRow.appendChild(dropdown);
    topRow.appendChild(quickSendButton);
    topRow.appendChild(toggleControlsButton);
    topRow.appendChild(discordLink);

    // Append all UI elements to the container.
    container.appendChild(topRow);
    container.appendChild(optionActionContainer);

    // Append the container to the page.
    document.body.appendChild(container);

    // Helper function to send text to the target textarea.
    function sendTextToTextarea(text) {
        const targetTextarea =
            document.querySelector(
                'textarea.w-screen[placeholder="Enter prompt here"]'
            ) || document.querySelector('textarea[dir="auto"].w-full');

        if (targetTextarea) {
            targetTextarea.value = text;
            targetTextarea.dispatchEvent(new Event('input', { bubbles: true }));
        } else {
            console.error('Target textarea not found.');
        }
    }

    // Event listener for the dropdown selection change.
    dropdown.addEventListener('change', () => {
        const selectedText = dropdown.value;
        if (selectedText) {
            sendTextToTextarea(selectedText);
            dropdown.value = '';
        }
    });

    // Event listener for the quick send button.
    quickSendButton.addEventListener('click', () => {
        sendTextToTextarea('write next chapter');
    });

    // Event listener for toggling the add/delete controls and Discord icon.
    toggleControlsButton.addEventListener('click', () => {
        if (optionActionContainer.style.display === 'none') {
            optionActionContainer.style.display = 'block';
            toggleControlsButton.innerText = 'hide';
            discordLink.style.display = 'block';
        } else {
            optionActionContainer.style.display = 'none';
            toggleControlsButton.innerText = 'show';
            discordLink.style.display = 'none';
        }
    });

    // Event listener for adding a new paste option.
    addOptionButton.addEventListener('click', () => {
        const newOption = newOptionInput.value.trim();
        if (newOption && !pasteOptions.includes(newOption)) {
            pasteOptions.push(newOption);
            // Save updated list and refresh dropdown.
            localStorage.setItem('pasteOptions', JSON.stringify(pasteOptions));
            populateDropdown();
            newOptionInput.value = '';
        }
    });

    // Event listener for deleting an option using the text from the input field.
    deleteOptionButton.addEventListener('click', () => {
        const optionToDelete = newOptionInput.value.trim();
        if (optionToDelete && pasteOptions.includes(optionToDelete)) {
            pasteOptions = pasteOptions.filter(
                (option) => option !== optionToDelete
            );
            localStorage.setItem('pasteOptions', JSON.stringify(pasteOptions));
            populateDropdown();
            newOptionInput.value = '';
        }
    });
})();
