# training-react

# REACT ADVANCED PRACTICE

## OVERVIEW

- This document provides requirements, technical stack, and estimation for React Advanced Practice.
- Design [Figma](https://www.figma.com/design/K53tONfNCdHH5ukLs5IcPp/bookshelter---React-practice?node-id=2314-32&node-type=frame&t=xu6nbwioznKB9eb8-0)

## TARGETS

- Apply useContext for state management (You can scan state management part to be offered more options).
- Take a narrow view to check re-rendering and optimize performance of one React application.
- Become better understood and create your own custom hook to reduce redundant code.
- Study and apply uncontrolled components in some cases to avoid needless state management gradually.
- Be aware of catching common and specific errors (errors from api, from logic,...) for one React application to prevent crashing issues dramatically.
- Check PageSpeed scores frequently during development time and ensure the scores at minimum 98 points.

## TECHNICAL STACK

- React
- React router
- Vite
- HTML5/CSS3/Typescript
- Vercel
- Prettier
- MockAPI
- Storybook

## REQUIREMENTS

- Apply code-splitting
- Apply useContext to manage state globally
- Catching rendering errors with an error boundary
- Apply uncontrolled components to avoid needless state management gradually.
- Building custom hooks to reduce redundant code.
- Implement Unit Test for app
- Apply react.memo to skip re-render when props are unchanged
- Implement Comments in detail page.

## PREREQUISITE

- Nodejs version v18.18.0
- React 18.2.0 (or latest version)
- Vercel

## How to run

1. Clone source:

```
git clone https://github.com/tranchinh123/react-training.git
```

2. Git checkout

```
git checkout feat/react-advanced=practice
cd bookshelter-app
```

3. Install packages

```
pnpm install
```

4. Get endpoint [link](https://drive.google.com/file/d/1D2Wr2CGX0QCjkIbaEopMsWlPCEdLoZDi/view?usp=sharing)

5. Setup env

```
cp .env.example .env
```

-Paste all the content you got in step 4

- Run project

```
pnpm run dev
```
