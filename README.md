# gs-ui
UI library for Google Apps Scripts

## Usage

### 1. Add to your project `src` folder as Git submodule

```BASH
cd dist
git submodule add https://github.com/Glajik/gs-ui.git
```

### 2. Setup your .claspignore file

If you don't have it, create it in the same folder where is `.clasp.json` file.

Example of `.claspignore` file

```TEXT
# Ignore all submodule's folders, except 'dist'
gs-ui/**
!**/*.js
```

### 3. Use it

```JS
// Use column 1 as checkboxes
// Mark checkbox on row 5 on active sheet
uiSelect(5);

```

### Update dependency

From your root of project run

```BASH
git submodule update --remote
```
