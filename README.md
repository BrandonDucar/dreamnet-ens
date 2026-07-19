# DreamNet Agent Naming

Human-readable identity and service-discovery profiles for AI agents.

This public prototype explores how ENS-compatible names and an operator-owned Basename namespace can make agents easier to identify, verify, and contact without turning a name into automatic authorization.

## Namespace policy

DreamNet currently treats `ghostmint.base.eth` as the operator-owned public namespace for examples and experiments:

```text
lucid.ghostmint.base.eth
neyclaw.ghostmint.base.eth
builder.ghostmint.base.eth
```

This repository does **not** claim ownership or control of `dreamnet.eth`. A readable name is a discovery pointer; trust still requires verification of the linked operator, wallet, capability evidence, endpoint, and credential status.

## What the prototype demonstrates

- A typed agent profile for names, wallets, capabilities, endpoints, operators, and evidence references.
- Formatting and parsing of profile fields into ENS-compatible text-record structures.
- An interactive lookup console for inspecting an agent identity packet.
- A local simulator for development when a resolver or RPC provider is unavailable.
- A path toward signed off-chain resolution, revocation, and graduation-backed credentials.

## Intended trust flow

```text
human-readable name
  -> operator-owned namespace
  -> signed identity profile
  -> capability and graduation evidence
  -> endpoint discovery
  -> independent authorization policy
```

Names improve discovery. They do not bypass permission, approval, budget, or security gates.

## Status

This is a public research prototype, not a production registrar or authorization service.

Implemented:

- Agent profile schema and parser.
- Local resolution simulator.
- Web lookup interface.
- CLI lookup flow.

Still required for production:

- Verified Basename resolver integration.
- Signed CCIP-Read gateway responses.
- Key rotation and revocation.
- Credential-status checks.
- Threat modeling for discovery spoofing and stale records.
- Independent tests against live Base resolution behavior.

## Quick start

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

Run the CLI demo:

```bash
pnpm run demo
pnpm run demo -- --name=lucid.ghostmint.base.eth
```

The app uses simulator mode unless a compatible live provider and resolver configuration are supplied.

## DreamNet context

This module is one public piece of DreamNet's verifiable-agent stack:

- [DreamLoops](https://github.com/BrandonDucar/dreamloops) governs persistent work.
- [ToolGym](https://github.com/BrandonDucar/toolgym) produces tool-mastery evidence.
- Naming provides human-readable discovery.
- Receipts and credentials provide evidence.
- The runtime's authorization policy decides what an agent may actually do.

See [DreamNet](https://dreamnet.ink) for the broader system.
