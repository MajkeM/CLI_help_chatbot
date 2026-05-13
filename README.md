dependencies:
├── dotenv@17.4.2
├── openai@6.37.0
└── typescript@6.0.3

here https://groq.com/ you need to create api key and than paste it to .env file as GROQ_API_KEY={KEY}

// set it:
you need to have node downloaded
1. pnpm init
2. pnpm install dotenv openai typescript

// add to your package.json

"type": "module"

and 

// this if you want it as a global command

"bin": {
    
    "askAI": "./cli.js",

},

pnpm setup
pnpm link


// you can run it with command:
npx tsx index.ts 

// or if you have it as a global command
askAI "promt(whatever you want to ask AI)" 

