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
            'Outline the next 10 chapters for stage 2',
            'Outline the next 10 chapters for stage 3',
            'Outline the next 10 chapters for stage 4',
            'Outline the next 10 chapters for stage 5',
            'Outline the next 10 chapters for stage 6',
            'Outline the next 10 chapters for stage 7',
            'Outline the next 10 chapters for stage 8',
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
    container.style.top = '80vh';
    container.style.right = '40vw';
    container.style.zIndex = '1000';
    container.style.padding = '10px';
    container.style.backgroundColor = '#000';
    container.style.border = 'none';
    container.style.borderRadius = '5px';
    container.style.boxShadow = '0 2px 6px rgba(0,0,0,0.2)';
    container.style.fontSize = '12px';
    container.style.color = '#fff';

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

    // Function to populate dropdown with current pasteOptions.
    function populateDropdown() {
        dropdown
            .querySelectorAll('option:not(:first-child)')
            .forEach((el) => el.remove());
        pasteOptions.forEach((optionText) => {
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

    // Append the dropdown, quick send button, and toggle controls button in one row.
    const topRow = document.createElement('div');
    topRow.style.display = 'flex';
    topRow.style.alignItems = 'center';
    topRow.appendChild(dropdown);
    topRow.appendChild(quickSendButton);
    topRow.appendChild(toggleControlsButton);

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

    // Event listener for toggling the add/delete controls.
    toggleControlsButton.addEventListener('click', () => {
        if (optionActionContainer.style.display === 'none') {
            optionActionContainer.style.display = 'block';
            toggleControlsButton.innerText = 'hide';
        } else {
            optionActionContainer.style.display = 'none';
            toggleControlsButton.innerText = 'show';
        }
    });

    // Event listener for adding a new paste option.
    addOptionButton.addEventListener('click', () => {
        const newOption = newOptionInput.value.trim();
        if (newOption && !pasteOptions.includes(newOption)) {
            pasteOptions.unshift(newOption);
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
