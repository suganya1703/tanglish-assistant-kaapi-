☕ Kaapi — Tanglish AI Assistant

A friendly AI chat assistant that speaks Tanglish (Tamil written in English script, mixed naturally with English) — the way people actually talk in Coimbatore, Chennai, and across Tamil Nadu.

Built as a prototype for local-language AI accessibility, aimed at everyday users, elderly folks, and small business owners who are more comfortable in Tanglish than formal English or Tamil script.

✨ Features
Tanglish-first conversation — every reply is in natural Tanglish, never pure English or Tamil script
Text chat — clean, simple chat interface
Voice input — speak instead of typing, using the browser's built-in Speech Recognition
Voice output — tap "kelunga" on any reply to hear it read aloud
Warm, local persona — "Kaapi" responds like a helpful local friend, not a formal AI
🛠️ Tech Stack
React — UI and state management
Claude API (claude-sonnet-4-6) — powers the conversational replies
Web Speech API — browser-native speech-to-text and text-to-speech
Lucide React — icons
🚀 How It Works
User types or speaks a message (in English, Tamil, or Tanglish)
Message is sent to the Claude API along with a system prompt that instructs the model to always reply in Tanglish, with example conversations for tone/style
Reply is shown as a chat bubble, with an option to hear it spoken aloud
📋 Prerequisites
A React environment (Create React App, Vite, or similar)
Access to the Anthropic API
lucide-react package installed
bash
npm install lucide-react
▶️ Running Locally
Clone this repo
Install dependencies
Add the TanglishAssistant component to your app
Run your dev server
bash
git clone https://github.com/<your-username>/tanglish-assistant.git
cd tanglish-assistant
npm install
npm start
🗺️ Roadmap / Next Steps

This is an early-stage prototype. Possible next steps:

 Swap browser Speech Recognition for Whisper (better Tamil/Tanglish accuracy)
 Add persistent chat history / user sessions
 Real-world integrations (weather API, reminders/calendar, local business info)
 Mobile app version (React Native)
 Multi-dialect support (Chennai vs Coimbatore vs Madurai Tanglish variations)
📄 License

MIT — free to use, modify, and build on.

 Acknowledgements

Built with Claude by Anthropic.# tanglish-assistant-kaapi-
