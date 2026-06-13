# Discord Post: Metals Mint / Goldback x ENS x Chainlink

Hey ENS builders - I'm at ETHGlobal NYC building a DreamNet partner lab around a Metals Mint relationship in Jupiter, Florida and a Goldback-adjacent pilot path.

The point is not "tokenize a Goldback" first. The stronger wedge is:

```text
identity -> verification -> workflow -> receipt
```

ENS is the identity backbone. Every real-world participant, location, asset record, and agent can get a persistent name:

```text
metalsmint.eth
dealer-001.jupiter.metalsmint.eth
vault-a.metalsmint.eth
atm-002.jupiter.metalsmint.eth
reserve-auditor.metalsmint.eth
gb-fl-2026-000001.inventory.metalsmint.eth
```

Those names can carry text records for:

- dealer role
- custodian status
- vault or ATM location
- inventory batch metadata
- reserve-auditor agent endpoint
- Chainlink proof feed
- redemption / buyback status
- receipt policy

Chainlink handles verification: inventory feeds, reserve attestations, spot gold / valuation feeds, stale-proof logic, and circuit breakers.

DreamNet turns the flow into receipts: who initiated the action, which ENS identities were involved, which agent approved it, reserve state, inventory state, valuation, timestamp, and whether tokenization is disabled or enabled.

Practical merchant flow:

```text
Merchant accepts Goldbacks
ENS resolves dealer / inventory / auditor identities
Chainlink verifies reserve and valuation state
DreamNet issues a receipt
Dealer inventory updates
```

No speculation required. Just identity, verification, commerce, and operating infrastructure.

Repo:
https://github.com/BrandonDucar/dreamnet-ens

Related Chainlink proof rail:
https://github.com/BrandonDucar/dreamnet-chainlink

Live demo:
https://dreamnet-ens.pages.dev

Question for ENS folks:

Would the most compelling weekend demo be dealer/vault/ATM subnames, inventory-batch subnames, agent text records, or a receipt-first flow where every physical commerce action resolves through ENS?
