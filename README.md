# Quicksetup
```
cd myCollection
npm install
```

# Context of the issue
bruno application v3.x do not output console logging to its DevTool console (`CTRL`+`I`).
bruno can be downloaded [here](https://www.usebruno.com/downloads).

# step reproduction

1. Unsure you installed the api-testing-module: see Quicksetup
2. Download bruno 3.0.2
3. Open Bruno
4. Switch to dev mode (important to have access to the module)
5. Open myCollection
6. Open Bruno dev tools console `CTRL`+`I`
7. Run the request (sending the only request available or launching the bruno runner)
8. Assert the `Hello, World!` did not output to console
<img width="1650" height="422" alt="image" src="https://github.com/user-attachments/assets/4a73720c-27eb-4519-840f-1c63ee366cb9" />

> if you run bruno in cli mode it will work:
<img width="852" height="394" alt="image" src="https://github.com/user-attachments/assets/c1d39b17-3c2c-452c-a68f-96fe2d5de4f0" />
