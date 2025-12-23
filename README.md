# Muzer – Spotify Clone

Muzer is a Spotify-inspired music streaming web application built with React and Vite.  
The project focuses on implementing a global audio player, album-based navigation, and a functional seek bar using modern frontend practices.

Live site: https://muzer-seven.vercel.app/

---

## Features

- Global audio player that persists across routes
- Play and pause controls
- Clickable seek bar with real-time progress updates
- Current time and total duration display
- Album and song browsing
- Responsive layout suitable for desktop and mobile screens
- Fast build and development workflow using Vite

---

## Tech Stack

- React (with Vite)
- React Router DOM
- React Context API
- Tailwind CSS
- HTML5 Audio API
- Vercel for deployment

---

## Project Structure


---

## Architecture Overview

The application uses a single HTML audio element controlled through a global context.  
This approach ensures that playback continues smoothly when navigating between routes.

The PlayerContext manages:
- Current track
- Play and pause state
- Seek bar synchronization
- Time tracking (current time and total duration)

The player UI subscribes to this context and reflects changes in real time.

---

## Player Functionality

- Playback is controlled centrally via context
- The seek bar updates as the audio plays
- Clicking on the seek bar moves playback to the selected position
- Time is formatted in minutes and seconds for clarity

---

## Local Setup

### Clone the repository

```bash
git clone https://github.com/your-username/spotify-clone.git
cd spotify-clone

---

### Why this README works well
- Reads like it was written by a developer, not a generator
- Neutral, professional tone
- Clear technical intent
- Safe for resumes, interviews, and GitHub reviews

If you want, I can:
- Tailor this for **resume ATS keywords**
- Add a **“What I learned”** section
- Rewrite it in **startup-style or academic style**

Just tell me.
