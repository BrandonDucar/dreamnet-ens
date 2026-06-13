import { AbstractProvider, type JsonRpcProvider } from 'ethers';

export interface AgentProfile {
  ensName: string;
  address: string;
  capabilities: string[];
  endpoint: string;
  operator: string;
  isMocked: boolean;
}

export class EnsRegistry {
  private rpcUrl: string;

  constructor() {
    this.rpcUrl = process.env.PROVIDER_RPC_URL || 'https://sepolia.base.org';
  }

  /**
   * Resolves the agent ENS name and text records to build a complete connection profile.
   */
  async resolveAgentProfile(
    ensName: string,
    provider?: AbstractProvider
  ): Promise<AgentProfile> {
    console.log(`\n🌐 [ENS REGISTRY] Resolving Agent Profile for: ${ensName}...`);

    // We check if it is a standard domain. If not, or if we want to run sandbox demo:
    if (ensName.endsWith('.dreamnet.eth') || ensName.endsWith('.test')) {
      return this.mockResolve(ensName);
    }

    try {
      if (!provider) {
        const { JsonRpcProvider } = await import('ethers');
        provider = new JsonRpcProvider(this.rpcUrl);
      }

      // 1. Resolve primary address
      const address = await provider.resolveName(ensName);
      if (!address) {
        throw new Error(`NAME_NOT_RESOLVED`);
      }

      // 2. Fetch standard resolver and query text records
      const resolver = await provider.getResolver(ensName);
      if (!resolver) {
        throw new Error(`RESOLVER_NOT_FOUND`);
      }

      const capabilitiesStr = await resolver.getText('capabilities');
      const endpoint = await resolver.getText('endpoint') || 'N/A';
      const operator = await resolver.getText('operator') || 'N/A';

      const capabilities = capabilitiesStr 
        ? capabilitiesStr.split(',').map(c => c.trim()) 
        : [];

      console.log(`✅ [ENS REGISTRY] Resolution success!`);
      console.log(`📍 Address:    ${address}`);
      console.log(`🛠️  Caps:       ${capabilities.join(', ')}`);
      console.log(`🔗 Endpoint:   ${endpoint}`);
      console.log(`👤 Operator:   ${operator}`);

      return {
        ensName,
        address,
        capabilities,
        endpoint,
        operator,
        isMocked: false
      };
    } catch (err: any) {
      console.warn(`⚠️  [ENS REGISTRY] Real resolution failed (${err?.message || err}). Falling back to simulation profile.`);
      return this.mockResolve(ensName);
    }
  }

  /**
   * Generates a high-fidelity simulation profile.
   */
  private async mockResolve(ensName: string): Promise<AgentProfile> {
    await new Promise(resolve => setTimeout(resolve, 1200));

    const namePrefix = ensName.split('.')[0];
    
    // Custom capabilities based on agent names
    let capabilities = ['llm-inference', 'social-posting'];
    let endpoint = 'http://100.70.120.45:3310';
    let address = '0x70997970C51812dc3A010C7d01b50e0d17dc79C8';
    
    if (namePrefix === 'neyclaw') {
      capabilities = ['llm-nemotron', 'farcaster-broadcast', 'swarm-voting'];
      endpoint = 'http://100.70.120.45:3310';
      address = '0x3C44CdDB6a900fa2b585dd299e03d12FA3855541';
    } else if (namePrefix === 'sable') {
      capabilities = ['market-analysis', 'uniswap-liquidity-routing'];
      endpoint = 'http://100.70.120.48:3220';
      address = '0x90F79bf6EB2c4f870365E785982E1f101E93b906';
    }

    console.log(`✅ [ENS SIMULATOR] Mock resolution success for ${ensName}`);
    console.log(`📍 Address:    ${address}`);
    console.log(`🛠️  Caps:       ${capabilities.join(', ')}`);
    console.log(`🔗 Endpoint:   ${endpoint}`);
    console.log(`👤 Operator:   brandon.eth`);

    return {
      ensName,
      address,
      capabilities,
      endpoint,
      operator: 'brandon.eth',
      isMocked: true
    };
  }
}
