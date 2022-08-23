<p align="center">
  <a href="https://e2e-enc-notes.vercel.app" >
    <img src="https://images2.imgbox.com/57/71/2Ltnnq7U_o.png" alt="e2e encrypted notes app logo">
  </a>
</p>

<p align="center">
  <a href="#-about">About</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-demo">Demo</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-what-is-this-app">What is this app?</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-challenges">Challenges</a>
</p>

---

<img src="https://images2.imgbox.com/88/a1/wsSMWct5_o.png" alt="React e2e notes educational app interface"/>

## 📃 About

It's a simple end-to-end encrypted notes app.

This is an educational app that illustrates what you can build knowing just the basics of [ReactJS](https://reactjs.org). Feel free to explore it, learn from it, get inspired and build something yourself.

Not sure where to start? Try [the challenges](https://github.com/vincaslt/e2e-enc-notes#-challenges) first!

## 📺 Demo

🔗 Link to demo: [https://e2e-enc-notes.vercel.app](https://e2e-enc-notes.vercel.app)

Your notes will be encrypted with a password of your choice:

1. Enter any password
2. Create some notes
3. Next time, enter the same password to access your notes.

Notes are stored in local storage.

## 🚀 Getting started

1. Clone the app `git clone git@github.com:vincaslt/e2e-enc-notes.git`
2. Run `npm install` in the root folder
3. Start the server with `npm run dev`
4. Follow the instructions in the terminal

Here's the copy-pasta for your terminal:

```
git clone git@github.com:vincaslt/e2e-enc-notes.git
cd e2e-enc-notes
npm install
npm run dev
```

## 🤔 What is this app?

This is an example real-world React app built using only the technologies that most beginner React developers already know.

Many beginners know the basics, but when they try to build an app from scratch they get overwhelmed and stuck. They think they know too little to build something for the real world, so they keep watching tutorial after tutorial, never starting to build their dream app. They get stuck in _tutorial hell_.

This app is the proof, that you don't need to know a lot to build something useful. And if you're not yet feeling confident enough, you can try your hand at a [challenge](https://github.com/vincaslt/e2e-enc-notes#-challenges).

### ✅ Features

- E2E encryption using AES with a password and a secure passphrase.
- Creating and editing notes
- Basic rich-text editor
- Auto-saving notes on edit

This app is intentionally minimal. It's goal is to show that you only need to know the basics to start building, and you can learn everything else you need on the go. Because it's so incomplete, it means that you can fork the repo and implement the missing features as a practice.

### ⚙️ How it works?

1. When the user enters a password for the first time, a new passphrase is created and encrypted using the user's password.
2. The notes are saved in local storage, they're encrypted using the passphrase (not the password) before saving them.
3. When the user comes back the next time, he needs to enter the same password to decrypt the passphrase, which will be used to decrypt the notes.

**Why use the passphrase and not the password to encrypt/decrypt notes?** If you want to change the password, you only need to re-encrypt the passphrase with the new password. If you had encrypted notes with the password, you'd need to re-encrypt every note with the new password.

### 🔨 Technologies

It's everything you already know and use.

- [TypeScript](https://github.com/microsoft/TypeScript)
- [ReactJS](https://github.com/facebook/react)
- [Vite](https://github.com/vitejs/vite)
- [CryptoJS](https://github.com/brix/crypto-js) (simple lib for encryption, we only use AES)
- [TipTap](https://tiptap.dev) (headless rich text editor)

## 🏆 Challenges

The most important skill you need to progress in your software development career - ability to read other people's code. Completing these challenges is the perfect way to do it, while also practicing your coding skills. Fork this repo and complete a challenge - then make a PR and I will try to review it for you.

If you need hints or tips on how to complete a challenge, open an issue.

### Build a new feature

Here are some ideas:

- [Easy] Add an ability to delete a note.
- [Easy] Add an ability change your password.
- [Easy] Add more text-editor toolbar controls, e.g. font selection, paragraph alignment.
- [Medium] Add ability to add images to notes.
- [Medium] Add notion-like commands: popup that allows you to add blocks and formatting after typing `/` (e.g. add heading, add image).
- [Hard] Add an ability to have multiple users and switch between them.
- [Hard] Add an ability to sync notes to the backend of your choosing.

Feel free to propose your own in the issues.

### Fix an issue

- [Easy] Currently the notes are saved 1 second after you finish typing. If you refresh the app in that one second, the note will not be saved. Prevent leaving the page, if the note is still being saved.
- [Easy] Long note titles overflow the sidebar, add ellipsis (e.g. `"Very long ti..."`) on such titles.
- [Very Hard] Make it so you don't have to keep entering the password on every refresh, after the initial authentication.

### Who am I?

I'm Vincas, and I help beginners learn real-world frontend development using ReactJS.

- Twitter - [@VincasStonys](https://twitter.com/VincasStonys)
- Blog - [codefrontend.com](https://codefrontend.com)
- Email - vincas.stonys@codefrontend.com
