# Guidelines for code design and structure

## Table of Contents

  - [1. Generals](#1-generals)
    - [1.1 Philosophy](#11-philosophy)
    - [1.2 Naming](#12-naming)
      - [1.2.1 Naming of files](#121-naming-of-files)
      - [1.2.2 Naming of variables and functions](#122-naming-of-variables-and-functions)
  - [2. Project file architecture](#2-project-file-architecture)
  - [3. Architecture of a .svelte component](#3-architecture-of-a-svelte-component)
  - [4. Structure of a function](#4-structure-of-a-function)
    - [4.1 General](#41-general)
    - [4.2 Structure](#42-structure)

## 1. Generals

### 1.1 Philosophy

In general, the code should be as readable as possible. Do not to write more complex code than necessary, 
just because it looks good. Keep the code short, but keep it readable and easy.

Every component of this app, as well as every function, should have ONE a clear purpose.

Do not hardcode anything.

### 1.2 Naming

#### 1.2.1 Naming of files

Files will be named after their purpose. The First Letter is uppercase, and the first letter of every word in the name 
is written in uppercase too. 

An Example: `MyComponent.svelte`

#### 1.2.2 Naming of variables and functions

Variables and functions will be named after their purpose. The first letter is lowercase, and the first letter of every 
word in the name is written in uppercase. 

An Example: `myVariable` or `myFunction()`


## 2. Project file architecture

In src/routes, there are the main files of the project. `+Page.svelte` contains the main page of the website.

All pages that will be created will be stored in the src/lib/pages folder.

Components that are created to be a part of a page, for example, a custom button, 
will be stored in the src/lib/uiComponents folder.

Tests are not planned for now. 

## 3. Architecture of a .svelte component

A component should have a clear purpose. It should be as independent as possible.

On the top of the file, there should be a comment that describes the purpose of the component. 

Below that, there should be the script tag. A script tag declaration does always look like this: 
```sveltehtml
<script lang="ts">
    // imports
    // global variables
    // functions
</script>
```

Below the script, the svelte code is written.

Do not use script tags, as we are using Tailwindcss for styling.

## 4. Structure of a function

### 4.1 General

'A function should do one thing. It should do it well, it should do it only.' (Robert C. Martin)

If a function does more than one thing, it should be split into multiple functions.

As we are using TypeScript, the function should always have a clear type.

### 4.2 Structure

The first things that should be written in a function are the variables that will be used. 
This does not include loop variables.

Afterward, filter for conditions. If a condition is not met, return. Do not nest your code.

Then, the function should do its purpose. 

Try to return as early as possible, and always return a value. (Of course only if the function is not void)

An example function could look like this: 
```typescript
function authorizeLogin(username: string, password: string): boolean {
    if (!isValid(username) && !isValid(password)) return false;
    if (userExisting(username)) return false;
    if (password.length < 8) return false;
    return true;
}
