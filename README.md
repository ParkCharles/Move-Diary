# Move Diary

Move Diary is a decentralized activity diary built on the Sui blockchain.  
Users can record outdoor activities (e.g. hiking, running, openwater swimming), store photos securely, protect personal information, and share experiences via permanent links.  
It leverages zkLogin, Slush Wallet, Walrus storage, and AWS Bedrock for AI-powered summaries.

---

## ✨ Features
ㄴ
- 📝 **Activity Logging UI**  
  Create structured diary entries with metadata, descriptions, and photos.

- 🔐 **zkLogin Authentication**  
  Social login via Google using Sui's privacy-preserving zkLogin.

- 🔗 **Slush Wallet Integration**  
  Sign and manage transactions using a lightweight Sui-native wallet.

- 🖼️ **Secure Photo Storage**  
  Upload images to Walrus with on-chain reference.

- 🛡️ **Privacy Protection**  
  Encrypt personal fields using Seal (Sui-based encryption).

- 📤 **Link-based Sharing**  
  Generate immutable links to share public records.

- 🤖 **AI-Powered Summary**  
  Summarize diary entries using AWS Bedrock LLMs.

---

## 🛠️ Tech Stack

### ✅ Currently Implemented

| Layer      | Tool/Service         |
|------------|----------------------|
| Frontend   | React + Tailwind CSS |
| Backend    | Node.js (API server) |
| Blockchain | Sui (Testnet)        |
| Auth       | zkLogin              |
| Wallet     | Slush Wallet         |

### 🧩 Planned (Coming Soon)

| Layer             | Tool/Service            |
|-------------------|-------------------------|
| File Storage      | Walrus, AWS S3          |
| AI Integration    | AWS Bedrock             |
| Privacy Layer     | Seal (Sui encryption)   |
| AI Summary        | LLM-powered autosummarization |

---

## 📁 Project Structure

```bash
Move-Diary/
├── backend/                 # Node.js API server (planned)
├── frontend/                # React frontend
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── features/        # Feature-based modules (e.g., diary, auth)
│   │   ├── hooks/
│   │   ├── lib/             # Common utils, Sui/wallet logic, API calls
│   │   ├── pages/
│   │   ├── styles/
│   │   └── App.tsx
│   ├── move/                # Move module for Sui smart contracts
│   ├── index.html
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   ├── postcss.config.cjs
│   ├── eslint.config.js
│   ├── tsconfig.json
│   ├── tsconfig.app.json
│   ├── tsconfig.node.json
│   ├── package.json
│   └── package-lock.json
├── LICENSE
└── README.md

💬 Contact

For questions, collaborations, or contributions, please reach out via:
	•	Twitter (X): @Move_Diary
	•	GitHub Issues: https://github.com/ParkCharles/Move-Diary/issues
