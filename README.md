# DreamNet ENS Module: Agent Identity Passport & Service Discovery 🌐🤖

Part of the **DreamNet Partner Labs Suite**.

## Sponsor
**ENS (Ethereum Name Service)** - Decentralized naming system built on the Ethereum blockchain.

## Thesis
As the AI agent population grows, agents need a way to find, identify, and verify each other. A hex address is anonymous. It tells you nothing about what capabilities the agent possesses, who operates it, or how to connect to it.

`dreamnet-ens` leverages the **Ethereum Name Service (ENS)** to create the **Agent Identity Passport**. Every agent is assigned a subdomain (e.g., `neyclaw.dreamnet.eth`). Using ENS Text Records, the agent profile publishes its public endpoints (e.g., Tailscale tunnel IP) and supported capabilities. The parent name (`dreamnet.eth`) asserts authority, guaranteeing that subdomains belong to the verified operator's fleet.

---

## What It Demonstrates
1. **ENS Agent Profile Registry**: Formats and parses agent attributes into standard ENS text records.
2. **Cryptographic Service Discovery**: Resolves agent capabilities (e.g., LLM inference, social posting), connection endpoints, and parent operators on-chain.
3. **Interactive Domain Console**: Renders active subdomains, resolves metadata, and validates ownership.

---

## Live vs. Sandbox Status
* **Live Integration**: Reads directly from live ENS Registry and Resolver contracts when a valid RPC provider is supplied.
* **Sandbox Demo**: Automatically falls back to a high-fidelity local simulator mode if no `PROVIDER_RPC_URL` is detected in the environment.

---

## Installation & Setup

### Install Dependencies
```bash
pnpm install
```

### Run Web Dashboard
```bash
pnpm dev
```
Navigate to `http://localhost:3000` to interact with the UI.

### Run CLI Demo
To run the CLI lookup:
```bash
pnpm run demo
```
To lookup a custom domain:
```bash
pnpm run demo -- --name=youragent.dreamnet.eth
```

---

## Environment Variables
Create a `.env` file in the root directory:
```bash
PROVIDER_RPC_URL=https://sepolia.base.org
ENS_REGISTRY_ADDRESS=0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e
```

---

## What is Not Production Yet
* **Automated Registrations**: Subdomains are configured manually. Production requires a registrar interface supporting gas-efficient batch subdomain minting.
* **EAS Verification**: Operator references should be backed by Ethereum Attestation Service (EAS) claims to prevent spoofing of operator identities.

---

## NotebookLM Summary Section

* **Core Purpose**: `dreamnet-ens` provides human-readable identity subdomains and decentralized discovery text records for autonomous agent networks using ENS.
* **Technology Stack**: Next.js App Router, React, ethers.js, ENS Registry/Resolver integration.
* **Demo Flow**: User queries a subdomain, resolves it to retrieve the wallet address, capability tags (e.g. LLM, posting), communication endpoints, and operator credentials.
* **Key Benefit**: Replaces centralized agent directories with secure ENS smart contracts, ensuring censorship-resistant service discovery.

---

## Cloudflare Pages Deployment

This project is configured for static HTML export and can be deployed directly to **Cloudflare Pages**.

### Prerequisites
Make sure you have Node >= 20 and Wrangler installed globally:
```bash
npm install -g wrangler
```

### Build Project
Build the static site locally using pnpm:
```bash
pnpm install
pnpm run build
```
This will compile the Next.js application and export the static assets into the `out/` directory.

### Deploy via Wrangler CLI
Deploy the pre-built static directory directly to Cloudflare Pages:
```bash
npx wrangler pages deploy out --project-name dreamnet-ens
```
*(Replace `<project-name>` with your desired project identifier, e.g., `dreamnet-0g`)*

### Continuous Integration (GitHub Integration)
Alternatively, you can connect your public GitHub repository to the Cloudflare Pages Dashboard:
1. Navigate to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
2. Select your repository.
3. Configure build settings:
   - **Framework Preset**: `Next.js (Static HTML Export)`
   - **Build Command**: `pnpm run build`
   - **Build Output Directory**: `out`
4. Add environment variables if needed (none are required at build time).
5. Click **Save and Deploy**.
