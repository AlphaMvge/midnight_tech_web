// Sample words for the mockup pool
const wordlist = [
    "acrobat", "africa", "alaska", "albert", "albino", "album", "alcohol", "alex", "alpha", "amadeus",
    "amanda", "amazon", "america", "analog", "animal", "antenna", "antonio", "apollo", "april", "aroma",
    "artist", "aspirin", "athlete", "atlas", "banana", "bandit", "banjo", "bikini", "bingo", "bonus",
    "camera", "canada", "carbon", "casino", "catalog", "cinema", "citizen", "cobra", "comet", "compact"
    // ... in a real app, this would be fetched or fully bundled
];

const generateBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');
const outputArea = document.getElementById('outputArea');
const wordCountInput = document.getElementById('wordCount');

function generateWords() {
    const count = parseInt(wordCountInput.value) || 7;
    const selected = [];
    
    // Simple random selection for demonstration
    for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * wordlist.length);
        selected.push(wordlist[randomIndex]);
    }

    // Display with a slight delay for feel
    outputArea.innerHTML = '<span class="placeholder">Generating...</span>';
    
    setTimeout(() => {
        outputArea.textContent = selected.join('\n');
        copyBtn.disabled = false;
        
        // Visual feedback
        outputArea.style.animation = 'none';
        outputArea.offsetHeight; // trigger reflow
        outputArea.style.animation = 'fadeIn 0.5s ease';
    }, 300);
}

function copyToClipboard() {
    const text = outputArea.textContent;
    navigator.clipboard.writeText(text).then(() => {
        const originalText = copyBtn.textContent;
        copyBtn.textContent = 'Copied!';
        copyBtn.style.borderColor = '#00FF9C';
        copyBtn.style.color = '#00FF9C';
        
        setTimeout(() => {
            copyBtn.textContent = originalText;
            copyBtn.style.borderColor = '';
            copyBtn.style.color = '';
        }, 2000);
    });
}

generateBtn.addEventListener('click', generateWords);
copyBtn.addEventListener('click', copyToClipboard);

// CSS Animation (added via JS injection for simplicity in mockup)
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.append(style);
