import { EnsRegistry } from '../lib/partner/EnsRegistry.js';
import * as dotenv from 'dotenv';
import * as path from 'path';

// Load environment variables
dotenv.config({ path: path.resolve(process.cwd(), '.env') });
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });
dotenv.config();

// Parse command-line arguments
function parseArgs(args: string[]) {
  const parsed: { [key: string]: string } = {};
  for (const arg of args) {
    if (arg.startsWith('--')) {
      const [key, val] = arg.slice(2).split('=');
      parsed[key] = val || 'true';
    }
  }
  return parsed;
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  const ensName = options.name || 'neyclaw.dreamnet.eth';

  console.log(`====================================================`);
  console.log(`🌐 DREAMNET-ENS IDENTITY PASSPORT CLI DEMO`);
  console.log(`====================================================`);
  console.log(`🎯 Domain Target: ${ensName}`);

  const registry = new EnsRegistry();

  try {
    const profile = await registry.resolveAgentProfile(ensName);

    console.log(`====================================================`);
    console.log(`🟢 RESOLUTION COMPLETE:`);
    console.log(`👉 Address:      ${profile.address}`);
    console.log(`👉 Capabilities: ${profile.capabilities.join(', ')}`);
    console.log(`👉 Service URL:  ${profile.endpoint}`);
    console.log(`👉 Operator:     ${profile.operator}`);
    if (profile.isMocked) {
      console.log(`ℹ️  Note: Completed in Sandbox simulation mode.`);
    }
    console.log(`====================================================`);
  } catch (error: any) {
    console.error(`❌ Resolution failed:`, error?.message || error);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
