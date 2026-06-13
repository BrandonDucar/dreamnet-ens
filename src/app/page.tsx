'use client';

import React, { useState } from 'react';

export default function Home() {
  const [ensName, setEnsName] = useState('neyclaw.dreamnet.eth');
  const [isResolving, setIsResolving] = useState(false);
  const [resolvedProfile, setResolvedProfile] = useState<any>(null);
  const [newSubdomain, setNewSubdomain] = useState('');
  const [operator, setOperator] = useState('brandon.eth');
  const [endpoint, setEndpoint] = useState('http://100.70.120.45:3310');
  const [caps, setCaps] = useState('llm-inference, social-posting');
  const [isRegistering, setIsRegistering] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);

  const handleResolve = async () => {
    if (!ensName) return;
    setIsResolving(true);
    setResolvedProfile(null);
    setLogs((prev) => [...prev, `🌐 [ENS] Querying resolver for name: ${ensName}...`]);
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const namePrefix = ensName.toLowerCase().split('.')[0];
    let capabilities = ['llm-inference', 'social-posting'];
    let resolvedEndpoint = 'http://100.70.120.45:3310';
    let resolvedAddress = '0x70997970C51812dc3A010C7d01b50e0d17dc79C8';
    
    if (namePrefix === 'neyclaw') {
      capabilities = ['llm-nemotron', 'farcaster-broadcast', 'swarm-voting'];
      resolvedEndpoint = 'http://100.70.120.45:3310';
      resolvedAddress = '0x3C44CdDB6a900fa2b585dd299e03d12FA3855541';
    } else if (namePrefix === 'sable') {
      capabilities = ['market-analysis', 'uniswap-liquidity-routing'];
      resolvedEndpoint = 'http://100.70.120.48:3220';
      resolvedAddress = '0x90F79bf6EB2c4f870365E785982E1f101E93b906';
    }

    setResolvedProfile({
      name: ensName,
      address: resolvedAddress,
      capabilities,
      endpoint: resolvedEndpoint,
      operator: 'brandon.eth'
    });

    setLogs((prev) => [
      ...prev,
      `✅ Resolved name: ${ensName}`,
      `📍 Address: ${resolvedAddress}`,
      `🛠️  Capabilities: [${capabilities.join(', ')}]`,
      `🔗 Endpoint: ${resolvedEndpoint}`
    ]);
    setIsResolving(false);
  };

  const handleRegister = async () => {
    if (!newSubdomain) return;
    const fullName = `${newSubdomain.toLowerCase()}.dreamnet.eth`;
    setIsRegistering(true);
    setLogs((prev) => [
      ...prev,
      `📝 [REGISTRY] Initiating subdomain allocation for: ${fullName}...`,
      `⚙️ Setting resolver text records: operator=${operator} | endpoint=${endpoint} | capabilities=${caps}`
    ]);
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const mockTx = '0x' + Array.from({ length: 64 }, () => Math.floor(Math.random() * 16).toString(16)).join('');
    setLogs((prev) => [
      ...prev,
      `🎉 Subdomain "${fullName}" registered and mapped!`,
      `🔗 Tx: https://etherscan.io/tx/${mockTx.slice(0, 24)}...`
    ]);
    setIsRegistering(false);
    setNewSubdomain('');
  };

  const resetAll = () => {
    setResolvedProfile(null);
    setLogs([]);
    setNewSubdomain('');
  };

  const architectureFlowSteps = [
  {
    "title": "Subdomain Lookup",
    "desc": "An agent or user queries the ENS registry for an agent's human-readable name, e.g. neyclaw.dreamnet.eth."
  },
  {
    "title": "Resolver Retrieval",
    "desc": "ENS contract returns the wallet address and parses decentralized text records for capability tags."
  },
  {
    "title": "Connection Discovery",
    "desc": "The client extracts connection profiles, including communication endpoints and active operator keys."
  },
  {
    "title": "Swarm Handshake",
    "desc": "The querying node establishes direct peer-to-peer tunnels, verifying authority against parent domain ownership."
  }
];

  return (
    <div style={{
      backgroundColor: '#09090b',
      color: '#e4e4e7',
      minHeight: '100vh',
      fontFamily: 'Inter, system-ui, sans-serif',
      padding: '40px 20px',
      boxSizing: 'border-box'
    }}>
      {/* Header */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto 40px auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        paddingBottom: '20px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{
            padding: '12px',
            borderRadius: '16px',
            background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.2) 0%, rgba(219, 39, 119, 0.1) 100%)',
            color: '#ec4899',
            fontWeight: 'bold',
            fontSize: '24px',
            border: '1px solid rgba(236, 72, 153, 0.3)'
          }}>🌐</span>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <h1 style={{ margin: 0, fontSize: '24px', fontWeight: 'bold', color: '#ffffff' }}>
                DreamNet x ENS (Ethereum Name Service)
              </h1>
              <span style={{
                fontSize: '11px',
                fontWeight: '600',
                padding: '3px 10px',
                borderRadius: '20px',
                background: 'rgba(16, 185, 129, 0.1)',
                color: '#10b981',
                border: '1px solid rgba(16, 185, 129, 0.2)'
              }}>Live Integration</span>
            </div>
            <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: '#a1a1aa' }}>
              DreamNet Partner Lab Microsite
            </p>
          </div>
        </div>
        <button
          onClick={resetAll}
          style={{
            background: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '12px',
            padding: '10px 20px',
            fontSize: '13px',
            color: '#e4e4e7',
            cursor: 'pointer'
          }}
        >
          Reset Demo
        </button>
      </div>

      {/* Thesis */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto 40px auto',
        padding: '30px',
        background: 'rgba(255, 255, 255, 0.01)',
        border: '1px solid rgba(255, 255, 255, 0.06)',
        borderRadius: '24px'
      }}>
        <h2 style={{ margin: '0 0 10px 0', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '2px', color: '#ec4899', fontWeight: 'bold' }}>
          Thesis
        </h2>
        <p style={{ margin: 0, fontSize: '16px', lineHeight: '1.6', color: '#f4f4f5' }}>
          To collaborate, autonomous agent nodes must identify and connect with each other. dreamnet-ens registers and resolves ENS subdomains (e.g. agent.dreamnet.eth), leveraging ENS text records for decentralized service discovery, capability cataloging, and operator credentials verification.
        </p>
      </div>

      {/* Main Grid */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '3fr 2fr',
        gap: '40px',
        alignItems: 'start'
      }}>
        {/* Interactive Console */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.01)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          borderRadius: '24px',
          padding: '30px'
        }}>
          <h3 style={{ margin: '0 0 20px 0', fontSize: '18px', fontWeight: 'bold', color: '#ffffff' }}>
            Interactive Simulation Console
          </h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
          <div>
            <h4 style={{ margin: '0 0 12px 0', fontSize: '11px', color: '#71717a', fontWeight: 'bold', textTransform: 'uppercase' }}>Resolve Profile</h4>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
              <input
                type="text"
                style={{
                  flex: 1,
                  borderRadius: '8px',
                  background: 'rgba(0,0,0,0.4)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  padding: '8px 10px',
                  fontSize: '11px',
                  color: '#ffffff',
                  fontFamily: 'monospace'
                }}
                value={ensName}
                onChange={(e) => setEnsName(e.target.value)}
              />
              <button onClick={handleResolve} disabled={isResolving} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', color: '#ec4899', borderRadius: '8px', padding: '0 12px', fontSize: '11px', cursor: 'pointer' }}>
                Resolve
              </button>
            </div>

            {resolvedProfile && (
              <div style={{ padding: '12px', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '10px', fontSize: '10.5px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div>Operator: {resolvedProfile.operator}</div>
                <div style={{ wordBreak: 'break-all' }}>Addr: {resolvedProfile.address}</div>
                <div>Endpoint: {resolvedProfile.endpoint}</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: '4px' }}>
                  {resolvedProfile.capabilities.map((c: string) => (
                    <span key={c} style={{ background: 'rgba(236,72,153,0.1)', color: '#ec4899', padding: '2px 6px', borderRadius: '4px', fontSize: '9px' }}>{c}</span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div>
            <h4 style={{ margin: '0 0 12px 0', fontSize: '11px', color: '#71717a', fontWeight: 'bold', textTransform: 'uppercase' }}>Register Name</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <input type="text" placeholder="Desired subdomain" style={{ width: '100%', boxSizing: 'border-box', borderRadius: '8px', background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.08)', padding: '8px 10px', fontSize: '11px', color: '#ffffff' }} value={newSubdomain} onChange={(e) => setNewSubdomain(e.target.value)} />
              <button onClick={handleRegister} disabled={isRegistering || !newSubdomain} style={{ width: '100%', padding: '10px', borderRadius: '8px', background: '#ec4899', color: '#ffffff', border: 'none', fontWeight: 'bold', fontSize: '11px', cursor: 'pointer' }}>
                Register Subdomain
              </button>
            </div>

            {logs.length > 0 && (
              <div style={{
                height: '80px',
                overflowY: 'auto',
                borderRadius: '8px',
                background: 'rgba(0,0,0,0.4)',
                padding: '8px',
                marginTop: '10px',
                fontSize: '9px',
                fontFamily: 'monospace',
                color: '#a1a1aa',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px'
              }}>
                {logs.map((log, idx) => (
                  <div key={idx} style={{ color: log.startsWith('✅') || log.startsWith('🎉') ? '#34d399' : '#a1a1aa' }}>{log}</div>
                ))}
              </div>
            )}
          </div>
        </div>
        </div>

        {/* Sidebar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          {/* Flow */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.01)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '24px',
            padding: '25px'
          }}>
            <h4 style={{ margin: '0 0 15px 0', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1.5px', color: '#a1a1aa', fontWeight: 'bold' }}>
              Integration Flow
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {architectureFlowSteps.map((step: any, idx: number) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <span style={{
                    background: 'rgba(236, 72, 153, 0.1)',
                    color: '#ec4899',
                    borderRadius: '50%',
                    width: '20px',
                    height: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '10px',
                    fontWeight: 'bold',
                    flexShrink: 0
                  }}>{idx + 1}</span>
                  <div>
                    <h5 style={{ margin: 0, fontSize: '12px', fontWeight: 'bold', color: '#ffffff' }}>{step.title}</h5>
                    <p style={{ margin: '3px 0 0 0', fontSize: '11px', color: '#71717a', lineHeight: '1.4' }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* GitHub */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.01)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '24px',
            padding: '25px'
          }}>
            <h4 style={{ margin: '0 0 12px 0', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1.5px', color: '#a1a1aa', fontWeight: 'bold' }}>
              Sponsor Integration Link
            </h4>
            <div style={{
              display: 'flex',
              background: 'rgba(0, 0, 0, 0.4)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '12px',
              padding: '10px 12px',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontFamily: 'monospace',
              fontSize: '11px'
            }}>
              <span style={{ color: '#a1a1aa', overflowX: 'auto', whiteSpace: 'nowrap' }}>
                git clone https://github.com/BrandonDucar/dreamnet-ens.git
              </span>
              <button
                onClick={() => {
                  navigator.clipboard.writeText('git clone https://github.com/BrandonDucar/dreamnet-ens.git');
                  alert('Copied!');
                }}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '6px',
                  padding: '4px 8px',
                  fontSize: '9px',
                  color: '#ffffff',
                  cursor: 'pointer'
                }}
              >
                Copy
              </button>
            </div>
          </div>

          {/* NotebookLM */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.01)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '24px',
            padding: '25px'
          }}>
            <h4 style={{ margin: '0 0 12px 0', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1.5px', color: '#a1a1aa', fontWeight: 'bold' }}>
              NotebookLM Briefing Prompt
            </h4>
            <div style={{
              background: 'rgba(0, 0, 0, 0.3)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              padding: '12px',
              fontSize: '11px',
              color: '#d4d4d8',
              lineHeight: '1.4',
              position: 'relative'
            }}>
              {"Explain how dreamnet-ens implements EnsRegistry to resolve agent subdomains and extract service discovery metadata from ENS text records."}
              <button
                onClick={() => {
                  navigator.clipboard.writeText("Explain how dreamnet-ens implements EnsRegistry to resolve agent subdomains and extract service discovery metadata from ENS text records.");
                  alert('Copied!');
                }}
                style={{
                  position: 'absolute',
                  top: '6px',
                  right: '6px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '6px',
                  padding: '3px 6px',
                  fontSize: '9px',
                  color: '#ffffff',
                  cursor: 'pointer'
                }}
              >
                Copy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
